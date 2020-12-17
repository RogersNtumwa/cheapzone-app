import { CART_ADD_ITEM } from "../actions/types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    default:
      return state;
  }
};
