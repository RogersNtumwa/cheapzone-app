import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import { listProducts, deleteproduct } from "../actions/product";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const ProductlistScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const productlist = useSelector((state) => state.products);
  const deleteProduct = useSelector((state) => state.deleteproduct);
  const userinfo = useSelector((state) => state.auth);

  const { loading, products } = productlist;
  const { success: successDelete } = deleteProduct;

  const { user } = userinfo;
  useEffect(() => {
    if (userinfo && user.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/signin");
    }
  }, [dispatch, history, user.isAdmin, userinfo, successDelete]);

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteproduct(id));
    }
  };

  // const createProductHandler = () => {
  //   //   we call create product action here
  // };

  return (
    <Fragment>
      <Row className="align-items-center">
        <Col>
          <h1>Products List</h1>
        </Col>
        <Col className="text-right">
          <Link to="/admin/product/add">
            <Button className="my-3">
              <i className="fas fa-plus"></i> Add Product
            </Button>
          </Link>
        </Col>
      </Row>

      {loading ? (
        "loading..."
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>INSTOCK</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.data.products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  {product.inStock ? (
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
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteProductHandler(product._id)}
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

export default ProductlistScreen;
