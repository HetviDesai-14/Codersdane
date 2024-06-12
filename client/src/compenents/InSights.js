import React, { useState } from 'react';
import './InSights.css';
import p from './images/thought-catalog-505eectW54k-unsplash.jpg';


import web from './images/web.jpeg';
import health from './images/health.jpeg';
import app from './images/app.jpg';
import des from './images/des.jpeg';
import AI from './images/AI.jpeg';
import res from './images/res.jpeg';
import ui from './images/ui.jpeg';
import O from './images/O.jpeg';
import op from './images/op.png';
import de from './images/dee.jpeg';

const blogPosts = [
  { id: 1, title: 'Web Development Trends 2024', description: 'Latest trends in web development.', link: 'https://www.crossover.com/blog/11-best-web-development-trends-for-2024', image: web, tags: ['web', 'development'] },
  { id: 2, title: 'AI in Healthcare', description: 'How AI is transforming healthcare.', link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6616181/', image: health, tags: ['ai', 'healthcare'] },
  { id: 3, title: 'App Development Best Practices', description: 'Tips and tricks for app development.', link: 'https://developer.android.com/', image: app, tags: ['app', 'development'] },
  { id: 4, title: 'Future of Web Design', description: 'Whats next in web design.', link: 'https://www.skillvertex.com/blog/what-is-the-future-of-web-development-in-india/#:~:text=Web%20designers%20in%20the%20future,making%20the%20internet%20even%20better!', image: des, tags: ['web', 'design'] },
  { id: 5, title: 'AI and Machine Learning', description: 'The rise of AI and ML.', link: 'https://ai.engineering.columbia.edu/ai-vs-machine-learning/', image: AI, tags: ['ai', 'machine learning'] },
  { id: 6, title: 'Building Responsive Web Apps', description: 'Guide to responsive web apps.', link: 'https://en.wikipedia.org/wiki/Responsive_web_design', image: res, tags: ['web', 'app'] },
  { id: 7, title: 'Mobile App UX/UI', description: 'Enhancing user experience in mobile apps.', link: 'https://www.google.com/aclk?sa=l&ai=DChcSEwjwpci86J6GAxXiC3sHHbm-A34YABAAGgJ0bQ&ase=2&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz1-1u2hFWPgVuObszl4vyhRcRGkDO-IPMd7BbJ1BuEB92X6Oo4uIWIkaAhCAEALw_wcB&sig=AOD64_1-MBiuK3zHX1jqZ83BHJO34jLd4g&q&nis=4&adurl&ved=2ahUKEwi50L-86J6GAxXWfvUHHcOwCx4Q0Qx6BAgOEAE', image: ui , tags: ['app', 'ux/ui'] },
  { id: 8, title: 'AI for Beginners', description: 'Introduction to AI.', link: 'https://www.uc.edu/content/dam/uc/ce/docs/OLLI/Page%20Content/ARTIFICIAL%20INTELLIGENCEr.pdf', image: O, tags: ['ai'] },
  { id: 9, title: 'Web Performance Optimization', description: 'Improving web performance.', link: 'https://developer.mozilla.org/en-US/docs/Web/Performance', image: op, tags: ['web', 'performance'] },
  { id: 10, title: 'Advanced App Development', description: 'Advanced techniques in app development.', link: 'https://www.udemy.com/topic/android-development/expert/', image: de, tags: ['app', 'development'] }
];

const InSights = () => {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (tag) => {
    const filtered = blogPosts.filter(post => post.tags.includes(tag));
    setFilteredPosts(filtered);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = blogPosts.filter(post => post.title.toLowerCase().includes(searchValue) || post.description.toLowerCase().includes(searchValue));
    setFilteredPosts(filtered);
  };

  return (
    <div className="insights-container">

      <div className="header-image-container">
      
        <img src={p} alt="Header" className="header-image" />
        <h1 className='hii'>InSights/Blogs</h1>
      </div>
      <h1 className="insights-title"></h1>
      <div className="buttoncontainer">
        <button onClick={() => setFilteredPosts(blogPosts)}>All</button>
        <button onClick={() => handleFilter('web')}>Web</button>
        <button onClick={() => handleFilter('ai')}>AI</button>
        <button onClick={() => handleFilter('app')}>App</button>
      </div>
      <div className="search-container">
 
        <input 
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid-container">
        {filteredPosts.map(post => (
          <div className="card" key={post.id}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img src={post.image} alt={post.title} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-description">{post.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={imagee} alt="Coderdane Logo" className='loo' />
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Service</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/hire-us">Hire Us</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy">Privacy</Link></li>
                            <li><Link to="/salesforce">Salesforce</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Salesforce</h3>
                        <ul>
                            <li><Link to="/salesforce/sublist1">Sublist 1</Link></li>
                            <li><Link to="/salesforce/sublist2">Sublist 2</Link></li>
                            <li><Link to="/salesforce/sublist3">Sublist 3</Link></li>
                            <li><Link to="/salesforce/sublist4">Sublist 4</Link></li>
                            <li><Link to="/salesforce/sublist5">Sublist 5</Link></li>
                            <li><Link to="/salesforce/sublist6">Sublist 6</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>AWS</h3>
                        <ul>
                            <li><Link to="/aws/sublist1">Sublist 1</Link></li>
                            <li><Link to="/aws/sublist2">Sublist 2</Link></li>
                            <li><Link to="/aws/sublist3">Sublist 3</Link></li>
                            <li><Link to="/aws/sublist4">Sublist 4</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Mobile App</h3>
                        <ul>
                            <li><Link to="/mobile-app/sublist1">Sublist 1</Link></li>
                            <li><Link to="/mobile-app/sublist2">Sublist 2</Link></li>
                            <li><Link to="/mobile-app/sublist3">Sublist 3</Link></li>
                            <li><Link to="/mobile-app/sublist4">Sublist 4</Link></li>
                            <li><Link to="/mobile-app/sublist5">Sublist 5</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Web App</h3>
                        <ul>
                            <li><Link to="/web-app/sublist1">Sublist 1</Link></li>
                            <li><Link to="/web-app/sublist2">Sublist 2</Link></li>
                            <li><Link to="/web-app/sublist3">Sublist 3</Link></li>
                            <li><Link to="/web-app/sublist4">Sublist 4</Link></li>
                            <li><Link to="/web-app/sublist5">Sublist 5</Link></li>
                            <li><Link to="/web-app/sublist6">Sublist 6</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='Q'><p>@ ALL RIGHTS ARE RESERVERD</p></div>
            </div>
        </footer> */}
    </div>
  );
};

export default InSights;
