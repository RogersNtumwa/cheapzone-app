import axios from "axios";

import setAuthToken from "../utils/setAuthToken";
import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "./types";

export const getUsers = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const { data } = await axios.get(
      "https://cheapzone-api.herokuapp.com/api/v1/users/list"
    );

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
    });
  }
};
