import {
  PRODUCTS_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_FAIL,
  RELATED_PRODUCT_REQUEST,
  RELATED_PRODUCT_SUCCESS,
  RELATED_PRODUCT_FAIL,
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const listProducts = (keyword = "") => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://cheapzone-api.herokuapp.com/api/v1/products?keyword=${keyword}`
    );
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const productDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://cheapzone-api.herokuapp.com/api/v1/products/${id}`
    );
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });

    dispatch(getRelatedProducts(id));
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteproduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST });
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    await axios.delete(
      `https://cheapzone-api.herokuapp.com/api/v1/products/${id}`
    );
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (formdata) => async (dispatch) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(formdata);
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const { data } = await axios.post(
      "https://cheapzone-api.herokuapp.com/api/v1/products",
      body,
      config
    );
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getstate) => {
  dispatch({
    type: PRODUCT_UPDATE_REQUEST,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.patch(
      `https://cheapzone-api.herokuapp.com/api/v1/products/${product._id}`,
      product,
      config
    );
    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
    });
  }
};

export const getRelatedProducts = (id) => async (dispatch) => {
  dispatch({ type: RELATED_PRODUCT_REQUEST });
  try {
    const { data } = await axios.get(
      `https://cheapzone-api.herokuapp.com/api/v1/products/${id}/relatedProducts`
    );
    dispatch({
      type: RELATED_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RELATED_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
