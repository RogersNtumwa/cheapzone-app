import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { logOut } from "../actions/auth";
import SearchBox from "./SearchBox";

const Header = () => {
  const userInfo = useSelector((state) => state.auth);
  const { user, isAuthenticated } = userInfo;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logOut());
  };
  console.log(userInfo.user);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Cheap-Zone</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart" /> CART
                </Nav.Link>
              </LinkContainer>
              {isAuthenticated ? (
                <NavDropdown title={user.name} id="username">
                  {/* <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer> */}

                  <NavDropdown.Item onClick={logoutHandler}>
                    LogOut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/signin">
                  <Nav.Link>
                    <i className="fas fa-user" /> SIGNIN
                  </Nav.Link>
                </LinkContainer>
              )}
              {user.isAdmin && (
                <NavDropdown title="Admin" id="Adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>User List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Product List</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
