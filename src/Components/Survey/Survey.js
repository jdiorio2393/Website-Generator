import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './Survey.css';

const Survey = () => {
  return (
    <div className="survey-container">
      <div className="survey-div">
        <h1>Lets Make A Beautiful Website</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Your Business Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Business Question 2</Form.Label>
            <Form.Control placeholder="Something Here" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Business Question 3</Form.Label>
            <Form.Control placeholder="Something Here" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Your Business Industry</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose an option...</option>
                <option>General Business</option>
                <option>Healthcare</option>
                <option>Restaurant</option>
                <option>E-Commerce</option>
                <option>Blog/Informational</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="I agree to the privacy policy" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Survey;
