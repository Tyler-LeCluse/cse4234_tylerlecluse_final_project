import { GET_MOVIES } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.getMovies();
    // console.log(data);
    dispatch({ type: GET_MOVIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};