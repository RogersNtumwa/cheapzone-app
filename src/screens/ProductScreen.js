import React, { Fragment, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";

import Rating from "../components/Rating";
import { productDetails } from "../actions/product";
import Product from "../components/Product";

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const productDetailsList = useSelector((state) => state.product);
  const relatedProducts = useSelector((state) => state.relatedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails(match.params.id));
  }, [dispatch, match]);

  const { product, loading } = productDetailsList;
  const { products, loading: relatedLoading } = relatedProducts;
  console.log(products);
  console.log(relatedLoading);

  const addtoCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <Fragment>
      <Link className="btn btn-light my-3" to="/shop">
        Go Back
      </Link>
      {loading ? (
        " "
      ) : (
        <Fragment>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.title} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{product.title}</h2>
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
                      <Col>Price: </Col>
                      <Col>
                        <strong>${product.price}</strong>{" "}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.inStock && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.quantity).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
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
                      onClick={addtoCartHandler}
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
          <h2>Related Products</h2>

          {relatedLoading ? (
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
      )}
    </Fragment>
  );
};

export default ProductScreen;
