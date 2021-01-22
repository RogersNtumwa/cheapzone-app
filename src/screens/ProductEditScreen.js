import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { productDetails, updateProduct } from "../actions/product";
// import { listCategories } from "../actions/category";
import { PRODUCT_UPDATE_RESET } from "../actions/types";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();
  const productdata = useSelector((state) => state.product);
  const { loading, product } = productdata;

  const productupdate = useSelector((state) => state.editProduct);
  const { loading: loadingUpdate, success } = productupdate;

  // const categoryList = useSelector((state) => state.categorStatey);
  // const { categoryloading: loading, categories } = categoryList;

  useEffect(() => {
    if (success) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.title || product._id !== productId) {
        dispatch(productDetails(productId));
      } else {
        setTitle(product.title);
        setPrice(product.price);
        setBrand(product.brand);
        setQuantity(product.quantity);
        setDescription(product.description);
        setRating(product.rating);
        setCategory(product.category);
      }
    }
  }, [dispatch, history, product, productId, success]);

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch( updateProduct({
      _id: productId,
      title,
      price,
      brand,
      quantity,
      rating,
      description,
      category,
    }));
  };

  return (
    <Fragment>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && "Update pending"}
        {loading ? (
          "loading"
        ) : (
          <Form onSubmit={onSubmitHandlerHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </Fragment>
  );
};

export default ProductEditScreen;
