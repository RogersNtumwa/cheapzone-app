import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsList, productDetails } from "./reducers/products";
import { cartReducer } from "./reducers/cart";
import user from "./reducers/auth";
import { PlaceOrderReducer, OrderDetailsReducer } from "./reducers/order";
import { Users } from "./reducers/users";

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
  orderDetails: OrderDetailsReducer,
  userList: Users,
});

const store = createStore(
  reducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
