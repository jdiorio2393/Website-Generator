import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  return (
    <div className="login-form">
      <h1>Login to your account</h1>
      <Form action="/login" method="POST">
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
