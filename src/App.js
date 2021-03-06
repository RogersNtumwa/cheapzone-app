import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LogInScreen from "./screens/LogInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserScreen from "./screens/UserScreen";
import ProductlistScreen from "./screens/ProductlistScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import LandingpageScreen from "./screens/LandingpageScreen";
import OrderlistScreen from "./screens/OrderlistScreen";
import AddProductScreen from "./screens/AddProductScreen";
import Alert from "./components/Alert";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Alert />
        <Container>
          <Route path="/" component={LandingpageScreen} exact />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/shop" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />
          <Route path="/signin" component={LogInScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/shipping" component={ShippingScreen} exact />
          <Route path="/payment" component={PaymentScreen} exact />
          <Route path="/placeOrder" component={PlaceOrderScreen} exact />
          <Route path="/order/:id" component={OrderScreen} exact />
          <Route path="/admin/userlist" component={UserScreen} exact />
          <Route path="/admin/orderlist" component={OrderlistScreen} exact />

          <Route
            path="/admin/productlist"
            component={ProductlistScreen}
            exact
          />
          <Route
            path="/admin/product/:id/edit"
            component={ProductEditScreen}
            exact
          />
          <Route path="/admin/product/add" component={AddProductScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
