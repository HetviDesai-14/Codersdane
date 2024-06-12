
import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMessage, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const initialUserState = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };

    const [user, setUser] = useState(initialUserState);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/con", user);
            console.log(response);
            toast.success("Message sent successfully!", { position: "top-right" });
            setUser(initialUserState); // Reset form after submission
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message.", { position: "top-right" });
        }
    };

    return (
        <>
            <section className="headermore">
                <h1 className="mainn">Contact Us</h1>
                <p className="mainmain">
                    Do you thrive on doing creative, innovative & challenging work and
                    <br />
                    collaborating with great teammates and clients?
                    <br />
                </p>
            </section>

            <div className="contact-details">
                <div className="contact-detail">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                    </div>
                    <p><strong>Address:</strong>  329, Kalasagar Mall, nr. Satadhar<br></br> Cross Roads,Ahmedabad</p>
                </div>
                <div className="contact-detail">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                    </div>
                    <p><strong>Phone:</strong> +1235 2355 98</p>
                </div>
                <div className="contact-detail">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                    </div>
                    <p><strong>Email:</strong> info@yoursite.com</p>
                </div>
                <div className="contact-detail">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
                    </div>
                    <p><strong>Website:</strong> yoursite.com</p>
                </div>
            </div>

            <div className="contact-container">
                <div className="hover-text">
                    <div className="verticallline"></div>
                    <div>
                        Let's Make Something Together.
                        <p>Drop us a line, or give us a heads up if you're visiting us.<br></br>
                            If you're ready to bring your project to life or have an idea you're eager<br></br> to explore, we're here to collaborate with you every step of the way.<br></br> Our dedicated team is passionate about transforming concepts<br></br> into remarkable realities. Whether you're in need of web development,<br></br> design expertisez, digital marketing solutions,<br></br> or any other aspect of your project, we're well-equipped and enthusiastic to assist.
                        </p>
                    </div>
                    <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                    <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </div>
                <div className="form-container">
                    <h1 className='us'></h1>
                    <form onSubmit={submitForm}>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faUser} className='iconn1' />
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={inputHandler}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faEnvelope} className='iconn2' />
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={inputHandler}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faPhone} className='iconn3' />
                            <input
                                type="tel"
                                name="phone"
                                value={user.phone}
                                onChange={inputHandler}
                                placeholder="Your Phone"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faMessage} className='iconn4' />
                            <textarea
                                name="message"
                                value={user.message}
                                onChange={inputHandler}
                                placeholder="Your Message to us"
                                rows="4"
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <section>
                    <div className='google'>
                        <iframe
                            width="600" height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.openstreetmap.org/export/embed.html?bbox=72.558000%2C23.015000%2C72.584000%2C23.030000&layer=mapnik&marker=23.022505%2C72.571362">


                        </iframe>
                    </div>
                </section>
            </div>
            <Toaster />
        </>
    );
};

export default Contact;
// import React, { useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import './Contact.css';
// // import map from './images/3d-view-map.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faPhone, faMessage, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// const Contact = (props) => {
//     const initialUserState = {
//         name: "",
//         email: "",
//         phone: "",
//         message: ""
//     };

//     const [user, setUser] = useState(initialUserState);

//     const inputHandler = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const submitForm = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:8000/api/con", user);
//             console.log(response);
//             toast.success("Message sent successfully!", { position: "top-right" });
//             setUser(initialUserState); // Reset form after submission
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             toast.error("Failed to send message.", { position: "top-right" });
//         }
//     };

//     return (
//         <>
//             <section className="headermore">
//                 <h1 className="mainn">Contact Us</h1>
//                 <p className="mainmain">
//                     Do you thrive on doing creative, innovative & challenging work and
//                     <br />
//                     collaborating with great teammates and clients?
//                     <br />
//                 </p>
//             </section>

//             <div className="contact-details">
//                 <div className="contact-detail">
//                     <div className="icon-wrapper">
//                         <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
//                     </div>
//                     <p><strong>Address:</strong> 198 West 21th Street, Suite 721 New York</p>
//                 </div>
//                 <div className="contact-detail">
//                     <div className="icon-wrapper">
//                         <FontAwesomeIcon icon={faPhone} className="contact-icon" />
//                     </div>
//                     <p><strong>Phone:</strong> +1235 2355 98</p>
//                 </div>
//                 <div className="contact-detail">
//                     <div className="icon-wrapper">
//                         <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
//                     </div>
//                     <p><strong>Email:</strong> info@yoursite.com</p>
//                 </div>
//                 <div className="contact-detail">
//                     <div className="icon-wrapper">
//                         <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
//                     </div>
//                     <p><strong>Website:</strong> yoursite.com</p>
//                 </div>
//             </div>

//             <div className="contact-container">
//                 <div className="hover-text">
//                     <div className="verticallline"></div>
//                     <div>
//                         Let's Make Something Together.
//                         <p>Drop us a line, or give us a heads up if you're visiting us.<br></br>
//                             If you're ready to bring your project to life or have an idea you're eager<br></br> to explore, we're here to collaborate with you every step of the way.<br></br> Our dedicated team is passionate about transforming concepts<br></br> into remarkable realities. Whether you're in need of web development,<br></br> design expertisez, digital marketing solutions,<br></br> or any other aspect of your project, we're well-equipped and enthusiastic to assist.
//                         </p>
//                     </div>
//                     <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
//                     <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
//                     <FontAwesomeIcon icon={faGithub} className="github-icon" />
//                 </div>
//                 {/* <div className="background-image">
//                     <img src={map} alt="3D View Map" />
//                 </div> */}
//                 <div className="form-container">
//                     <h1 className='us'></h1>
//                     <form onSubmit={submitForm}>
//                         <div className="input-group">
//                             <FontAwesomeIcon icon={faUser} className='iconn1' />
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={user.name}
//                                 onChange={inputHandler}
//                                 placeholder="Your Name"
//                                 required
//                             />
//                         </div>
//                         <div className="input-group">
//                             <FontAwesomeIcon icon={faEnvelope} className='iconn2' />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={user.email}
//                                 onChange={inputHandler}
//                                 placeholder="Your Email"
//                                 required
//                             />
//                         </div>
//                         <div className="input-group">
//                             <FontAwesomeIcon icon={faPhone} className='iconn3' />
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 value={user.phone}
//                                 onChange={inputHandler}
//                                 placeholder="Your Phone"
//                                 required
//                             />
//                         </div>
//                         <div className="input-group">
//                             <FontAwesomeIcon icon={faMessage} className='iconn4' />
//                             <textarea
//                                 name="message"
//                                 value={user.message}
//                                 onChange={inputHandler}
//                                 placeholder="Your Message to us"
//                                 rows="4"
//                                 required
//                             />
//                         </div>
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//                 <section>
//                     <div className='google'>
//                         <Map 
//                             google={props.google} 
//                             zoom={14}
//                             initialCenter={{
//                                 lat: 40.712776, // Latitude for New York
//                                 lng: -74.005974 // Longitude for New York
//                             }}
//                         >
//                             <Marker
//                                 position={{
//                                     lat: 40.712776, // Latitude for New York
//                                     lng: -74.005974 // Longitude for New York
//                                 }}
//                                 name={'Current location'}
//                             />
//                         </Map>
//                     </div>
//                 </section>
//             </div>
//             <Toaster /> 
//         </>
//     );
// };

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyD06J677WMPPt7V88b2AnfBZ18NAeD-Zsg'
// })(Contact);














// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import toast, { Toaster } from 'react-hot-toast';
// // import './Contact.css';
// // import map from './images/3d-view-map.jpg';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faUser, faEnvelope, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';
// // import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


// // const Contact = () => {
// //     const initialUserState = {
// //         name: "",
// //         email: "",
// //         phone: "",
// //         message: ""
// //     };

// //     const [user, setUser] = useState(initialUserState);

// //     const inputHandler = (e) => {
// //         const { name, value } = e.target;
// //         setUser({ ...user, [name]: value });
// //     };

// //     const submitForm = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post("http://localhost:8000/api/con", user);
// //             console.log(response);
// //             toast.success("Message sent successfully!", { position: "top-right" });
// //             setUser(initialUserState); // Reset form after submission
// //         } catch (error) {
// //             console.error("Error submitting form:", error);
// //             toast.error("Failed to send message.", { position: "top-right" });
// //         }
// //     };

// //     return (
// //         <>

// // <section className="headermore">
// //         <h1 className="mainn">Contact Us</h1>
// //         <p className="mainmain">
// //           Do you thrive on doing creative, innovative & challenging work and
// //           <br />
// //           collaborating with great teammates and clients?
// //           <br />
      
// //         </p>
       
// //       </section>


// //             <div className="contact-container">

// //                 <div className="hover-text">
// //                 <div className="verticallline"></div>
// //                     <div>
// //                         Let's Make Something Together.
// //                         <p>Drop us a line, or give us a heads up if you're visiting us.<br></br>
// //                         If you're ready to bring your project to life or have an idea you're eager<br></br> to explore, we're here to collaborate with you every step of the way.<br></br> Our dedicated team is passionate about transforming concepts<br></br> into remarkable realities. Whether you're in need of web development,<br></br> design expertisez, digital marketing solutions,<br></br> or any other aspect of your project, we're well-equipped and enthusiastic to assist.
// //                         </p>
// //                     </div>

                   
// //                     <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
// //                     <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
// //                     <FontAwesomeIcon icon={faGithub} className="github-icon" />
// //                 </div>
// //                 <div className="background-image">
// //                     <img src={map} alt="3D View Map" />
// //                 </div>
// //                 <div className="form-container">
// //                     <h1 className='us'></h1>
// //                     <form onSubmit={submitForm}>
// //                         <div className="input-group">
// //                             <FontAwesomeIcon icon={faUser} className='iconn1' />
// //                             <input 
// //                                 type="text" 
// //                                 name="name" 
// //                                 value={user.name} 
// //                                 onChange={inputHandler} 
// //                                 placeholder="Your Name" 
// //                                 required 
// //                             />
// //                         </div>
// //                         <div className="input-group">
// //                             <FontAwesomeIcon icon={faEnvelope} className='iconn2' />
// //                             <input 
// //                                 type="email" 
// //                                 name="email" 
// //                                 value={user.email} 
// //                                 onChange={inputHandler} 
// //                                 placeholder="Your Email" 
// //                                 required 
// //                             />
// //                         </div>
// //                         <div className="input-group">
// //                             <FontAwesomeIcon icon={faPhone} className='iconn3' />
// //                             <input 
// //                                 type="tel" 
// //                                 name="phone" 
// //                                 value={user.phone} 
// //                                 onChange={inputHandler} 
// //                                 placeholder="Your Phone" 
// //                                 required 
// //                             />
// //                         </div>
// //                         <div className="input-group">
// //                             <FontAwesomeIcon icon={faMessage} className='iconn4' />
// //                             <textarea 
// //                                 name="message" 
// //                                 value={user.message} 
// //                                 onChange={inputHandler} 
// //                                 placeholder="Your Message to us" 
// //                                 rows="4" 
// //                                 required 
// //                             />
// //                         </div>
// //                         <button type="submit">Submit</button>
// //                     </form>
// //                 </div>
// //             </div>
// //             <Toaster />
// //         </>
// //     );
// // };

// // export default Contact;


