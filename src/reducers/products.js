import {
  PRODUCT_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from "../actions/types";
const initialState = {
  products: [],
  error: {},
  loading: true,
};

export const productsList = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case PRODUCTS_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const productDetails = (
  state = { product: { reviews: [] } },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        product: payload,
        loading: false,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
