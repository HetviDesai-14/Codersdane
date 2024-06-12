import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import imagee from './images/code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={imagee} alt="Coderdane Logo" className="loo" />
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Service</Link></li>
                            
                            <li><Link to="/hire-us">Hire Us</Link></li>
                            <li><Link to="/portfolio">Join Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy">InSights</Link></li>
                            <li><Link to="/salesforce">Testimonials</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Salesforce</h3>
                        <ul>
                            <li><Link to="/salesforce/consulting">Consulting Services</Link></li>
                            <li><Link to="/salesforce/implementation">Implementation</Link></li>
                            <li><Link to="/salesforce/customization">Customization</Link></li>
                            <li><Link to="/salesforce/integration">Integration</Link></li>
                            <li><Link to="/salesforce/training">Training</Link></li>
                            <li><Link to="/salesforce/support">Support</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>AWS</h3>
                        <ul>
                            <li><Link to="/aws/cloud-computing">Cloud Computing</Link></li>
                            <li><Link to="/aws/devops">DevOps</Link></li>
                            <li><Link to="/aws/machine-learning">Machine Learning</Link></li>
                            <li><Link to="/aws/security">Security</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Mobile App</h3>
                        <ul>
                            <li><Link to="/mobile-app/ios-development">iOS Development</Link></li>
                            <li><Link to="/mobile-app/android-development">Android Development</Link></li>
                            <li><Link to="/mobile-app/ui-ux-design">UI/UX Design</Link></li>
                            <li><Link to="/mobile-app/quality-assurance">Quality Assurance</Link></li>
                            <li><Link to="/mobile-app/maintenance">Maintenance</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Web App</h3>
                        <ul>
                            <li><Link to="/web-app/frontend-development">Frontend Development</Link></li>
                            <li><Link to="/web-app/backend-development">Backend Development</Link></li>
                            <li><Link to="/web-app/fullstack-development">Fullstack Development</Link></li>
                            <li><Link to="/web-app/ecommerce-solutions">E-commerce Solutions</Link></li>
                            <li><Link to="/web-app/cms-development">CMS Development</Link></li>
                            <li><Link to="/web-app/maintenance-support">Maintenance & Support</Link></li>
                        </ul>
                    </div>
                    <p className='sett'>
                        <p>Connect With Us</p>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTelegram} />
        </p>
                </div>
                <div className="Q"><p>@ ALL RIGHTS ARE RESERVED BY CODERDANE</p></div>
            </div>
        </footer>
    );
};

export default Footer;
