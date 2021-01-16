import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product._id}`} className="product__card-img">
        <Card.Img src={product.images[0].uri} variate="top" />
      </Link>
      <h4 className="product__card-title">{product.title}</h4>
      <p className="product-year">
        <Rating value={product.rating} text={`${product.numReviews}reviews`} />
      </p>
      <p className="prducts product-year">${product.price}</p>
    </div>
  );
};

export default Product;
