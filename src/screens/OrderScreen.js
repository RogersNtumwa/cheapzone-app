import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getOrder } from "../actions/order";
import Message from "../components/Message";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const orderData = useSelector((state) => state.orderDetails);
  const { order, loading } = orderData;

  //   Calculate Prices
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.ItemsPrice = addDecimals(
      order.orderItem.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <h2>Loading ...</h2>
  ) : (
    <Fragment>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address</strong>
                {order.shippingAddress.address},{order.shippingAddress.city},
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
            </ListGroup.Item>
            {order.isDelivered ? (
              <Message variant="success">
                Delivered at {order.deliverdAt}
              </Message>
            ) : (
              <Message variant="danger">Not Delivered</Message>
            )}
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItem.length === 0 ? (
                <p>Your Cart is Emputy</p>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItem.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.images[0].uri}
                            alt={item.name}
                            fluid
                            rounded
                          />{" "}
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} X {item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.ItemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default OrderScreen;
