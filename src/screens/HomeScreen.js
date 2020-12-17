import React, { useEffect, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product";
import { listProducts } from "../actions/product";
// import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const { loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  // : error ? (
  //         <Message variant="danger">{error}</Message>
  //       )
  return (
    <Fragment>
      <h1>Latest Products</h1>
      {loading ? (
        " "
      ) : (
        //we shall implemented error messsage here
        <Row>
          {products.data.products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
};

export default HomeScreen;
