import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsList, productDetails } from "./reducers/products";
import { cartReducer } from "./reducers/cart";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const inititalState = {
  cart: { cartItems: cartItemsFromStorage },
};
const middleware = [thunk];

const reducer = combineReducers({
  products: productsList,
  product: productDetails,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
