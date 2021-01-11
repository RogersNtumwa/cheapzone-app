import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import FormContainer from "../components/FormContainer";
import { listCategories } from "../actions/category";
import { createProduct } from "../actions/product";

const AddProductScreen = ({ history }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const categoryList = useSelector((state) => state.categoryState);
  const { loading, categories } = categoryList;

  const productreducer = useSelector((state) => state.createProduct);
  const { success } = productreducer;

  const dispatch = useDispatch();

  // const handleSelect = (e) => {};

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        title,
        price,
        brand,
        quantity,
        description,
        category,
        rating,
        image,
      })
    );

    success && history.push("/shop");
  };

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  return (
    <Fragment>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Add Product</h1>

        {loading ? (
          "loading categories"
        ) : (
          <Form onSubmit={onSubmitHandlerHandler} encType="multipart/form-data">
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
              <Form.Label>Select category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.data.categories.map((categoryitem) => (
                  <option key={categoryitem._id} value={categoryitem._id}>
                    {categoryitem.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.File
                id="productImage"
                label="Image"
                onChange={(event) => setImage(event.target.files[0])}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Add Product
            </Button>
          </Form>
        )}
      </FormContainer>
    </Fragment>
  );
};

export default AddProductScreen;
