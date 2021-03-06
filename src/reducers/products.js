import {
  PRODUCT_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  RELATED_PRODUCT_REQUEST,
  RELATED_PRODUCT_FAIL,
  RELATED_PRODUCT_SUCCESS,
  REVIEW_PRODUCT_REQUEST,
  REVIEW_PRODUCT_SUCCESS,
  REVIEW_PRODUCT_FAIL,
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
export const deleteProductReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DELETE_SUCCESS:
      return {
        success: true,
        loading: false,
      };
    case PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const createProductReducer = (
  state = { success: false, product: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_CREATE_SUCCESS:
      return {
        success: true,
        loading: false,
        product: payload,
      };
    case PRODUCT_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const editProductReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: payload,
      };
    case PRODUCT_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PRODUCT_UPDATE_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const relatedProductsReducer = (
  state = { products: [], loading: true },
  { type, payload }
) => {
  switch (type) {
    case RELATED_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case RELATED_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case RELATED_PRODUCT_FAIL:
      return {
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const reviewProdutReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case REVIEW_PRODUCT_REQUEST:
      return {
        loading: true,
      };

    case REVIEW_PRODUCT_SUCCESS:
      return {
        ...state,
        review: payload,
        loading: false,
      };
    case REVIEW_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      break;
  }
};
