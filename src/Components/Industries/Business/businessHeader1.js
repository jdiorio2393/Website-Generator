import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './BusinessHeader.css';

const businessHeader1 = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="text-white">Your Business Name</h1>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit adipisicing
          elit.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default businessHeader1;
