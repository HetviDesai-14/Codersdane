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
                    <h1 className="main-scream">React.js Web Development Company</h1>
                    <p className="main-curse">TriState Technology is a leading React.js Web Development Company, offering cutting-edge solutions for web development projects. Harness the power of React.js to build interactive, scalable, and feature-rich web applications.</p>
                    <button className="talk-fright"><Link to="/contact">LET'S TALK</Link></button>
                </section>

                <section className="choice-dread">
                    <h1>Why Choose React.js for Web Development?</h1>
                    <p>Choosing React.js for web development provides several compelling advantages that make it a popular choice among developers and businesses.<br></br> Firstly, React.js, developed by Facebook, is a powerful JavaScript library for building user interfaces, particularly single-page applications where data changes frequently.<br></br> One of its standout features is the virtual DOM, which enhances performance by minimizing the number of costly DOM manipulations and ensures a smooth user experience.<br></br> React’s component-based architecture promotes reusability and maintainability of code, allowing developers to build complex UIs from small, isolated pieces of code called components.<br></br> The unidirectional data flow in React makes it easier to debug and understand applications, improving overall code quality.<br></br> Additionally, React's ecosystem includes a wide range of tools and libraries, such as Redux for state management, which further streamline the development processReact.js is a popular JavaScript library for building user interfaces, known for its efficiency and performance. With React.js, you can create dynamic and interactive web applications with ease, making it an ideal choice for modern web development.</p>
                </section>

                <section className="glimpse-terror">
                    <h1 className="section-phantom">A Glimpse at the Benefits of React.js Web Development!</h1> 
                    <div className="glimpse-scare">
                        <h1>Component-Based Architecture</h1>
                        <p>React.js follows a component-based architecture, allowing developers to create reusable and modular UI components. This promotes code reusability, maintainability, and scalability of web applications.</p>
                    </div>
                    <div className="glimpse-scare">
                        <h1>Virtual DOM</h1>
                        <p>React.js utilizes a virtual DOM (Document Object Model), which improves the performance of web applications by minimizing DOM manipulation and increasing rendering speed.</p>
                    </div>
                    <div className="glimpse-scare">
                        <h1>Declarative Syntax</h1>
                        <p>With React.js, developers can write declarative code, which makes it easier to understand and debug. The declarative syntax allows you to describe how your UI should look based on the current application state.</p>
                    </div>
                </section>

                <section className="semicircle-section">
                    <h1 className='do'>Our Process of React.js Web Development</h1>
                    <div className="app">
                        <Semicircle label="Requirement Analysis" className="planning" />
                        <Semicircle label="UI/UX Design" className="design" />
                        <Semicircle label="Development & Testing" className="development" />
                        <Semicircle label="Deployment & Support" className="quality-assurance" />
                    </div>
                </section>

                <section className="niche-crypt">
                    <h1 className="section-phantom">Explore Opportunities with React.js Web Development</h1>
                    <div className="niche-creepy">
                        <p>React.js web development offers endless possibilities for businesses across various industries:</p>
                        <div className="niche-tombstones">
                            <div className="niche-tombstone">
                                <div className="icon">🛒</div>
                                <p>E-commerce</p>
                            </div>
                            <div className="niche-tombstone">
                                <div className="icon">📱</div>
                                <p>Mobile Applications</p>
                            </div>
                            <div className="niche-tombstone">
                                <div className="icon">💼</div>
                                <p>Enterprise Solutions</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq-phantasm">
                    <h1 className="section-phantom">Frequently Asked Questions</h1>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(0)}>What is React.js? <span className="faq-toggle">{faqOpen[0] ? '-' : '+'}</span></h3>
                        {faqOpen[0] && <p className="faq-ghoul">React.js is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create interactive and dynamic web applications with ease.</p>}
                    </div>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(1)}>What are the key features of React.js? <span className="faq-toggle">{faqOpen[1] ? '-' : '+'}</span></h3>
                        {faqOpen[1] && <p className="faq-ghoul">Key features of React.js include component-based architecture, virtual DOM, JSX syntax, and a rich ecosystem of third-party libraries and tools.</p>}
                    </div>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(2)}>Is React.js suitable for my project? <span className="faq-toggle">{faqOpen[2] ? '-' : '+'}</span></h3>
                        {faqOpen[2] && <p className="faq-ghoul">React.js is suitable for a wide range of web development projects, from simple single-page applications to complex enterprise solutions. It offers flexibility, scalability, and performance.</p>}
                    </div>
                    <div className="faq-spook">
                        <h3 className="faq-shriek" onClick={() => toggleFaq(3)}>Do you provide support for React.js web applications? <span className="faq-toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
                        {faqOpen[3] && <p className="faq-ghoul">Yes, we offer comprehensive support and maintenance services for React.js web applications, ensuring their continued success and performance.</p>}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReactPage;
