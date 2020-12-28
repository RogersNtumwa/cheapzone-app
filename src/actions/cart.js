import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
} from "./types";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getstate) => {
  const { data } = await axios.get(
    `https://cheapzone-api.herokuapp.com/api/v1/products/${id}`
  );

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

export const removeFromCart = (id) => (dispatch, getstate) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};

export const saveShippingAddres = (formdata) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: formdata,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(formdata));
};

export const savePaymentMethod = (method) => (dispatch) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: method,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(method));
};
