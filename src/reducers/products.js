import { PRODUCT_LIST_SUCCESS, PRODUCTS_LIST_FAIL } from "../actions/types";
const initialState = {
  products: [],
  product: null,
  error: {},
  loading: true,
};

const products = (state = initialState, action) => {
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

export default products;
