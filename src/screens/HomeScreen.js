import React, { useEffect, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// import products from "../products";
import Product from "../components/Product";
import { listProducts } from "../actions/product";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const { loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      {loading ? (
        " "
      ) : (
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
