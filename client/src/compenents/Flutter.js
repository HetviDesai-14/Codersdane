import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './react.css';

const FlutterPage = () => {
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
                <h1 className="main-scream">Flutter App Development Company</h1>
                <p className="main-curse">TriState Technology is a Leading Flutter App Development Company, specializing in cutting-edge mobile technologies. Elevate your business with our Flutter App Development Services. Our expert Flutter developers craft stunning cross-platform apps for your business needs.</p>
                <button className="talk-fright"><Link to="/contact">LET'S TALK</Link></button>
            </section>

            <section className="choice-dread">
                <h1>Flutter: Empowering Cross-Platform Development</h1>
                <p>Flutter’s rich set of pre-designed widgets, along with its highly customizable and expressive UI components, enables developers to create visually attractive and user-friendly interfaces. Choosing Flutter for app development comes with numerous benefits that make it a compelling choice for developers and businesses alike.<br></br> Firstly, Flutter is an open-source UI software development kit created by Google, which allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase.<br></br> This cross-platform capability significantly reduces development time and costs, as there is no need to write and maintain separate code for different platforms.






Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Our Flutter developers create beautiful and responsive apps that run seamlessly on both Android and iOS platforms.</p>
            </section>

            <section className="glimpse-terror">
                <h1 className="section-phantom">A Glimpse at the Efficacies of Flutter App Development!</h1> 
                <div className="glimpse-scare">
                    <h1>Fast Development</h1>
                    <p>With Flutter's hot reload feature, developers can see changes instantly and experiment with UI designs, resulting in faster development cycles.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Beautiful UIs</h1>
                    <p>Flutter offers a rich set of customizable widgets, enabling developers to create stunning and consistent user interfaces across platforms.</p>
                </div>
                <div className="glimpse-scare">
                    <h1>Native Performance</h1>
                    <p>Flutter compiles to native code, providing near-native performance on both Android and iOS, ensuring smooth animations and high performance.</p>
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
                <h1 className="section-phantom">Explore Your Niche with Flutter</h1>
                <div className="niche-creepy">
                    <p>Discover the endless possibilities of Flutter app development<br></br> across various industries:</p>
                    <div className="niche-tombstones">
                        <div className="niche-tombstone">
                            <div className="icon">📱</div>
                            <p>Mobile Apps</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">💻</div>
                            <p>Web Apps</p>
                        </div>
                        <div className="niche-tombstone">
                            <div className="icon">🖥️</div>
                            <p>Desktop Apps</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-phantasm">
                <h1 className="section-phantom">Frequently Asked Questions</h1>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(0)}>What is Flutter? <span className="faq-toggle">{faqOpen[0] ? '-' : '+'}</span></h3>
                    {faqOpen[0] && <p className="faq-ghoul">Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(1)}>Why choose Flutter for app development? <span className="faq-toggle">{faqOpen[1] ? '-' : '+'}</span></h3>
                    {faqOpen[1] && <p className="faq-ghoul">Flutter offers fast development, beautiful UIs, and native performance, making it an ideal choice for cross-platform app development.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(2)}>Can Flutter apps run on both Android and iOS? <span className="faq-toggle">{faqOpen[2] ? '-' : '+'}</span></h3>
                    {faqOpen[2] && <p className="faq-ghoul">Yes, Flutter allows developers to create apps that run seamlessly on both Android and iOS platforms with a single codebase.</p>}
                </div>
                <div className="faq-spook">
                    <h3 className="faq-shriek" onClick={() => toggleFaq(3)}>How much does it cost to develop a Flutter app? <span className="faq-toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
                    {faqOpen[3] && <p className="faq-ghoul">The cost of developing a Flutter app depends on various factors such as complexity, features, and development hours. Contact us for a personalized quote.</p>}
                </div>
            </section>
        </div>
        </div>
    );
};

export default FlutterPage;
