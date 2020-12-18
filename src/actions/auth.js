import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  SIGN_OUT,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

export const registerUser = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const { data } = await axios.post("/api/v1/users/register", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const { data } = await axios.post("/api/v1/users", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = await axios.get("/api/v1/users/me");
    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};
