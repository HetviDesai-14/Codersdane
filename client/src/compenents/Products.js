import React from 'react';
import pro1 from './images/pro1.png';
import pro2 from './images/pro2.png';
import pro3 from './images/pro3.png';
import pro4 from './images/pro4.png';
import './Products.css';

const Product = () => {
  return (
    
    <div className="photosection">
      <div className="imagescroll">
      <div className='head'>
       <h1>Featured Projects</h1>
       <div className='line'></div>
    </div>
        <img src={pro1} alt="Image 1" />
        <img src={pro2} alt="Image 2" />
        <img src={pro3} alt="Image 3" />
        <img src={pro4} alt="Image 4" />
        <img src={pro1} alt="Image 1" />
        <img src={pro2} alt="Image 2" />
        <img src={pro3} alt="Image 3" />
        <img src={pro4} alt="Image 4" />
      </div>
    </div>
  );
}

export default Product;



// import React from 'react';
// import './Products.css';
// import imagew from './images/people.jpg';
// import imagey from './images/people2.jpeg';
// import imagex from './images/people3.jpeg';
// import imager from './images/people4.jpeg';

// const Product = () => {
//   const products = [
//     {
//       title: 'Banking Portal',
//       description: 'A portal for enhanced customer experience in banking.',
//       about: 'A comprehensive banking portal designed to enhance customer experience and streamline financial transactions.',
//       link: '/wells-fargo',
//       imageUrl: imagew,
//     },
//     {
//       title: 'Mobile App',
//       description: 'A modern mobile application for banking services.',
//       about: 'A modern mobile banking application built to provide users with convenient access to banking services on the go.thank ',
//       link: '/bank-of-america',
//       imageUrl: imager,
//     },
//     {
//       title: 'Online Platform',
//       description: 'An advanced platform for online banking.',
//       about: 'An advanced online banking platform designed to meet the evolving needs of digital banking customers.ok',
//       link: '/chase-bank',
//       imageUrl: imagex,
//     },
//     {
//       title: 'International Service',
//       description: 'An international service for diverse financial solutions.',
//       about: 'An international banking service offering diverse financial solutions tailored to global customers.',
//       link: '/citibank',
//       imageUrl: imagey,
//     },
//   ];

//   return (
//     <div id="products" className="product-grid">
//       <div className='head'>
//         <h1>Featured Projects</h1>
//         <div className='line'></div>
//       </div>
//       {products.map((product, index) => (
//         <div key={index} className="product-card">
//           <img src={product.imageUrl} alt={product.title} className="product-image" />
//           <div className="product-info">
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <h3>About Project</h3>
//             <p>{product.about}</p>
//             <a href={product.link} className="product-button">
//               <span>Go to {product.title}</span>
//               <span className="arrow">→</span>
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;
