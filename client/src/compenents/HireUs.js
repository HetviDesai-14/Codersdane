import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HireUs.css';
import mmg from './images/laptop-eyeglasses-mouse-diary-pen-pot-plant-black-background.jpg';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HireUs = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (service) => {
    setFormData({ ...formData, service });
  };

  const handleBudgetChange = (budget) => {
    setFormData({ ...formData, budget });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/HireUs', formData);
      console.log(response);
      toast.success('Message sent successfully!', { position: 'top-right' });
      setFormData(initialFormData); // Reset form after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error: Failed to send message', { position: 'top-right' });
    }
  };

  return (
    <div className="hire-us-container">
      <ToastContainer />
      <div className="isection">
        <img src={mmg} alt="Laptop against brown paper texture" className="header-image" />
        <p className="header-text">Hire Us</p>
      </div>

      <div className="content-section1">
        <p className="section-title"></p>
        <h1 className="main-title">A PROJECT WITH <br />CODERSDANE?</h1>

        <form className="contactform" onSubmit={handleSubmit}>
          <div className="services-section">
            <p className="subsection-title">Services</p>
            <div className="buttongroup">
              <button
                type="button"
                className={`option-button ${formData.service === 'Web Development' ? 'selected' : ''}`}
                onClick={() => handleServiceChange('Web Development')}
              >
                Web Development
              </button>
              <button
                type="button"
                className={`option-button ${formData.service === 'Mobile Development' ? 'selected' : ''}`}
                onClick={() => handleServiceChange('Mobile Development')}
              >
                Mobile Development
              </button>
              <button
                type="button"
                className={`option-button ${formData.service === 'UI/UX Design' ? 'selected' : ''}`}
                onClick={() => handleServiceChange('UI/UX Design')}
              >
                UI/UX Design
              </button>
            </div>
          </div>

          <div className="budget-section">
            <p className="subsection-title">Your Budget</p>
            <div className="buttongroup">
              <button
                type="button"
                className={`option-button ${formData.budget === '500-1000' ? 'selected' : ''}`}
                onClick={() => handleBudgetChange('500-1000')}
              >
                $500 - $1000
              </button>
              <button
                type="button"
                className={`option-button ${formData.budget === '1000-2000' ? 'selected' : ''}`}
                onClick={() => handleBudgetChange('1000-2000')}
              >
                $1000 - $2000
              </button>
              <button
                type="button"
                className={`option-button ${formData.budget === '2000+' ? 'selected' : ''}`}
                onClick={() => handleBudgetChange('2000+')}
              >
                $2000+
              </button>
            </div>
          </div>

          <div className="inputgroup">
          <p className="subsectiontitle">FullName</p>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange} 
              required
            />
            
          </div>

          <div className="inputgroup">
          <p className="subsectiontitle">Email</p>
            <input 
              type="email" 
              id="email" 
              name="email"   
              value={formData.email}
              onChange={handleChange} 
              required
            />
            
          </div>

          <div className="inputgroup">
          <p className="subsectiontitle">Contact</p>
            <input 
              type="tel" 
              id="phone" 
              name="phone"   
              value={formData.phone}
              onChange={handleChange} 
              required
            />
          
          </div>

          <button type="submit" className="submitbutton">Submit</button>
        </form>

        <div className="verticalline"></div>
        
      </div>

      <div className="contactsection">
        <p>CONTACTS</p>
        <p>HEY@CODERSDANE.COM</p>

        <p className='hi'>Follow</p>
        <FontAwesomeIcon icon={faLinkedin} className="linkedinicon" />
        <FontAwesomeIcon icon={faTwitter} className="twittericon" />
        <FontAwesomeIcon icon={faGithub} className="githubicon" />
      </div>

      <div className="info-section">
        <p>
        At [Your Company Name], we specialize in <br></br>crafting bespoke web solutions that elevate your business.<br></br> 
    With our expert team, cutting-edge technology,<br></br> and user-centric design approach, we deliver websites<br></br> that are not only visually stunning but also optimized <br></br>for performance and search engines.<br></br> 
    Whether you need a robust e-commerce platform, <br></br>a dynamic content management system, <br></br>or ongoing website maintenance, <br></br>we are dedicated to providing exceptional <br></br>service and support.<br></br> 
    Partner with us to create a powerful online <br></br>presence that drives your business forward.
        </p>

        <p>@CODERSDANCE 2024</p>
      </div>

    </div>
  );
};

export default HireUs;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './HireUs.css';
// import mmg from './images/laptop-eyeglasses-mouse-diary-pen-pot-plant-black-background.jpg';
// import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const HireUs = () => {
//   const initialFormData = {
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     budget: ''
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleServiceSelect = (service) => {
//     setFormData({ ...formData, service });
//   };

//   const handleBudgetSelect = (budget) => {
//     setFormData({ ...formData, budget });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/api/HireUs', formData);
//       console.log(response);
//       toast.success('Message sent successfully!', { position: 'top-right' });
//       setFormData(initialFormData); // Reset form after submission
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('Error: Failed to send message', { position: 'top-right' });
//     }
//   };

//   return (
//     <div className="hire-us-container">
//       <ToastContainer />
//       <div className="isection">
//         <img src={mmg} alt="Laptop against brown paper texture" className="header-image" />
//         <p className="header-text">Hire Us</p>
//       </div>

//       <div className="content-section1">
//         <h1 className="main-title">A PROJECT WITH <br />CODERSDANE?</h1>

//         <form className="contactform" onSubmit={handleSubmit}>
//           <div className="services-section">
//             <p className="subsection-title">Services</p>
//             <div className="inputgroup">
//               <button type="button" className={`service-button ${formData.service === 'Web Development' ? 'selected' : ''}`} onClick={() => handleServiceSelect('Web Development')}>
//                 Web Development
//               </button>
//               <button type="button" className={`service-button ${formData.service === 'Mobile App Development' ? 'selected' : ''}`} onClick={() => handleServiceSelect('Mobile App Development')}>
//                 Mobile App Development
//               </button>
//               <button type="button" className={`service-button ${formData.service === 'UI/UX Design' ? 'selected' : ''}`} onClick={() => handleServiceSelect('UI/UX Design')}>
//                 UI/UX Design
//               </button>
//               <button type="button" className={`service-button ${formData.service === 'SEO Services' ? 'selected' : ''}`} onClick={() => handleServiceSelect('SEO Services')}>
//                 SEO Services
//               </button>
//             </div>
//           </div>

//           <div className="budget-section">
//             <p className="subsection-title">Your Budget</p>
//             <div className="inputgroup">
//               <button type="button" className={`budget-button ${formData.budget === '<$1000' ? 'selected' : ''}`} onClick={() => handleBudgetSelect('<$1000')}>
//                 Less than $1000
//               </button>
//               <button type="button" className={`budget-button ${formData.budget === '$1000-$5000' ? 'selected' : ''}`} onClick={() => handleBudgetSelect('$1000-$5000')}>
//                 $1000 - $5000
//               </button>
//               <button type="button" className={`budget-button ${formData.budget === '$5000-$10000' ? 'selected' : ''}`} onClick={() => handleBudgetSelect('$5000-$10000')}>
//                 $5000 - $10000
//               </button>
//               <button type="button" className={`budget-button ${formData.budget === '>$10000' ? 'selected' : ''}`} onClick={() => handleBudgetSelect('>$10000')}>
//                 More than $10000
//               </button>
//             </div>
//           </div>
          
//           <div className="inputgroup">
//             <input 
//               type="text" 
//               id="name" 
//               name="name" 
//               value={formData.name}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="name">Your Name</label>
//           </div>

//           <div className="inputgroup">
//             <input 
//               type="email" 
//               id="email" 
//               name="email"   
//               value={formData.email}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="email">Your Email</label>
//           </div>

//           <div className="inputgroup">
//             <input 
//               type="tel" 
//               id="phone" 
//               name="phone"   
//               value={formData.phone}
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="phone">Your Phone</label>
//           </div>

//           <button type="submit" className="submitbutton">Submit</button>

//           {/* Vertical line */}
//           <div className="verticalline"></div>
//         </form>
//       </div>

//       <div className="contactsection">
//         <p>CONTACTS</p>
//         <p>HEY@CODERSDANE.COM</p>

//         <p className='hi'>Follow</p>
//         <FontAwesomeIcon icon={faLinkedin} className="linkedinicon" />
//         <FontAwesomeIcon icon={faTwitter} className="twittericon" />
//         <FontAwesomeIcon icon={faGithub} className="githubicon" />
//       </div>

//       <div className="info-section">
//         <p>
//           Paragraphs are the building blocks of papers.<br />
//           Many students define paragraphs in terms of length: <br />a paragraph is a group of at least five sentences,<br />
//           a paragraph is half a page long, etc. In reality, though,<br /> the unity and coherence of ideas<br />
//           among sentences is what constitutes a paragraph.
//         </p>

//         <p>@CODERSDANCE 2024</p>
//       </div>
//     </div>
//   );
// };

// export default HireUs;








// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './HireUs.css';
// import mmg from './images/laptop-eyeglasses-mouse-diary-pen-pot-plant-black-background.jpg';
// import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const HireUs = () => {
//   const initialFormData = {
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     budget: ''
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/api/HireUs', formData);
//       console.log(response);
//       toast.success('Message sent successfully!', { position: 'top-right' });
//       setFormData(initialFormData); // Reset form after submission
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('Error: Failed to send message', { position: 'top-right' });
//     }
//   };

//   return (
//     <div className="hire-us-container">
//       <ToastContainer />
//       <div className="isection">
//         <img src={mmg} alt="Laptop against brown paper texture" className="header-image" />
//         <p className="header-text">Hire Us</p>
//       </div>

//       <div className="content-section1">
//         <p className="section-title"></p>
//         <h1 className="main-title">A PROJECT WITH <br />CODERSDANE?</h1>

//         <form className="contactform" onSubmit={handleSubmit}>
//           <div className="services-section">
//             <p className="subsection-title">Services</p>
//             <div className="inputgroup">
//               <input 
//                 type="text" 
//                 id="service" 
//                 name="service" 
//                 value={formData.service}
//                 onChange={handleChange} 
//               />
//             </div>
//           </div>

//           <div className="budget-section">
//             <p className="subsection-title">Your Budget</p>
//             <div className="inputgroup">
//               <input 
//                 type="text" 
//                 id="budget" 
//                 name="budget" 
//                 value={formData.budget}
//                 onChange={handleChange} 
//               />
//             </div>
//           </div>

//           <div className="inputgroup">
//             <input 
//               type="text" 
//               id="name" 
//               name="name" 
//               value={formData.name}
//               onChange={handleChange} 
//             />
//             <label htmlFor="name">Your Name</label>
//           </div>

//           <div className="inputgroup">
//             <input 
//               type="email" 
//               id="email" 
//               name="email"   
//               value={formData.email}
//               onChange={handleChange} 
//             />
//             <label htmlFor="email">Your Email</label>
//           </div>

//           <div className="inputgroup">
//             <input 
//               type="tel" 
//               id="phone" 
//               name="phone"   
//               value={formData.phone}
//               onChange={handleChange} 
//             />
//             <label htmlFor="phone">Your Phone</label>
//           </div>

//           <button type="submit" className="submitbutton">Submit</button>

//           {/* Vertical line */}
//           <div className="verticalline"></div>
//         </form>
//       </div>

//       <div className="contactsection">
//         <p>CONTACTS</p>
//         <p>HEY@CODERSDANE.COM</p>

//         <p className='hi'>Follow</p>
//         <FontAwesomeIcon icon={faLinkedin} className="linkedinicon" />
//         <FontAwesomeIcon icon={faTwitter} className="twittericon" />
//         <FontAwesomeIcon icon={faGithub} className="githubicon" />
//       </div>

//       <div className="info-section">
//         <p>
//           Paragraphs are the building blocks of papers.<br />
//           Many students define paragraphs in terms of length: <br />a paragraph is a group of at least five sentences,<br />
//           a paragraph is half a page long, etc. In reality, though,<br /> the unity and coherence of ideas<br />
//           among sentences is what constitutes a paragraph.
//         </p>

//         <p>@CODERSDANCE 2024</p>
//       </div>
//     </div>
//   );
// };

// export default HireUs;







// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './HireUs.css';
// // import mmg from './images/laptop-eyeglasses-mouse-diary-pen-pot-plant-black-background.jpg';
// // import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// // const HireUs = () => {
// //  const Hire = {
// //     name: '',
// //     email: '',
// //     phone: '',
// //     service: '',
// //     budget: ''
// //   };

// //   const [formData, setFormData] = useState(Hire);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...Hire, [name]: value });
   
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

    

// //     try {
// //       const response = await axios.post('http://localhost:8000/api/HireUs', { user: formData });
// //       console.log(response);
// //       toast.success(response.data.msg, { position: 'top-right' });
      
    
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       toast.error('Error: Failed to add user', { position: 'top-right' });
// //     }
// //   };

// //   return (
// //     <div className="hire-us-container">
// //       <ToastContainer />
// //       <div className="isection">
// //         <img src={mmg} alt="Laptop against brown paper texture" className="header-image" />
// //         <p className="header-text">Hire Us</p>
// //       </div>

// //       <div className="content-section1">
// //         <p className="section-title"></p>
// //         <h1 className="main-title">A PROJECT WITH <br />CODERSDANE?</h1>

       
// //         <form className="contactform" onSubmit={handleSubmit}>

          
// //         <div className="services-section">
// //           <p className="subsection-title">Services</p>
// //           <div className="inputgroup">
// //             <input 
// //               type="text" 
// //               id="service" 
// //               name="service" 
             
// //               onChange={handleChange} 
// //             />
// //             {/* <label htmlFor="service">Service</label> */}
// //           </div>
// //         </div>

// //         <div className="budget-section">
// //           <p className="subsection-title">Your Budget</p>
// //           <div className="inputgroup">
// //             <input 
// //               type="text" 
// //               id="budget" 
// //               name="budget" 
        
// //               onChange={handleChange} 
// //             />
// //             {/* <label htmlFor="budget">Budget</label> */}
// //           </div>
// //         </div>
        
// //           <div className="inputgroup">
// //             <input 
// //               type="text" 
// //               id="name" 
// //               name="name" 
            
// //               onChange={handleChange} 
// //             />
// //             <label htmlFor="name">Your Name</label>
// //           </div>

// //           <div className="inputgroup">
// //             <input 
// //               type="email" 
// //               id="email" 
// //               name="email"   
            
// //               onChange={handleChange} 
// //             />
// //             <label htmlFor="email">Your Email</label>
// //           </div>

// //           <div className="inputgroup">
// //             <input 
// //               type="tel" 
// //               id="phone" 
// //               name="phone"   
         
// //               onChange={handleChange} 
// //             />
// //             <label htmlFor="phone">Your Phone</label>
// //           </div>



// //           <button type="submit" className="submitbutton">Submit</button>

// //           {/* Vertical line */}
// //           <div className="verticalline"></div>
// //         </form>
// //       </div>

// //       <div className="contactsection">
// //         <p>CONTACTS</p>
// //         <p>HEY@CODERSDANE.COM</p>

// //         <p className='hi'>Follow</p>
// //         <FontAwesomeIcon icon={faLinkedin} className="linkedinicon" />
// //         <FontAwesomeIcon icon={faTwitter} className="twittericon" />
// //         <FontAwesomeIcon icon={faGithub} className="githubicon" />
// //       </div>

// //       <div className="info-section">
// //         <p>
// //           Paragraphs are the building blocks of papers.<br />
// //           Many students define paragraphs in terms of length: <br />a paragraph is a group of at least five sentences,<br />
// //           a paragraph is half a page long, etc. In reality, though,<br /> the unity and coherence of ideas<br />
// //           among sentences is what constitutes a paragraph.
// //         </p>

// //         <p>@CODERSDANCE 2024</p>
// //       </div>
      
   
// //     </div>
    
// //   );
// // };

// // export default HireUs;
