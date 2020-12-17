import { CART_ADD_ITEM } from "./types";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getstate) => {
  const { data } = await axios.get(`/api/v1/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.title,
      image: data.image,
      price: data.price,
      quantity: data.quantity,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};
