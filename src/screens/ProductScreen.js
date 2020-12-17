import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Rating from "../components/Rating";
import { productDetails } from "../actions/product";

const ProductScreen = ({ match }) => {
  const productDetailsList = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails(match.params.id));
  }, [dispatch, match]);

  const { product, loading } = productDetailsList;

  return (
    <Fragment>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        " "
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.title} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>PRice: </Col>
                    <Col>
                      <strong>${product.price}</strong>{" "}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.quantity > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.quantity === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default ProductScreen;
