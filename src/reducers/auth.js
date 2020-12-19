import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOGOUT,
} from "../actions/types";
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  isAuthenticated: localStorage.getItem("isAuthenticated")
    ? localStorage.getItem("user")
    : false,
  token: localStorage.getItem("token"),
  loading: localStorage.getItem("token") ? false : true,
  errors: {},
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case USER_LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("shippingAddress");
      localStorage.removeItem("paymentMethod");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        errors: payload,
        loading: false,
        user: {},
      };
    case USER_LOADED:
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default user;
