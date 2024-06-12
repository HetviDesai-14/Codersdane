import React from "react";
import { Link } from "react-router-dom";
import './Dash.css';
import Button from './Button';

const Dash = () => {
  return (
    <div className="dashboard">
      <ul className="list">
        <li className="logo">CODERSDANE</li>
        <li id="home">
          <Link to="/">Home</Link>
        </li>
        <li id="services">
          <Link to="/ser">Services</Link>
        </li>
        <li id="hire-us">
          <Link to="/hireus">Hire Us</Link>
        </li>
        <li id="insights">
          <Link to="/insights">InSights</Link>
        </li>
        <li id="resources">
          <Link to="/test">Testimonials</Link>
        </li>
        <li className="dropdown-container" id="join-us">
          <Link to="/join">Join Us</Link>
          <ul className="dropdown">
            <li><Link to="/join">Schedule Interview</Link></li>
            <li><Link to="/vacancy">More </Link></li>
          </ul>
        </li>
        <li id="contact">
          <Button><Link to="#contact">Contact</Link></Button>    
        </li>
      </ul>
    </div>
  );
};

export default Dash;



// // src/components/Dash.js
// import React from "react";
// import { Link } from "react-router-dom";
// import './Dash.css';
// import Button from './Button';

// const Dash = () => {
//   return (
//     <div className="dashboard">
//       <ul className="list">
//         <li className="logo">CODERSDANE</li>
//         <li id="home">
//           <Link to="/">Home</Link>
//         </li>
//         <li id="services">
//           <Link to="/ser">Services</Link>
//         </li>
//         {/* <li id="products">
//           <Link to="#products">Products</Link>
//         </li> */}
//         <li id="hire-us">
//           <Link to="/hireus">Hire Us</Link>
//         </li>
//         <li id="insights">
//           <Link to="/insights">InSights</Link>
//         </li>
//         <li id="resources">
//           <Link to="/test">Testimonials</Link>
//         </li>
//         <li id="Join Us">
//           <Link to="/join">Join Us</Link>
//         </li>
//         <li id="contact">
//       <Button><Link to="#contact">Contact</Link></Button>    
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Dash;
