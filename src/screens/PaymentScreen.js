import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import { savePaymentMethod } from "../actions/cart";
import FormContainer from "../components/FormContainer";
import CheckOutstep from "../components/CheckOutstep";

const PaymentScreen = ({ history }) => {
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeOrder");
  };
  return (
    <FormContainer>
      <CheckOutstep step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Cash On Delivery"
              id="cash"
              name="paymentMethod"
              value="cashDelivery"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Paypal"
              id="paypal"
              name="paymentMethod"
              value="payPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue{" "}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
