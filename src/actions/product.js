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
  REVIEW_PRODUCT_REQUEST,
  REVIEW_PRODUCT_SUCCESS,
  REVIEW_PRODUCT_FAIL,
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

// Desc: Gets all products
// access: public
export const listProducts = (keyword = "", currentPage) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://cheapzone-api.herokuapp.com/api/v1/products?keyword=${keyword}&page=${currentPage}`
      // `https://cheapzone-api.herokuapp.com/api/v1/products?keyword=${keyword}`
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

export const createProduct = (formData) => async (dispatch) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
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
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
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

export const newReview = (formData) => async (dispatch) => {
  dispatch({
    type: REVIEW_PRODUCT_REQUEST,
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
    console.log(formData);

    const { data } = await axios.put(
      `https://cheapzone-api.herokuapp.com/api/v1/products/${formData.id}/review`,
      body,
      config
    );
    dispatch({
      type: REVIEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: REVIEW_PRODUCT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
