import React from "react";
import { Button, Form } from "react-bootstrap";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
  const {signInWithGoogle} = useFirebase();

  return (
    <div>
      <p className="mt-3"></p>
      <div className="w-50 mx-auto bg-color">
        <Form>
          <h2 className="text-center">Please Login!</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-info">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <span className="px-3">Or</span>
            <Button onClick={signInWithGoogle} variant="primary" type="submit">
              Google Sign In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
