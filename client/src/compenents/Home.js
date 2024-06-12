import React, { useEffect } from 'react';
import './Home.css';
import image from './images/Home.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Products from './Products';
import Services from './Services';
import Work from './Work';
import Client from './Client';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const text = "LAUNCH ICONIC <BR> PROJECTS";
    let index = 0;
    let isDeleting = false;

    const intervalId = setInterval(() => {
      document.querySelector('.heading').innerHTML = text.slice(0, index) + '<span class="caret"></span>';
      
      if (!isDeleting) {
        index++;
        if (index === text.length + 1) {
          isDeleting = true;
          setTimeout(() => {}, 1000); // Pause before starting to delete
        }
      } else {
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, 150);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="home-container">
      <div className="text-container">
        <h1 className="heading"><span class="caret"></span></h1>
        <p className="para">
        At Codersdane, we are dedicated to delivering innovative solutions that <br></br>drive success for your business. Our expert team is committed to<br></br> providing top-notch services tailored to meet the unique needs of each client.<br></br> Whether you're looking for cutting-edge technology solutions, strategic consulting,<br></br> or exceptional customer support,we are here to help you achieve your goals.<br></br>
        </p>
        <button className="acbutton">
          <Link to="/contact" className="tt">Let's Work Together</Link>
          <FontAwesomeIcon icon={faTelegram} className="icon" />
        </button>
      </div>
      <div className="image-container">
        <img src={image} alt="Descriptive Alt Text" className="image" />
      </div>
      <div>
        <p className="set">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </p>
      </div>
      <Products />
      <Services />
      <Work />
      <Client />
      <Footer />
    </div>
  );
}

export default Home;
