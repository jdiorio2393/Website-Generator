import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import { GlobalContext } from '../Context/GlobalState';
import './Survey.css';

const Survey = () => {
  const context = useContext(GlobalContext);

  const [state, setState] = useState({
    email: '',
    q2: '',
    q3: '',
    industry: '',
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <div className="survey-container">
      <div className="survey-div">
        <h1>Lets Make A Beautiful Website</h1>
        <Form action="">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Your Business Name</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={state.email}
                placeholder="Enter email"
                onChange={inputHandler}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Business Question 2</Form.Label>
            <Form.Control
              onChange={inputHandler}
              value={state.q2}
              placeholder="Something Here"
              name="q2"
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Business Question 3</Form.Label>
            <Form.Control
              onChange={inputHandler}
              value={state.q3}
              placeholder="Something Here"
              name="q3"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Your Business Industry</Form.Label>
              <Form.Control
                value={state.industry}
                as="select"
                defaultValue="Choose..."
                onChange={inputHandler}
                name="industry"
              >
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

          <Link
            to={{
              pathname: context.session[0]
                ? `/website/${context.session[0].id}`
                : null,
              state: {
                email: state.email,
                q2: state.q2,
                q3: state.q3,
                industry: state.industry,
              },
            }}
            variant="primary"
            className="surveybtn"
          >
            Submit
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Survey;
