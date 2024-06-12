import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './react.css';


const NodeJSPage = () => {
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
                <h1 className="main-scream">Node.js Web Development Company</h1>
                <p className="main-curse">TriState Technology is a premier Node.js Web Development Company, offering scalable and innovative web solutions. Leverage the power of Node.js to build fast, efficient, and data-intensive web applications tailored to your business requirements.</p>
                <button className="talk-fright"><Link to="/contact">LET'S TALK</Link></button>
            </section>

            <section className="choice-dread">
                <h1>Why Choose Node.js for Web Development?</h1>
                <p>Choosing Node.js for web development comes with several compelling advantages that make it a preferred choice for many developers and businesses.<br></br> Firstly, Node.js is a powerful, open-source, JavaScript runtime environment that executes JavaScript code outside a web browser, making it ideal for server-side development.<br></br> One of the key benefits of Node.js is its non-blocking, event-driven architecture, which allows it to handle multiple simultaneous connections efficiently, leading to high performance and scalability for real-time applications like chat apps and online gaming.<br></br> Node.js uses a single programming language, JavaScript, for both client-side and server-side development, which streamlines the development process and allows for better consistency and communication across the development team.<br></br> Its package manager, npm (Node Package Manager), provides access to a vast ecosystem of open-source libraries and modules, enabling developers to quickly add functionality to their applications and accelerate the development process.Node.js is a powerful runtime environment that allows developers to build scalable and real-time web applications. With its event-driven architecture and non-blocking I/O operations, Node.js enables high performance and efficiency, making it an ideal choice for modern web development.</p>
            </section>

            <section className="glimpse-terror">
                <h1 className="section-phantom">A Glimpse at the Advantages of Node.js Web Development!</h1> 
                <div className="glimpse-scare">
                    <h1>Scalability & Performance</h1>
                    <p>Node.js offers asynchronous, event-driven architecture, allowing for efficient handling of concurrent requests and enhanced scalability and performance of web applications.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Real-time Communication</h1>
                    <p>With technologies like WebSockets, Node.js facilitates real-time communication between clients and servers, enabling the development of interactive and collaborative web applications.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Large Ecosystem of Packages</h1>
                    <p>Node.js has a rich ecosystem of packages and modules available via npm, allowing developers to easily integrate third-party libraries and tools to enhance the functionality and features of their web applications.</p>
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
                <h1 className="section-phantom">Explore Opportunities with Node.js Web Development</h1>
                <div className="niche-creepy">
                    <p>Node.js web development caters to diverse industry verticals, offering endless <br></br>opportunities for businesses to innovate and thrive:</p>
                    <div className="niche-tombstones">
                        <div className="niche-tombstone">
                            <div className="icon">🌐</div>
                            <p>E-commerce Platforms</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">📝</div>
                            <p>Content Management Systems</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">🏢</div>
                            <p>Enterprise Solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-phantasm">
                <h1 className="section-phantom">Frequently Asked Questions</h1>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(0)}>What is Node.js? <span className="faq-toggle">{faqOpen[0] ? '-' : '+'}</span></h3>
                    {faqOpen[0] && <p className="faq-ghoul">Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable and real-time web applications.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(1)}>What are the key benefits of Node.js web development? <span className="faq-toggle">{faqOpen[1] ? '-' : '+'}</span></h3>
                    {faqOpen[1] && <p className="faq-ghoul">Key benefits of Node.js web development include scalability, performance, real-time communication, and a large ecosystem of packages.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(2)}>Is Node.js suitable for my project? <span className="faq-toggle">{faqOpen[2] ? '-' : '+'}</span></h3>
                    {faqOpen[2] && <p className="faq-ghoul">Node.js is suitable for most web development projects, especially those requiring real-time capabilities, high performance, and scalability.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(3)}>Do you provide support and maintenance for Node.js web applications? <span className="faq-toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
                    {faqOpen[3] && <p className="faq-ghoul">Yes, we provide comprehensive support and maintenance services for Node.js web applications, ensuring their continued performance and stability.</p>}
                </div>
            </section>
        </div>
        </div>
       
    );
};

export default NodeJSPage;
