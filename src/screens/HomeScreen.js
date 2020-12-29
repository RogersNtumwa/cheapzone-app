import React, { useEffect, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { responsive } from "../utils/Carousel";
import Product from "../components/Product";
import { listProducts } from "../actions/product";
import Carauselimage from "../components/Carauselimage";
// import Message from "../components/Message";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const { loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  // : error ? (
  //         <Message variant="danger">{error}</Message>
  //       )
  return (
    <Fragment>
      <div className="jumbotrone">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          centerMode={true}
          
        >
          {loading
            ? " "
            : products.data.products.map((product) => (
                <div>
                  <Carauselimage item={product} />
                </div>
              ))}
        </Carousel>
      </div>

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
