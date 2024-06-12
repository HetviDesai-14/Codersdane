import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './react.css';

const MEANPage = () => {
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
        <div >
              <div >
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
                <h1 className="main-scream">MEAN Stack Development Company</h1>
                <p className="main-curse">TriState Technology is a leading MEAN Stack Development Company, empowering businesses with cutting-edge web solutions. Harness the power of MongoDB, Express.js, Angular, and Node.js with our MEAN Stack Development Services to create dynamic and scalable web applications.</p>
                <button className="talk-fright"><Link to="/contact">LET'S TALK</Link></button>
            </section>

            <section className="choice-dread">
                <h1>Why Choose MEAN Stack Development?</h1>
                <p>Choosing MEAN stack development comes with a multitude of benefits that make it an attractive option for developers and businesses.<br></br> Firstly, MEAN is an acronym for MongoDB, Express.js, Angular, and Node.js, which together provide a full-stack JavaScript solution for building dynamic and robust web applications.<br></br> One of the primary advantages is the use of a single programming language, JavaScript, across the entire application stack, which streamlines development processes and enhances efficiency.<br></br> MongoDB, a NoSQL database, offers flexibility and scalability in handling large volumes of data.<br></br> Express.js simplifies server-side development with its lightweight and modular framework, making it easier to build robust APIs.<br></br> Angular provides a powerful framework for developing rich, client-side applications with two-way data binding and modular components.The MEAN stack offers a full-stack JavaScript solution for building robust web applications. With seamless integration between MongoDB, Express.js, Angular, and Node.js, MEAN Stack Development ensures rapid development, scalability, and flexibility.</p>
            </section>

            <section className="glimpse-terror">
                <h1 className="section-phantom">A Glimpse at the Advantages of MEAN Stack Development!</h1> 
                <div className="glimpse-scare">
                    <h1>Single Language Across Stack</h1>
                    <p>MEAN stack development uses JavaScript for both client-side and server-side scripting, allowing for seamless communication and code reuse throughout the development process.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Scalability & Flexibility</h1>
                    <p>MEAN stack offers a modular and flexible architecture, enabling developers to easily scale applications as per business requirements and integrate new features without hassle.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Real-time Web Applications</h1>
                    <p>With technologies like Node.js and Angular, MEAN stack facilitates the development of real-time web applications, providing users with dynamic and interactive experiences.</p>
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
                <h1 className="section-phantom">Explore Opportunities with MEAN Stack</h1>
                <div className="niche-creepy">
                    <p>MEAN stack development caters to diverse industry verticals, offering endless opportunities for businesses to innovate and thrive:</p>
                    <div className="niche-tombstones">
                        <div className="niche-tombstone">
                            <div className="icon">🏢</div>
                            <p>Enterprise Solutions</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">💼</div>
                            <p>Business Applications</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">🌐</div>
                            <p>E-commerce Platforms</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-phantasm">
                <h1 className="section-phantom">Frequently Asked Questions</h1>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(0)}>What is MEAN Stack Development? <span className="faq-toggle">{faqOpen[0] ? '-' : '+'}</span></h3>
                    {faqOpen[0] && <p className="faq-ghoul">MEAN stack development refers to the use of MongoDB, Express.js, Angular, and Node.js to build dynamic and scalable web applications.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(1)}>Why should I choose MEAN stack for my project? <span className="faq-toggle">{faqOpen[1] ? '-' : '+'}</span></h3>
                    {faqOpen[1] && <p className="faq-ghoul">MEAN stack offers a full-stack JavaScript solution, allowing for rapid development, scalability, and flexibility, making it ideal for building modern web applications.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(2)}>What are the key benefits of MEAN stack development? <span className="faq-toggle">{faqOpen[2] ? '-' : '+'}</span></h3>
                    {faqOpen[2] && <p className="faq-ghoul">Key benefits of MEAN stack development include single language across the stack, scalability, flexibility, and real-time web application development capabilities.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(3)}>Do you provide post-development support for MEAN stack projects? <span className="faq-toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
                    {faqOpen[3] && <p className="faq-ghoul">Yes, we offer comprehensive post-development support and maintenance services to ensure the success and longevity of your MEAN stack application.</p>}
                </div>
            </section>
        </div>
        </div>
    );
};

export default MEANPage;
