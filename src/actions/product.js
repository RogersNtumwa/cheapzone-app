import { PRODUCTS_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "./types";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/v1/products");
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
