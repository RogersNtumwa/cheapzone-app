import { CATEGORY_LIST_FAIL, CATEGORY_LIST_SUCCESS } from "../actions/types";

const initialState = {
  categories: [],
  errror: {},
  loading: true,
};

export const categoryListReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case CATEGORY_LIST_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
