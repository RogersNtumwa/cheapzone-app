import axios from "axios";

import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

export const getOrders = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const { data } = await axios.get(
      "https://cheapzone-api.herokuapp.com/api/v1/orders"
    );

    dispatch({
      type: ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_FAIL,
    });
  }
};

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

    const { data } = await axios.post(
      "https://cheapzone-api.herokuapp.com/api/v1/orders",
      body,
      config
    );
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

export const getOrder = (id) => async (dispatch) => {
  dispatch({
    type: ORDER_DETAILS_REQUEST,
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

    const { data } = await axios.get(
      `https://cheapzone-api.herokuapp.com/api/v1/orders/${id}`,
      config
    );
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
