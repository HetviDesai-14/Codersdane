import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className='heading2'>Why Work With Us</h1>
      <p className='para2'>
        We define business processes through ideation, creation, and<br />
        optimization with a team of exceptional strategies.
      </p>
      <div className="work-box1">
        <h2>Expert Team</h2>
        <p>
          Our team consists of highly skilled professionals with extensive experience
          in delivering high-quality projects across various domains.
        </p>
      </div>
      <div className="work-box2">
        <h2>Innovative Solutions</h2>
        <p>
          We pride ourselves on providing innovative solutions that help our clients
          stay ahead in their respective industries.
        </p>
      </div>
      <div className="work-box3">
        <h2>Customer Focus</h2>
        <p>
          We prioritize our clients' needs, ensuring personalized service and support
          to achieve their business goals.
        </p>
      </div>
    </div>
  );
};

export default Work;
