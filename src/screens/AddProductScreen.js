import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import FormContainer from "../components/FormContainer";
import { listCategories } from "../actions/category";
import { createProduct } from "../actions/product";

const AddProductScreen = ({ history }) => {
  const [formData, setformData] = useState({});

  const [images, setImages] = useState([]);
  const [previeImages, setpreviewImages] = useState([]);

  const { title, description, category, price, brand, quantity } = formData;

  const categoryList = useSelector((state) => state.categoryState);
  const { loading, categories } = categoryList;

  const productreducer = useSelector((state) => state.createProduct);
  const { success } = productreducer;

  const dispatch = useDispatch();

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    formData.images = images;
    dispatch(createProduct(formData));
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onchangeimage = (e) => {
    const files = Array.from(e.target.files);
    setpreviewImages([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setpreviewImages((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (success) {
      return history.push("/shop");
    }
  }, [success, history]);

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
                name="title"
                value={title}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Product price"
                name="price"
                value={price}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product brand"
                name="brand"
                value={brand}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product quantity"
                name="quantity"
                value={quantity}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product description"
                name="description"
                value={description}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Select category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={category}
                onChange={handleChange}
              >
                <Fragment>
                  <option>Select category</option>
                  {categories.data.categories.map((categoryitem) => (
                    <option key={categoryitem._id} value={categoryitem._id}>
                      {categoryitem.name}
                    </option>
                  ))}
                </Fragment>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.File
                id="productImage"
                label="Image"
                name="images"
                onChange={onchangeimage}
                multiple
              />
              {previeImages.map((image) => (
                <img
                  src={image}
                  key={image}
                  alt="previewimage"
                  className="mt-3 mr-2"
                  height="52"
                  width="55"
                />
              ))}
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
