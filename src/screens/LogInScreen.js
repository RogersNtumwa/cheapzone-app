import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// import Messsage from "../components/Message";
import { userLogin } from "../actions/auth";
import FormContainer from "../components/FormContainer";

const LogInScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userauth = useSelector((state) => state.auth);

  const { isAuthenticated } = userauth;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };
  useEffect(() => {
    if (isAuthenticated) {
      return history.push(redirect);
    }
  }, [history, isAuthenticated, redirect]);

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {/* {errors && <Messsage variant="danger">{errors}</Messsage>} */}
      <Form onSubmit={onSubmitHandler}>
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
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : " /register"}>
            SignUp
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LogInScreen;
