import React from 'react';
import './BusinessServices.css';

const BusinessServices = () => {
  return (
    <div className="services-container">
      <h1>Your Services Here</h1>
      <p>Some information about the services you offer.</p>
      <div className="icon-grid">
        <div className="icon-div">
          <i className="fas fa-business-time fa-5x"></i>
          <h3>Service1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            animi vel.
          </p>
        </div>
        <div className="icon-div">
          <i className="fas fa-user-tie fa-5x"></i>
          <h3>Service2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            animi vel.
          </p>
        </div>
        <div className="icon-div">
          <i className="fas fa-sitemap fa-5x"></i>
          <h3>Service3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            animi vel.
          </p>
        </div>
        <div className="icon-div">
          <i className="fas fa-laptop-house fa-5x"></i>
          <h3>Service4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            animi vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;
