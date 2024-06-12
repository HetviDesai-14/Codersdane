import React from 'react';
import image from './images/image.png';
import './Client.css'; // Import the CSS file
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Client = () => {
    return (
        <div className='client'>
            <h1 className='headd'>A Few Of Our Clients</h1>
            <div className="image-contain">
                <img src={image} alt="Descriptive Alt Text" className="imagein" />
            </div>

            <div className="button4-container">
            
      <button><Link to="/test">Meet Our Customers</Link> <FontAwesomeIcon icon={faArrowRight} className="icon4" /></button>
     
    </div>

    <div className="button14-container">
        <p className='heelo'>Have Project in mind? Free to Contact.</p>
       
      <button><Link to="/contact">Contact sales</Link> </button>
     
    </div>
        </div>

        
    );
}

export default Client;
