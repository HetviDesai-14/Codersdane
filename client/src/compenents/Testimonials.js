import React, { useState } from 'react';
import './Testimonials.css';
import headerImage from './images/annie-spratt-dWYU3i-mqEo-unsplash.jpg';
import video1 from './images/istockphoto-1207303509-640_adpp_is.mp4';
import video2 from './images/istockphoto-1277611249-640_adpp_is.mp4';
import video3 from './images/istockphoto-1419109452-640_adpp_is.mp4';
import video4 from './images/istockphoto-922770050-640_adpp_is.mp4';
import john from './images/john.png';
import jane from './images/jane.png';
import alice from './images/alice.png';
import mich from './images/mich.png';
import profile1 from './images/profile1.png';
import profile2 from './images/profile2.png'
import profile3 from './images/profile3.png'
import profile4 from './images/profile4.png'




// ReviewCard Component
const ReviewCard = ({ rating, reviewText, author, role }) => {
  return (
    <div className="review-card">
      <div className="review-rating">{rating}</div>
      <div className="review-text">{reviewText}</div>
      <div className="review-author">{author}, {role}</div>
      <div className="verified-review">Verified Review</div>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      image: john,
      video: video1,
    },
    {
      name: "Jane Smith",
      image: jane,
      video: video2,
    },
    {
      name: "Alice Johnson",
      image: alice,
      video: video4,
    },
    {
      name: "Michael Brown",
      image: mich,
      video:video3,
    },
    // {
    //   name: "Emily Davis",
    //   image: "path/to/emily.jpg",
    //   video: "path/to/emily-video.mp4",
    // }
  ];

  const test = [
    {
      name: "Alyssa Franks",
      title: "CO-FOUNDER OF MFA APP",
      image: profile1,  // Replace with actual path to image
      text: "I am so glad, and so grateful that we partnered with TriState Technology. TriState has been with us from the beginning, looking at our very basic sketches and bringing all of that into a reality. The things I’ve loved best about working with TriState is that the communication has been consistent, reliable and fast."
    },
    {
      name: "Joshua Stern",
      title: "CEO & CO-FOUNDER OF WINENDINE",
      image: profile2,   // Replace with actual path to image
      text: "I’ve been working with Tristate now for almost two years. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. They’ve been fantastic. Their developers are strong. Project management is great, they’re reliable. If anything comes up, it gets taken care of right away and I can’t recommend them enough."
    },
    {
      name: "Sisi Chen",
      title: "CEO & CO-FOUNDER",
      image: profile3,  // Replace with actual path to image
      text: "I am Sisi from Netherland and we are very happy that we found TriState Technology LLP. They have developed our Android App, Flurry which is now online in Google Play Store. Our contact person Jay was professional, very flexible, he was also very easy to work. The development team did a very good job by completing the app, applying our questions, finding solutions that we have faced with the previous team. Even though there was the time difference, the communication was flexible."
    },
    {
      name: "Silvio Leoni",
      title: "CO-FOUNDER",
      image: profile4,   // Replace with actual path to image
      text: "We enjoyed working with TriState, they are very professional, It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. It’s been a pleasure. respond fast and are flexible to additional queries. We will continue to work together in future projects. Thank you for the good work!"
    }
  ];

  const reviews = [
    {
      rating: '4.5 ★★★★☆',
      reviewText: "They're always responsive when the pressure is on.",
      author: 'Real Estate Investment Firm',
      role: 'Founder & CEO'
    },
    {
      rating: '4.5 ★★★★☆',
      reviewText: 'TriState Technology LLP has consistently assigned dedicated, knowledgeable resources to my project.',
      author: 'Trophy Cloud LLC',
      role: 'Manager'
    },
    {
      rating: '5.0 ★★★★★',
      reviewText: 'They developed the site quickly once we gave sign-off.',
      author: 'Global Research Company',
      role: 'Marketing Manager'
    },
    {
      rating: '5.0 ★★★★★',
      reviewText: 'They were remarkable.',
      author: 'Social Networking App',
      role: 'Founder'
    },
    {
      rating: '4.5 ★★★★☆',
      reviewText: 'Communication was rapid and we enjoyed the daily catchup on the messaging tool we used.',
      author: 'Dudustream Ltd',
      role: 'CEO'
    },
    {
      rating: '5.0 ★★★★★',
      reviewText: 'Their team helps us understand the process step-by-step.',
      author: 'Auditorium',
      role: 'President'
    },
    {
        rating: '4.5 ★★★★☆',
        reviewText: 'Communication was rapid and we enjoyed the daily catchup on the messaging tool we used.',
        author: 'Dudustream Ltd',
        role: 'CEO'
      },
      {
        rating: '5.0 ★★★★★',
        reviewText: 'Their team helps us understand the process step-by-step.',
        author: 'Auditorium',
        role: 'President'
      }
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="ok">
        <img src={headerImage} alt="Descriptive Alt Text" className="s" />
      </div>
      <div className="i">
        <div className="heading-animation">
          <h1>Testimonials</h1>
        </div>
        <div className="para-animation">
          <div className="vertical-line"></div>
          <p>
          Welcome to our Testimonials page, where our clients share their experiences <br></br>and successes with our products and services.<br></br> We believe that the best way to understand the value we provide is through the words <br></br>of those who have experienced it firsthand.<br></br>

At CODERSDANE, we are committed to delivering exceptional quality and service,<br></br> and nothing makes us prouder than hearing from satisfied customers. 
          </p>
        </div>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="content">
                <div className="profile">
                  <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
                  <h3 className="name">{testimonial.name}</h3>
                </div>
                <video className="video" controls>
                  <source src={testimonial.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="container">
        {test.map((testimonial, index) => (
          <div className="t" key={index}>
            <div className="profile">
              <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
              <div>
                <h3 className="name">{testimonial.name}</h3>
                <p className="title">{testimonial.title}</p>
              </div>
            </div>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </div>

      <div className="appp">
        <h1>CODERSDANE Reviews <span>4.9 ★★★★★</span> 31+ REVIEWS</h1>
        <div className="reviewscontainer">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
