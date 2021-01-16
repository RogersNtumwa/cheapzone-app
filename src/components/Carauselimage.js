import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Carauselimage = ({ item }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${item._id}`}>
        <Card.Img src={item.images[1].uri} variate="top" />
      </Link>
    </Card>
  );
};

export default Carauselimage;
