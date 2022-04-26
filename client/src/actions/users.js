import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signUp = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
