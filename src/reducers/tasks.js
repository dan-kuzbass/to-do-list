import * as types from "../constants/typesReducer";

const initialState = {
  tasks: [
    { id: "3", name: "Поспать", date: "01.01.2014" },
    { id: "4", name: "Поработать", date: "01.01.2015" },
    { id: "5", name: "Сходить в магаз", date: "01.01.2016" },
    { id: "1", name: "Сварить кофе", date: "01.01.2012" },
    { id: "2", name: "Пообедать", date: "01.01.2013" }
  ]
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