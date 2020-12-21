import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";

import FormContainer from "../components/FormContainer";
import CheckOutstep from "../components/CheckOutstep";
import { saveShippingAddres } from "../actions/cart";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddres({
        address,
        city,
        postalCode,
        country,
      })
    );
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckOutstep step1 step2 />
      <h1>Shipping</h1>{" "}
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="address">
          <Form.Label> Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name here"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label> City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name here"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label> PostalCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name here"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label> country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name here"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue{" "}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
