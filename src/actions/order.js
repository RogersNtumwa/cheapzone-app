import axios from "axios";

import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const createOrder = (formData) => async (dispatch) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
  });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(formData);

    const { data } = await axios.post("/api/v1/orders", body, config);
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
