import axios from "axios";
import * as types from "../constants/typesReducer";

export function getTasks(id) {
  return async (dispatch) => {
    dispatch({
      type: types.GET_TASKS
    })
    try {
      const response = await axios.get(`http://localhost:3000/menu/${id}`);
      console.log(response.data)
      dispatch({
        type: types.GET_TASKS_SUCCEED,
        payload: response.data
      })
    } catch {
      dispatch({
        type: types.GET_TASKS_FAILED
      })
    }
  }
}