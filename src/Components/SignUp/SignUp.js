import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-form">
      <h1>Sign up and let's get started!</h1>
      <Form action="/signup" method="POST">
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Name" />
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

export default SignUp;
