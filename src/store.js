import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsList,
  productDetails,
  deleteProductReducer,
  createProductReducer,
  editProductReducer,
  relatedProductsReducer,
} from "./reducers/products";
import { cartReducer } from "./reducers/cart";
import user from "./reducers/auth";
import {
  PlaceOrderReducer,
  OrderDetailsReducer,
  OrderReducer,
  deleteOrderReducer,
} from "./reducers/order";
import { Users } from "./reducers/users";
import { categoryListReducer } from "./reducers/category";
import alertReducer from "./reducers/alert";

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
  deleteproduct: deleteProductReducer,
  createProduct: createProductReducer,
  categoryState: categoryListReducer,
  editProduct: editProductReducer,
  relatedProducts: relatedProductsReducer,
  orderlist: OrderReducer,
  deleteOrder: deleteOrderReducer,
  alert: alertReducer,
});

const store = createStore(
  reducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
