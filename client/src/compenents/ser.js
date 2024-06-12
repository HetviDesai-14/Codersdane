import React, { useState } from 'react';
import './ser.css';
import s from './images/pexels-tirachard-kumtanom-112571-733856.jpg';
import ticket from './images/sticker.png';
import deadone from './images/whatsapp.jpg';
import deadtwo from './images/docs.jpg';
import deadthree from './images/Pinterest.jpg';
import deadfour from './images/setting.jpg';
import deadfive from './images/notes.jpg';
import deadsix from './images/video.jpg';

const Ser = () => {
    const [faqOpen, setFaqOpen] = useState(Array(4).fill(false));

    const toggleFaq = (index) => {
        const newFaqOpen = [...faqOpen];
        newFaqOpen[index] = !newFaqOpen[index];
        setFaqOpen(newFaqOpen);
    };

    return (

        <div>

          
            <div className="ii">
                <img src={ticket} alt="ticket" className="tick" />
                <h1>See Our App Development Services</h1>
            </div>

            <div className="ser-container">
                <div className="ser-section">
                    <h1 className="ser-title">Our Mobile and Web Development Services</h1>
                    <p className="ser-description1">We offer full-stack iOS, Android, and web development services together with requirements analysis, quality assurance, and project management. We have all the expertise you need to produce a fully fledged, stable, and scalable product.</p>
                    <img src={s} alt="hi" className="ser-image" />
                  
                </div>
            </div>

            <div className="ser-subsectionmobile-app-services">
                <h2 className="ser-subsection-title">Our Mobile App Development Services & Our Web Development Services</h2>
                <div className="ser-grid-container">
                    <div className="ser-grid-item">
                        <a href="/react" className="ser-grid-title-link"><h3 className="ser-grid-title">React Native App Development</h3></a>
                        <img src={deadone} alt="" className='omg'></img>
                        <p className="ser-grid-description">TriState Technology is a Leading React Native App Development Company, specializing in the latest web and mobile technologies. Elevate your business with our React Native App Development Services.</p>
                    </div>
                    <div className="ser-grid-item">
                        <a href="/flu" className="ser-grid-title-link"><h3 className="ser-grid-title">Flutter App Development</h3></a>
                        <img src={deadtwo} alt="" className='omg'></img>
                        <p className="ser-grid-description">Revolutionize your digital presence with our top-tier Flutter app development services. As a leading Flutter App Development Company.</p>
                    </div>
                    <div className="ser-grid-item">
                        <a href="/an" className="ser-grid-title-link"><h3 className="ser-grid-title">Android App Development</h3></a>
                        <img src={deadthree} alt="" className='omg'></img>
                        <p className="ser-grid-description">With a focus to help you scale up your business and achieve a hockey-stick growth in sustainability, we provide end-to-end Android app development services. Get an Android app that brings your product to the audience and the media’s notice.</p>
                    </div>
                </div>
            </div>

            <div className="ser-subsectionweb-dev-services">
                <h2 className="ser-subsection-title"></h2>
                <div className="ser-grid-container">
                    <div className="ser-grid-item">
                        <a href="/mean" className="ser-grid-title-link"><h3 className="ser-grid-title">MEAN Stack Development</h3></a>
                        <img src={deadfour} alt="" className='omg'></img>
                        <p className="ser-grid-description">Let's implement the abilities of MEAN stack development into your business to derive an exceptional application.</p>
                    </div>
                    <div className="ser-grid-item">
                        <a href="/ree" className="ser-grid-title-link"><h3 className="ser-grid-title">ReactJS Development</h3></a>
                        <img src={deadfive} alt="" className='omg'></img>
                        <p className="ser-grid-description">We offer custom ReactJS development services for startups, small-medium scale industries and enterprises for effective user engagement.</p>
                    </div>
                    <div className="ser-grid-item">
                        <a href="/no" className="ser-grid-title-link"><h3 className="ser-grid-title">Node.js Development</h3></a>
                        <img src={deadsix} alt="" className='omg'></img>
                        <p className="ser-grid-description">Build faster scalable network Mobile or Web Application with our Node.js Development Service.</p>
                    </div>
                </div>
            </div>

<div className='fan'>
            <section className="faqphantasm">
                <h1 className="sectionphantom">Frequently Asked Questions</h1>
                <div className="faqspook">
                    <h3 className="faqshriek" onClick={() => toggleFaq(0)}>What is React Native? <span className="faqtoggle">{faqOpen[0] ? '-' : '+'}</span></h3>
                    {faqOpen[0] && <p className="faqghoul">React Native is a JavaScript framework for building native mobile apps using React.</p>}
                </div>
                <div className="faqspook">
                    <h3 className="faqshriek" onClick={() => toggleFaq(1)}>How does React Native differ from React? <span className="faqtoggle">{faqOpen[1] ? '-' : '+'}</span></h3>
                    {faqOpen[1] && <p className="faqghoul">React is a JavaScript library for building user interfaces, while React Native is a framework for building native mobile apps using React.</p>}
                </div>
                <div className="faqspook">
                    <h3 className="faqshriek" onClick={() => toggleFaq(2)}>Can I use React Native for both iOS and Android? <span className="faqtoggle">{faqOpen[2] ? '-' : '+'}</span></h3>
                    {faqOpen[2] && <p className="faqghoul">Yes, React Native allows developers to create mobile apps that run on both iOS and Android using a single codebase.</p>}
                </div>
                <div className="faqspook">
                    <h3 className="faqshriek" onClick={() => toggleFaq(3)}>Is React Native suitable for my project? <span className="faqtoggle">{faqOpen[3] ? '-' : '+'}</span></h3>
                    {faqOpen[3] && <p className="faqghoul">React Native is suitable for most projects, but it depends on your specific requirements and goals. Our team can help you determine if React Native is the right choice for your project.</p>}
                </div>
            </section>
            </div>
        </div>
    );
};

export default Ser;




// import React from 'react';
// import './ser.css';
// import s from './images/pexels-tirachard-kumtanom-112571-733856.jpg';
// import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fareact} from '@fortawesome/free-brands-svg-icons';

// const Ser = () => {
//     return (
//         <div >

// <div>
//     <p><FontAwesomeIcon icon="fa-brands fa-react" />React Native App Development</p>
//     <p><FontAwesomeIcon icon="fa-brands fa-android" />Android App Development</p>
// <p><FontAwesomeIcon icon="fa-solid fa-laptop" />UI/ UXDesign</p>
// </div>
            

//             <div className="ser-container">
//                 <div className="ser-section">
//                     <h1 className="ser-title">Our Mobile and Web Development Services</h1>
//                     <p className="ser-description1">We offer full-stack iOS, Android, and web development services together with requirements analysis, quality assurance, and project management. We have all the expertise you need to produce a fully fledged, stable, and scalable product.</p>
//                     <img src={s} alt="hi" className="ser-image"></img>
//                     <button><Link to="/contact"className="linkit"></Link>Let's Discuss</button>
//                 </div>
              
//             </div>

//             <div className="ser-subsectionmobile-app-services">
//                 <h2 className="ser-subsection-title">Our Mobile App Development Services</h2>
//                 <div className="ser-grid-container">
//                     <div className="ser-grid-item">
//                         <a href="/react" className="ser-grid-title-link"><h3 className="ser-grid-title">React Native App Development </h3></a>
//         rgba(0, 0, 0, 0.402)    <p className="ser-grid-description">TriState Technology is a Leading React Native App Development Company, specializing in the latest web and mobile technologies. Elevate your business with our React Native App Development Services, Our Expert React programmers develop a stunning and highly functional cross-platform app for your business.</p>
//                     </div>
//                     <div className="ser-grid-item">
//                         <a href="/flu" className="ser-grid-title-link"><h3 className="ser-grid-title">Flutter App Development</h3></a>
//                         <p className="ser-grid-description">Revolutionize your digital presence with our top-tier Flutter app development services. As a leading Flutter App Development Company, we create dynamic and seamless solutions to elevate user experiences and keep your business ahead of the curve.</p>
//                     </div>
//                     <div className="ser-grid-item">
//                         <a href="/an" className="ser-grid-title-link"><h3 className="ser-grid-title">Android App Development</h3></a>
//                         <p className="ser-grid-description">With a focus to help you scale up your business and achieve a hockey-stick growth in sustainability, we provide end-to-end Android app development services. Get an Android app that brings your product to the audience and the media’s notice.</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="ser-subsectionweb-dev-services">
//                 <h2 className="ser-subsection-title">Our Web Development Services</h2>
//                 <div className="ser-grid-container">
//                     <div className="ser-grid-item">
//                         <a href="/mean" className="ser-grid-title-link"><h3 className="ser-grid-title">MEAN Stack Development</h3></a>
//                         <p className="ser-grid-description">Let's implement the abilities of MEAN stack development into your business to derive an exceptional application.</p>
//                     </div>
//                     <div className="ser-grid-item">
//                         <a href="/ree" className="ser-grid-title-link"><h3 className="ser-grid-title">ReactJS Development  </h3></a>
//                         <p className="ser-grid-description">We offer custom ReactJS development services for startups, small-medium scale industries and enterprises for effective user engagement.</p>
//                     </div>
//                     <div className="ser-grid-item">
//                         <a href="/no" className="ser-grid-title-link"><h3 className="ser-grid-title">Node.js Development</h3></a>
//                         <p className="ser-grid-description">Build faster scalable network Mobile or Web Application with our Node.js Development Service.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ser;
