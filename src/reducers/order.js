import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCEESS,
  ORDER_DELETE_FAIL,
} from "../actions/types";

export const OrderReducer = (state = { loading: true, orders: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_SUCCESS:
      return {
        loading: false,
        orders: payload,
      };
    case ORDER_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const PlaceOrderReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      localStorage.removeItem("paymentMethod");
      localStorage.removeItem("cartItems");
      localStorage.removeItem("shippingAddress");
      return {
        loading: false,
        success: true,
        order: payload,
      };

    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
const inititalState = {
  loading: true,
  order: {},
};
export const OrderDetailsReducer = (state = inititalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const deleteOrderReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_DELETE_REQUEST:
      return { loading: true, ...state };
    case ORDER_DELETE_SUCCEESS:
      return {
        success: true,
        loading: false,
      };
    case ORDER_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
