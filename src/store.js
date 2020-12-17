import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsList, productDetails } from "./reducers/products";
const inititalState = {};
const middleware = [thunk];

const reducer = combineReducers({
  products: productsList,
  product: productDetails,
});

const store = createStore(
  reducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
