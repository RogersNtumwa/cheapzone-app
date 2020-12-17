import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import Masseage from "../components/Message";
import { addToCart } from "../actions/cart";

const CartScreen = ({ history, match, location }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
