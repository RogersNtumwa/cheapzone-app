import React, { Fragment, useState } from "react";
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { newReview } from "../actions/product";

const Model = ({ id, history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newReview({ rating, comment, id }));
    history.push(`/product/${id}`);
  };

  return (
    <Fragment>
      {isAuthenticated ? (
        <Button variant="primary" onClick={handleShow}>
          Leave a review
        </Button>
      ) : (
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">Log in to leave a Review</Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button disabled style={{ pointerEvents: "none" }}>
              Leave a review
            </Button>
          </span>
        </OverlayTrigger>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review this Product</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitHandler}>
          <Modal.Body>
            <Form.Group controlId="rating">
              <Form.Label>Rate this product</Form.Label>
              <Form.Control
                type="number"
                placeholder="rating"
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
            </Form.Group>
            <Form.Group controlId="reviewcomment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default Model;
