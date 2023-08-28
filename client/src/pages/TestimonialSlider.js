import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialsSlider = ({ testimonials }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Switch to the next testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="testimonials-slider">
      <div className="testimonial">
        <div className="profile-picture">
          <img
            src={testimonials[currentTestimonialIndex].profilePicture}
            alt={testimonials[currentTestimonialIndex].author}
          />
        </div>
        <div className="testimonial-text">
          <p>{testimonials[currentTestimonialIndex].comment}</p>
          <p className="author">{testimonials[currentTestimonialIndex].author}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
