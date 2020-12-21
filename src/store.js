import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsList, productDetails } from "./reducers/products";
import { cartReducer } from "./reducers/cart";
import user from "./reducers/auth";
import { PlaceOrderReducer } from "./reducers/order";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const inititalState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
};
const middleware = [thunk];

const reducer = combineReducers({
  products: productsList,
  product: productDetails,
  cart: cartReducer,
  auth: user,
  order: PlaceOrderReducer,
});

const store = createStore(
  reducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
