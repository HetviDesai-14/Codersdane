import React from "react";
import { Link } from "react-router-dom";
import "./More.css";
import one from './images/FIRST.png';
import two from './images/SEC.png';
import three from './images/THIRD.png';
import four from './images/fourth.png';
import five from './images/FIVE.png';
import six from './images/six.png';
import { useState } from "react";


const More = () => {

  const [faqOpen, setFaqOpen] = useState([false, false, false, false]);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => {
      const newFaqOpen = [...prev];
      newFaqOpen[index] = !newFaqOpen[index];
      return newFaqOpen;
    });
  };

  return (
    <div>
      <section className="header-more">
        <h1 className="main">Career & Culture</h1>
        <p className="main-main">
          Do you thrive on doing creative, innovative & challenging work and
          <br />
          collaborating with great teammates and clients?
          <br />
          Codersdane is the right place to nurture your professional career.
        </p>
        <button className="talk">
          <Link to="/contact">LET'S TALK</Link>
        </button>
      </section>

     
      <section className="grid-section">
      <h1>Join the Codersdane team</h1>
        <div className="grid-container">
          <div className="grid-item">
            <div className="photo-section">
              <div className="image-scroll">
                <img src={one} alt="Image 1" />
                <img src={two} alt="Image 2" />
                <img src= {three} alt="Image 3" />
              </div>
            </div>
            <h1 className="life">Life at Codersdane</h1>
            <p className="description">We have a culture that motivates employees to be innovative and creative.
<br></br>
<br></br>
We value our employee's knowledge, dedication and creative thinking. if you have these, TriState will be the right place to realize your dreams.<br></br>
<br></br>
We are team-driven company and believe in the inclusive growth of each individual.<br></br><br></br>

TriState is a place where we encourage our employees to leverage their potentials.</p>
          </div>
          <div className="grid-item">
            <div className="photo-section">
              <div className="image-scroll">
                <img src= {four}alt="Image 4" />
                <img src= {five}alt="Image 5" />
                <img src= {six} alt="Image 6" />
              </div>
            </div>
            <h1 className="life">Why to join Codersdane</h1>
            <p className="description"><ul><li>Best working environment.</li>
<li>Opportunity to work on challenging and innovative projects.</li>
<li>Timely training to enhance skills and get updated on latest technology.</li>
<li>Career growth guidance and opportunities.</li>
<li>Monthly birthday celebration.</li>
<li>Monthly quiz & fun activities.</li>
<li>Festival celebrations.</li></ul></p>
          </div>
        </div>
      </section>

      <section className='faq'>
        <h1 className="phantom">Current Openings</h1>
        <div className="spook">
          <h3 className="shriek" onClick={() => toggleFaq(0)}>Flutter Developer <span className="toggle">{faqOpen[0] ? '-' : '+'}</span></h3>
          {faqOpen[0] && <p className="ghoul">No. of Position: 01<br></br>
Experience Required: 2-4 Years<br></br>
Description:<br></br>

<ul>
  <li>Create multi-platform apps for iOS/Android using Flutter development framework.</li>
  <li>Flutter SDK & Dart programming language</li>
  <li>Experience with mobile platforms like Android/iOS</li>
  <li>Flutter widgets for iOS & Android</li>
  <li>Participation in the process of analysis, designing, implementation and testing of new apps</li>
  <li>Developing mobile applications in Flutter</li>
  <li>Apply industry standards during the development process to ensure high quality</li>


</ul>

Skills Required:<br></br>
<ul>
  <li>UI : Material design, Material animations, Custom components, User Interaction(touches, gestures)</li>
  <li>Core : Dart, Multithreading, FlutterPub, Rx Dart, Job Queue,</li>
  <li>Communication & Networking : HTTP, REST, Dio, Cached Network Image, Firebase, Socket, JSON, XML, SMS, Bluetooth, NFC</li>
  <li>Build: Pubspec, Gradle, info.plist</li>
  <li>Testing: Espresso</li>
  <li>Hardware and Media: GPS, Playing Audio/Video, Accelerometer, Camera</li>
  <li>Persisting Data: SharedPreferences, Files, SQflite, Backup and Sharing data</li>
  <li>Interacting with System: Notifications, Alarm Manager, Timed and Periodic Tasks, Persistent Background Operations, Contacts, Calendar</li>
  <li>Graphics: Canvas</li>
</ul>
Salary: No bar for the right candidate.<br></br>
Location: Ahmedabad, Gujarat<br></br>
Share your CV at: career@Codersdane.com
<button className="apply-button">
      <a href="mailto:career@Codersdane.com">Apply Now</a>
    </button>
</p>}


        </div>
        <div className="spook">
          <h3 className="shriek" onClick={() => toggleFaq(1)}>MERN Developer<span className="toggle">{faqOpen[1] ? '-' : '+'}</span></h3>
          {faqOpen[1] && <p className="ghoul">
  No. of Position: 01<br />
  Experience Required: 2-4 Years<br />
  Description:<br />
  <ul>
    <li>Develop and maintain web applications using the MERN (MongoDB, Express.js, React, Node.js) stack.</li>
    <li>Build interactive, responsive, and user-friendly front-end applications using React.js.</li>
    <li>Design and implement RESTful APIs using Node.js and Express.js.</li>
    <li>Work with MongoDB for database design, implementation, and data management.</li>
    <li>Collaborate with designers, product managers, and other developers to create high-quality products.</li>
    <li>Participate in the full software development lifecycle: analysis, design, development, testing, and deployment.</li>
    <li>Ensure code quality and maintainability through unit tests and code reviews.</li>
    <li>Apply industry best practices to develop high-quality, scalable, and efficient software solutions.</li>
  </ul>

  Skills Required:<br />
  <ul>
    <li>Front-end: React.js, Redux or Context API, HTML5, CSS3, JavaScript ES6+</li>
    <li>Back-end: Node.js, Express.js, RESTful APIs</li>
    <li>Database: MongoDB, Mongoose</li>
    <li>Build Tools: Webpack, Babel, NPM/Yarn</li>
    <li>Version Control: Git, GitHub</li>
    <li>Testing: Jest, Mocha, Chai</li>
    <li>Deployment: Docker, AWS, Heroku</li>
    <li>Understanding of UI/UX principles</li>
    <li>Strong problem-solving skills and attention to detail</li>
    <li>Excellent communication and teamwork abilities</li>
  </ul>
  Salary: No bar for the right candidate.<br />
  Location: Ahmedabad, Gujarat<br />
  Share your CV at: career@Codersdane.com
  <button className="apply-button">
      <a href="mailto:career@Codersdane.com">Apply Now</a>
    </button>
</p>}

        </div>
        <div className="spook">
          <h3 className="shriek" onClick={() => toggleFaq(2)}>React Native Developer<span className="toggle">{faqOpen[2] ? '-' : '+'}</span></h3>
          {faqOpen[2] && <p className="ghoul">
  No. of Position: 01<br />
  Experience Required: 2-4 Years<br />
  Description:<br />
  <ul>
    <li>Create multi-platform apps for iOS/Android using React Native framework.</li>
    <li>Develop high-quality, scalable, and maintainable code using JavaScript and React Native.</li>
    <li>Experience with mobile platforms like Android/iOS.</li>
    <li>Utilize React Native components, APIs, and tools to create robust mobile applications.</li>
    <li>Participate in the process of analysis, designing, implementation, and testing of new apps.</li>
    <li>Collaborate with designers, product managers, and other developers to deliver high-quality products.</li>
    <li>Apply industry standards during the development process to ensure high quality.</li>
  </ul>

  Skills Required:<br />
  <ul>
    <li>Proficiency in JavaScript and understanding of ES6+ syntax and features.</li>
    <li>Experience with React Native and its core principles.</li>
    <li>Familiarity with mobile development life cycle and performance tuning techniques.</li>
    <li>Knowledge of native build tools, like XCode, Gradle (Android Studio, IntelliJ).</li>
    <li>Understanding of REST APIs, the document request model, and offline storage.</li>
    <li>Experience with state management libraries such as Redux or Context API.</li>
    <li>Familiarity with push notifications, APIs, and cloud messaging.</li>
    <li>Experience with automated testing suites, like Jest or Mocha.</li>
    <li>Strong problem-solving skills and attention to detail.</li>
    <li>Excellent communication and teamwork abilities.</li>
  </ul>
  Salary: No bar for the right candidate.<br />
  Location: Ahmedabad, Gujarat<br />
  Share your CV at: career@Codersdane.com

  <button className="apply-button">
      <a href="mailto:career@Codersdane.com">Apply Now</a>
    </button>
</p>
}
</div>
        <div className="spook">
          <h3 className="shriek" onClick={() => toggleFaq(3)}>ReactJs Developer<span className="toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
          {faqOpen[3] && <p className="ghoul">
  No. of Position: 01<br />
  Experience Required: 2-4 Years<br />
  Description:<br />
  <ul>
    <li>Develop and maintain web applications using React.js.</li>
    <li>Build interactive, responsive, and user-friendly front-end applications.</li>
    <li>Implement user interfaces with high-quality code using React.js and JavaScript (ES6+).</li>
    <li>Collaborate with designers, product managers, and other developers to create high-quality products.</li>
    <li>Participate in the full software development lifecycle: analysis, design, development, testing, and deployment.</li>
    <li>Ensure code quality and maintainability through unit tests and code reviews.</li>
    <li>Apply industry best practices to develop high-quality, scalable, and efficient software solutions.</li>
  </ul>

  Skills Required:<br />
  <ul>
    <li>Proficiency in JavaScript and understanding of ES6+ syntax and features.</li>
    <li>Experience with React.js and state management libraries such as Redux or Context API.</li>
    <li>Knowledge of front-end technologies such as HTML5, CSS3, and JavaScript frameworks/libraries.</li>
    <li>Experience with RESTful APIs and JSON.</li>
    <li>Familiarity with build tools like Webpack, Babel, NPM/Yarn.</li>
    <li>Experience with version control systems, particularly Git.</li>
    <li>Understanding of UI/UX principles and responsive design.</li>
    <li>Experience with automated testing tools and frameworks, like Jest or Mocha.</li>
    <li>Strong problem-solving skills and attention to detail.</li>
    <li>Excellent communication and teamwork abilities.</li>
  </ul>
  Salary: No bar for the right candidate.<br />
  Location: Ahmedabad, Gujarat<br />
  Share your CV at: career@Codersdane.com

  <button className="apply-button">
      <a href="mailto:career@Codersdane.com">Apply Now</a>
    </button>
</p>
}
        </div>

        <div className="spook">
          <h3 className="shriek" onClick={() => toggleFaq(3)}>NodeJs Developer<span className="toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
          {faqOpen[4] && <p className="ghoul">
  No. of Positions: 01<br />
  Experience Required: 2-4 Years<br />
  Description:<br />
  <ul>
    <li>Develop and maintain server-side applications using Node.js.</li>
    <li>Build scalable, high-performance, and reliable APIs for web and mobile applications.</li>
    <li>Design and implement RESTful APIs to support front-end development.</li>
    <li>Collaborate with front-end developers, designers, and other team members to deliver quality software.</li>
    <li>Participate in the full software development lifecycle: requirements analysis, design, coding, testing, and deployment.</li>
    <li>Ensure code quality and maintainability through unit tests, code reviews, and documentation.</li>
    <li>Optimize application performance and scalability through performance tuning and monitoring.</li>
  </ul>

  Skills Required:<br />
  <ul>
    <li>Proficiency in JavaScript and understanding of asynchronous programming.</li>
    <li>Experience with Node.js frameworks such as Express.js.</li>
    <li>Knowledge of databases like MongoDB, MySQL, or PostgreSQL.</li>
    <li>Understanding of RESTful API design and implementation.</li>
    <li>Experience with version control systems, particularly Git.</li>
    <li>Familiarity with front-end technologies like HTML5, CSS3, and JavaScript.</li>
    <li>Strong problem-solving skills and attention to detail.</li>
    <li>Good communication and teamwork abilities.</li>
  </ul>
  Salary: Competitive salary based on experience.<br />
  Location: Ahmedabad, Gujarat<br />
  Share your CV at: career@Codersdane.com

  <button className="apply-button">
      <a href="mailto:career@Codersdane.com">Apply Now</a>
    </button>
</p>
}
        </div>

        <div className="spook">
          <h3 className="shriek" onClick={() => toggleFaq(3)}>MEAN Developer<span className="toggle">{faqOpen[3] ? '-' : '+'}</span></h3>
          {faqOpen[5] && <p className="ghoul">
  No. of Positions: 01<br />
  Experience Required: 2-4 Years<br />
  Description:<br />
  <ul>
    <li>Develop and maintain full-stack web applications using the MEAN (MongoDB, Express.js, Angular, Node.js) stack.</li>
    <li>Design and implement RESTful APIs to support front-end and mobile applications.</li>
    <li>Build interactive, responsive, and user-friendly front-end interfaces using Angular.</li>
    <li>Create and manage databases using MongoDB, including database design, querying, and optimization.</li>
    <li>Collaborate with designers, product managers, and other developers to deliver high-quality products.</li>
    <li>Participate in the full software development lifecycle: requirements analysis, design, coding, testing, and deployment.</li>
    <li>Ensure code quality and maintainability through unit tests, code reviews, and documentation.</li>
  </ul>

  Skills Required:<br />
  <ul>
    <li>Proficiency in JavaScript and understanding of asynchronous programming.</li>
    <li>Experience with Node.js and Express.js for building scalable server-side applications.</li>
    <li>Strong knowledge of Angular and its core principles.</li>
    <li>Familiarity with MongoDB, including database design and querying.</li>
    <li>Understanding of RESTful API design and implementation.</li>
    <li>Experience with version control systems, particularly Git.</li>
    <li>Knowledge of front-end technologies like HTML5, CSS3, and JavaScript.</li>
    <li>Strong problem-solving skills and attention to detail.</li>
    <li>Good communication and teamwork abilities.</li>
  </ul>
  Salary: Competitive salary based on experience.<br />
  Location: Ahmedabad, Gujarat<br />
  Share your CV at: career@Codersdane.com

  <button className="apply-button">
      <a href="mailto:career@Codersdane.com">Apply Now</a>
    </button>
</p>
}
        </div>
      </section>
    </div>
  );
};

export default More;
