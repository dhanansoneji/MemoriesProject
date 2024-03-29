import { AUTH, LOGOUT } from "../constants/actionTypes";
import * as api from "../api";

export const setAuth = (result, token) => {
  return { type: AUTH, payload: { result, token } };
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  return { type: LOGOUT };
};
