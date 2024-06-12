import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './react.css';

const ReactPage = () => {
    const [faqOpen, setFaqOpen] = useState(Array(4).fill(false));

    const toggleFaq = (index) => {
        const newFaqOpen = [...faqOpen];
        newFaqOpen[index] = !newFaqOpen[index];
        setFaqOpen(newFaqOpen);
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
                    <h1 className="main-scream">React Native App Development Company</h1>
                    <p className="main-curse">TriState Technology is a Leading React Native App Development Company, specializing in the latest web and mobile technologies.<br /> Elevate your business with our React Native App Development Services,<br /> Our Expert React programmers develop a stunning and highly functional cross-platform app for your business.</p>
                    <button className="talk-fright"><Link to="/contact">LET'S TALK</Link></button>
                </section>

                <section className="choice-dread">
                    <h1>React Native: An ultimate choice for startups, SMEs, and large enterprises</h1>
                    <p>React Native is a Javascript framework to build native mobile apps for iOS and Android.<br /> We create mobile applications identical to an application built using Swift for iOS or Java for Android.<br /> Our React Native developers build cross-platform apps that are functionally powerful and excellent user experience.

                        At TriState Technology, we build React Native apps with which the time-to-market becomes faster without compromising on the app performance.<br /> Being an open-source framework, React Native provides us the flexibility and capabilities to<br /> build high-quality and super-efficient apps for other platforms like tvOS as well.

                        Our team of React Native app developers is our biggest asset when it comes to shipping successful, <br />sleek, and easy-to-use cross-platform apps.</p>
                </section>

                <section className="glimpse-terror">
                    <h1 className="section-phantom">A Glimpse at the Efficacies of React Native App Development!</h1>
                    <div className="glimpse-scare">
                        <h1>Acquire Native Feel & Look</h1>
                        <p>The combination of native UI with JavaScript delivers an application with an identical feel and look across Android and iOS devices. Our developers make sure to use identical building blocks to achieve this result.</p>
                    </div>
                    <div className="glimpse-scare">
                        <h1>UI-Focused Development Approach</h1>
                        <p>With React Native, we ensure that the application interfaces are responsive and fast. It is because of the capabilities associated with React JS Library. Our developers will integrate it to deliver high-end graphics and aesthetic UI designs.</p>
                    </div>
                    <div className="glimpse-scare">
                        <h1>Reusability of Code</h1>
                        <p>If you want your app to run on both iOS and Android platforms, React Native can do it with less cost and effort. React Native permits the developers to reuse 90% of a code to transit an app between two platforms. Thus, our react native app development team can work faster and with more efficiency</p>
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
                    <h1 className="section-phantom">Pick Out Your Niche</h1>
                    <div className="niche-creepy">
                        <p>TriState has years of experience in providing high quality <br />design and development services.Explore the opportunities of<br /> web and mobile development for your business niche
                            <br />    To ensure the labels also enlarge when the semicircles are hovered over,<br /> you can update the CSS to include the<br /> hover effect on both the semicircles and the labels. <br />Additionally, to place a line under each semicircle with the label below it,<br /> you can use the ::after pseudo-element.</p>
                        <div className="niche-tombstones">
                            <div className="niche-tombstone">
                                <div className="icon">🏦</div>
                                <p>BFIS</p>
                            </div>
                            <div className="niche-tombstone">
                                <div className="icon">🩺</div>
                                <p>Health Care</p>
                            </div>
                            <div className="niche-tombstone">
                                <div className="icon">✈️</div>
                                <p>Travel</p>
                            </div>
                            <div className="niche-tombstone">
                                <div className="icon">🏠</div>
                                <p>Real Estate</p>
                            </div>
                            <div className="niche-tombstone">
                                <div className="icon">🚚</div>
                                <p>Transport</p>
                            </div>
                            <div className="niche-tombstone">
                                <div className="icon">🍽️</div>
                                <p>Restaurant</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq-phantasm">
                    <h1 className="section-phantom">Frequently Asked Questions</h1>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(0)}>What is React Native? <span className="faq-toggle">{faqOpen[0] ? '-' : '+'}</span></h3>
                        {faqOpen[0] && <p className="faq-ghoul">React Native is a JavaScript framework for building native mobile apps using React.</p>}
                    </div>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(1)}>How does React Native differ from React? <span className="faq-toggle">{faqOpen[1] ? '-' : '+'}</span></h3>
                        {faqOpen[1] && <p className="faq-ghoul">React is a JavaScript library for building user interfaces, while React Native is a framework for building native mobile apps using React.</p>}
                    </div>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(2)}>Can I use React Native for both iOS and Android? <span className="faq-toggle">{faqOpen[2] ? '-' : '+'}</span></h3>
                        {faqOpen[2] && <p className="faq-ghoul">Yes, React Native allows developers to create mobile apps that run on both iOS and Android using a single codebase.</p>}
                    </div>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(3)}>Is React Native suitable for my project? <span className="faq-toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
                        {faqOpen[3] && <p className="faq-ghoul">React Native is suitable for most projects, but it depends on your specific requirements and goals. Our team can help you determine if React Native is the right choice for your project.</p>}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReactPage;