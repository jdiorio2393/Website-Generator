import React from 'react';
import './BusinessAbout.css';

const BusinessAbout = () => {
  return (
    <div className="business-about-container">
      <img
        src="/Industries/Business/business1.jpg"
        alt=""
        className="responsive-img about1"
      />
      <div className="about2">
        <h1>Top Quality Service</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime vero
          architecto excepturi asperiores tempore mollitia incidunt ducimus,
          quod consequuntur consectetur quidem ipsam recusandae libero at
          perferendis quos nulla voluptatibus quia. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Maxime vero architecto excepturi
          asperiores tempore mollitia incidunt ducimus, quod consequuntur
          consectetur quidem ipsam recusandae libero at perferendis quos nulla
          voluptatibus quia.
        </p>
        <button className="btn btn-primary">Go Somewhere</button>
      </div>
      <div className="about3">
        <div className="left-text">
          <h1>Your Business Info</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            vero architecto excepturi asperiores tempore mollitia incidunt
            ducimus, quod consequuntur consectetur quidem ipsam recusandae
            libero at perferendis quos nulla voluptatibus quia. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Maxime vero architecto
            excepturi asperiores tempore mollitia incidunt ducimus, quod
            consequuntur consectetur quidem ipsam recusandae libero at
            perferendis quos nulla voluptatibus quia.
          </p>
          <button className="btn btn-primary">Go Somewhere</button>
        </div>
      </div>
      <img
        src="/Industries/Business/business2.jpg"
        alt=""
        className="responsive-img about4"
      />
    </div>
  );
};

export default BusinessAbout;
