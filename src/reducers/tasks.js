import * as types from "../constants/typesReducer";

const initialState = {
  tasks: []
}

export function tasks(state = initialState, action) {
  switch (action.type) {
    case types.GET_TASKS:
      return { ...state, year: action.payload, isLoading: true }
    case types.GET_TASKS_SUCCEED:
      return { ...state, tasks: action.payload.tasks, isLoading: false }
    case types.GET_TASKS_FAILED:
      return { ...state, error: action.error}
    default:
      return state
  }
}