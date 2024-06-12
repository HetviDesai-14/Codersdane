import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './react.css';

const AndroidPage = () => {
    const [faqOpen, setFaqOpen] = useState(Array(4).fill(false));

    const toggleFaq = (index) => {
        const newFaqOpen = [...faqOpen];
        newFaqOpen[index] = !newFaqOpen[index];
        setFaqOpen(newFaqOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, );

    const handleScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            }
        });
    };

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const Semicircle = ({ label, className }) => (
        <div className="semicircle-container">
          <div className={`semicircle ${className}`}></div>
          <div className="label">{label}</div>
        </div>
      );


    return (
        <div>
            <div>
            <section className="haunted-container">
                <aside className="vertical-sidebar">
                    <ul>
                        <li><Link to="/react">React Native App Development</Link></li>
                        <li><Link to="/flu">Flutter App Development</Link></li>
                        <li><Link to="/an">Android App Development</Link></li>
                        <li><Link to="/mean">MEAN Stack Development</Link></li>
                        <li><Link to="/ree">ReactJS Development</Link></li>
                        <li><Link to="/no">Node.js Development</Link></li>
                    </ul>
                </aside>
                </section>
            <section className="header-graveyard">
                <h1 className="main-scream">Android App Development Company</h1>
                <p className="main-curse">TriState Technology is a Leading Android App Development Company, specializing in crafting innovative mobile solutions. Elevate your business with our Android App Development Services. Our expert developers create robust and scalable Android apps tailored to your business needs.</p>
                <button className="talk-fright"><Link to="/contact">LET'S TALK</Link></button>
            </section>

            <section className="choice-dread">
                <h1>Why Choose Android App Development?</h1>
                <p>Choosing Android app development offers a range of advantages that make it a preferred choice for many developers and businesses.<br></br> Firstly, Android is the most widely used mobile operating system globally, providing access to a vast user base and potential market reach.<br></br> The platform's open-source nature allows developers to customize and innovate freely, creating unique and diverse applications.<br></br> Additionally, the Google Play Store provides a straightforward and efficient distribution channel, enabling developers to publish their apps to millions of users worldwide.<br></br> Android development also benefits from robust support and a comprehensive set of development tools provided by Google, including Android Studio, which enhances productivity and facilitates the creation of high-quality apps.Android is the most widely used mobile operating system, offering a vast user base and unparalleled market reach. Our Android app development services enable businesses to tap into this lucrative market and engage with their target audience effectively.</p>
            </section>

            <section className="glimpse-terror">
                <h1 className="section-phantom">A Glimpse at the Advantages of Android App Development!</h1> 
                <div className="glimpse-scare">
                    <h1>Global Market Reach</h1>
                    <p>With Android's dominant market share, your app can reach millions of users worldwide, providing ample opportunities for growth and expansion.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Customization Options</h1>
                    <p>Android offers extensive customization options, allowing developers to create unique and tailored experiences for users based on their preferences.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Integration with Google Services</h1>
                    <p>Android apps seamlessly integrate with Google services such as Maps, Analytics, and Firebase, enhancing functionality and user engagement.</p>
                </div>
            </section>

            <section className="semicircle-section">
                <h1 className='do'>What We Do!!</h1>
  <div className="app">
   
    <Semicircle label="Planning" className="planning" />
    <Semicircle label="Design" className="design" />
    <Semicircle label="Development" className="development" />
    <Semicircle label="Quality assurance" className="quality-assurance" />
    <Semicircle label="Support" className="support" />
  </div>
</section>

            <section className="niche-crypt">
                <h1 className="section-phantom">Explore Android App Development Opportunities</h1>
                <div className="niche-creepy">
                    <p>Android apps cater to diverse industry verticals, offering <br></br>endless opportunities for businesses to innovate and thrive:</p>
                    <div className="niche-tombstones">
                        <div className="niche-tombstone">
                            <div className="icon">📱</div>
                            <p>Mobile Apps</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">💼</div>
                            <p>Enterprise Solutions</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">🛒</div>
                            <p>E-commerce</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-phantasm">
                <h1 className="section-phantom">Frequently Asked Questions</h1>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(0)}>What are the benefits of Android app development? <span className="faq-toggle">{faqOpen[0] ? '-' : '+'}</span></h3>
                    {faqOpen[0] && <p className="faq-ghoul">Android app development offers global market reach, extensive customization options, and seamless integration with Google services.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(1)}>How long does it take to develop an Android app? <span className="faq-toggle">{faqOpen[1] ? '-' : '+'}</span></h3>
                    {faqOpen[1] && <p className="faq-ghoul">The development time for an Android app depends on various factors such as complexity, features, and development approach. We can provide a more accurate estimate after understanding your project requirements.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(2)}>What is the cost of developing an Android app? <span className="faq-toggle">{faqOpen[2] ? '-' : '+'}</span></h3>
                    {faqOpen[2] && <p className="faq-ghoul">The cost of developing an Android app varies based on factors like features, design complexity, and development time. Contact us for a personalized quote tailored to your project needs.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(3)}>Do you provide post-development support? <span className="faq-toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
                    {faqOpen[3] && <p className="faq-ghoul">Yes, we offer comprehensive post-development support to ensure your Android app remains updated, secure, and optimized for performance.</p>}
                </div>
            </section>
        </div>
        </div>
      
    );
};

export default AndroidPage;
