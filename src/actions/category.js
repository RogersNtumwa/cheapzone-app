import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL } from "./types";

export const listCategories = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const { data } = await axios.get(
      "https://cheapzone-api.herokuapp.com/api/v1/category"
    );
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
