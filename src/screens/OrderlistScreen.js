import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";

import { getOrders, deleteOrder } from "../actions/order";
import AdminSearch from "../components/AdminSearch";

const OrderlistScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const orderlist = useSelector((state) => state.orderlist);
  const deleteOrders = useSelector((state) => state.deleteOrder);

  const userinfo = useSelector((state) => state.auth);

  const { loading, orders } = orderlist;
  const { success } = deleteOrders;

  const { user } = userinfo;

  useEffect(() => {
    if (userinfo && user.isAdmin) {
      dispatch(getOrders());
    } else {
      history.push("/signin");
    }
  }, [dispatch, history, user.isAdmin, userinfo, success]);

  const deleteOrderHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteOrder(id));
    }
  };

  const searched = (keyword) => (c) =>
    c.user.name.toLowerCase().includes(keyword);

  return (
    <Fragment>
      <Row className="align-items-center">
        <Col>
          <h1>Order List</h1>
        </Col>
      </Row>

      <Row>
        <AdminSearch keyword={keyword} setKeyword={setKeyword} />
      </Row>
      {loading ? (
        "loading..."
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>CUSTOMER NAME</th>
              <th>ITEMS ORDERED</th>
              <th>TOTALPRICE</th>
              <th>ISPAID</th>
              <th>PAYMENT METHOD</th>
              <th>ISDELIVERED</th>
              <th>ORDER DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.filter(searched(keyword)).map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.orderItem.length}</td>
                <td>$ {order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <i
                      className="fas fa-check"
                      style={{
                        color: "green",
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-times"
                      style={{
                        color: "red",
                      }}
                    ></i>
                  )}
                </td>
                <td>{order.paymentMethod}</td>
                <td>
                  {order.isDelivered ? (
                    <i
                      className="fas fa-check"
                      style={{
                        color: "green",
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-times"
                      style={{
                        color: "red",
                      }}
                    ></i>
                  )}
                </td>
                <td>{order.createdAt}</td>
                <td>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteOrderHandler(order._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default OrderlistScreen;
