import React, { Fragment } from 'react';
import './Hero.css';
import { Form, FormControl, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Fragment>
      {/* <Background /> */}
      <div className='home-container'>
        <div className='home-title'>
          <h1>
            Let's Create an <br></br>Online Presence
          </h1>
          <h3>
            Get a dynamically generated website that's <br></br> based on your
            industry in seconds!
          </h3>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </div>
        <div className='home-img'>
          <img
            className='hero-img'
            src='https://media.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif'
            alt=''
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
