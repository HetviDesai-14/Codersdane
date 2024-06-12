import React, { useState } from 'react';
import axios from 'axios';
import aa from './images/pexels-fotografiagmazg-7377687.jpg';
import './Regis.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


const Registration = () => {
  const [formDetails, setFormDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    resume: null,
    domain: '',
    time: '',
    date: '',
     LinkdienLink:'',
        GithubLink:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormDetails({ ...formDetails, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = new FormData();
    for (const key in formDetails) {
      registrationData.append(key, formDetails[key]);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', registrationData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response);
      alert('Registration successful!');
      setFormDetails({
        fullName: '',
        email: '',
        phoneNumber: '',
        resume: null,
        domain: '',
        time: '',
        date: '',
        LinkdienLink:'',
        GithubLink:''


      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error: Failed to register');
    }
  };

  return (
    <div>

<section className="he">
                <h1 className="mn">Register Here!!</h1>
                <p className="man">
                    Do you thrive on doing creative, innovative & challenging work and
                    <br />
                    collaborating with great teammates and clients <br></br>
                    Register yourself here and schedule your online interview with CODERSDANE!!
                    <br />
                </p>
            </section>

<FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                    <FontAwesomeIcon icon={faTwitter} className="twitter" />
                    <FontAwesomeIcon icon={faGithub} className="github" />
     <div className="verticalllline"></div>
    <div className="registration-container">
    <h1 className="background-heading">Schedule Your Interview With <br></br>CODERSDANE</h1>
    <p className="backgroundheading">We are excited to invite you to schedule a meeting or interview with us. <br></br>At your convenience, please select a suitable date and time for your session using our <br></br>easy-to-use scheduling tool. Our team is looking forward to connecting with you to <br></br>discuss potential opportunities and explore how your skills and experiences<br></br> align with our goals. Once scheduled, you will receive a confirmation email with <br></br>all the necessary details, including a link to join the meeting.
</p>

                 
                
  
      <div className="image-section">
     
        <img src={aa} alt="Document" className="overlay-image" />
      </div>
      
      <div className="form-section">
      
     
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="formgroup">
            <input
              type="text"
              name="fullName"
              value={formDetails.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="formgroup">
            <input
              type="email"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="formgroup">
            <input
              type="tel"
              name="phoneNumber"
              value={formDetails.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="formgroup">
            <input
              type="text"
              name="LinkdienLink"
              value={formDetails.LinkdienLink}
              onChange={handleChange}
                placeholder="LinkedIn Profile"
              required
            />
          </div>
          <div className="formgroup">
            <input
              type="text"
              name="GithubLink"
              value={formDetails.GithubLink}
              onChange={handleChange}
                placeholder="GITHUB Profile"
              required
            />
          </div>
          <div className="formgroup">
            <label>*Add your Resume/CV</label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="formgroup">
            <input
              type="text"
              name="domain"
              value={formDetails.domain}
              onChange={handleChange}
              placeholder="Domain"
              required
            />
          </div>
          <div className="formgroup">
            <input
              type="time"
              name="time"
              value={formDetails.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formgroup">
            <input
              type="date"
              name="date"
              value={formDetails.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="su">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Registration;
