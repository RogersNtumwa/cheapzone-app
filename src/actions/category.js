import axios from "axios";
import {
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_FAIL,
} from "./types";

export const listCategories = () => async (dispatch) => {
  dispatch({ type: CATEGORY_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/v1/category");
    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
    });
  }
};
