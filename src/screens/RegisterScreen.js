import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";

import FormContainer from "../components/FormContainer";
import { registerUser } from "../actions/auth";
import { setAlert } from "../actions/alert";

const RegisterScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(setAlert("Passwords don't match", "danger"));
      return history.push("/register")
    }
    dispatch(registerUser({ name, email, password }));
  };

  const userauth = useSelector((state) => state.auth);

  const { isAuthenticated } = userauth;
  useEffect(() => {
    if (isAuthenticated) {
      return history.push(redirect);
    }
  }, [history, isAuthenticated, redirect]);
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="email">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email her"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Confirm Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password here"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an Account ?{" "}
          <Link to={redirect ? `/signin?redirect=${redirect}` : " /signin"}>
            SignIn
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
