import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Container fluid className="container">
        <Navbar.Brand href="/" className="fs-4">
          <img
            alt=""
            src={user?.photoURL && user.photoURL}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle"
          />{" "}
          {
          user?.displayName?.length > 20 ? user?.displayName?.slice(0, 15)+'..':
          (user?.displayName && user.displayName)

          }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="navbar-nav">
              <Link className="nav-link active ms-2" aria-current="page" to="/">
                HOME
              </Link>
              <Link className="nav-link" to="/order">
                ORDER
              </Link>
              <Link className="nav-link" to="/dashboard">
                DASHBOARD
              </Link>
              <Link className="nav-link" to="/blogs">
                BLOGS
              </Link>
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </div>
          </Nav>
          <div className="navbar-nav">
            <Link className="nav-link" to="/register">
              <Button variant="outline-info">Register</Button>
            </Link>
            <Link className="nav-link" to="/login">
              {user?.uid ? (
                <Button onClick={handleSignOut} variant="outline-info">
                  LOGIN OUT
                </Button>
              ) : (
                <Button variant="outline-info">LOGIN</Button>
              )}
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
