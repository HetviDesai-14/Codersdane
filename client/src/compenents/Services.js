// Services.js
import React from 'react';
import './Services.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

// Import a CSS file for styling



const Services = () => {
  return (

   
  
    <div className="services-container">
        <h1 className='heading1'>What We Deliver</h1>
        
        <p className='para1'>We define busniess processes through ideation, creation,and<br></br> optimization with a team of exception strategies</p>
      <div className="service-box1">
      <FontAwesomeIcon icon={faCode}className='icon3' />
        <h2>Service 1</h2>
        <p>
        
          We offer top-notch web development services using the latest technologies
          to create responsive and dynamic websites tailored to your needs.
        </p>
      </div>
      <div className="service-box2">
      <FontAwesomeIcon icon={faCode}className='icon3' />
        <h2>Service 2</h2>
        <p>
       
          Our mobile app development team specializes in creating user-friendly
          and feature-rich applications for both iOS and Android platforms.
        </p>
      </div>
      <div className="service-box3">
      <FontAwesomeIcon icon={faCode} className='icon3'  />
        <h2>Service 3</h2>
        <p>
      
          We provide digital marketing services to help you reach your target audience
          effectively through SEO, social media, and paid advertising strategies.
        </p>
      </div>

     
      <div>
        <button className="serbutton">
          <Link to='/ser'>View Services</Link>
          <FontAwesomeIcon icon={faArrowRight} className="icon2" />
        </button>
      </div>

    
   
       
      </div>  
 
 
  );
};

export default Services;
