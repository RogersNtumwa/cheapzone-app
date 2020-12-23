import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from "../actions/types";

export const Users = (state = { users: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LIST_REQUEST:
      return { loading: true };

    case USER_LIST_SUCCESS:
      return {
        loadi: false,
        users: payload,
      };

    case USER_LIST_FAIL:
      return {
        loadi: false,
        error: payload,
      };

    default:
      return state;
  }
};
