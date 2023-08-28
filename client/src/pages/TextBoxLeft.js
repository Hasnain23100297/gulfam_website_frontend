import React from 'react';
import './TextBoxLeft.css';
import Header from './Header'; // Make sure to import your Header component if needed
import companyLogo from '.././images/Logo_orignal.png';

const TextBoxLeft = () => {
  return (
    <div className="App">
      
      
      <div className="page-content">
        <div className="content-container">
          <div className="text-box-left">
            <h3>For Aspiring Writers:</h3>
            <p>
              Are you a wordsmith with a flair for storytelling and a love for language? Do you dream of creating captivating articles, engaging blog posts, and thought-provoking pieces? At Sage Scholastic, we are always on the lookout for talented individuals like you to join our team.
            </p>
            <p>
            As a part of our writing team, you'll have the chance to:
            </p>
            <h4>Explore Your Creativity:</h4>
            <p>
              We believe in nurturing creativity. As a writer with Sage Scholastic, you'll have the freedom to explore various topics and genres, honing your skills and expanding your horizons.
            </p>
            <h4>Flexible Work Arrangements:</h4>
            <p>
              We understand the importance of work-life balance. Our company offers flexible work arrangements, allowing you to choose the hours that suit you best.
            </p>
            <h4>Continuous Growth:</h4>
            <p>
              Learning never stops at Sage Scholastic. We provide opportunities for skill development, workshops, and mentorship programs to help you grow both personally and professionally.
            </p>
            <h4>Fair Compensation:</h4>
            <p>
              We value your talent and hard work. Our writers are compensated fairly for their contributions.
            </p>
            </div>
  
            <div className="text-box-right">
            
            <h3>Our writing services include:</h3>
  
            <h4>Custom Content Creation:</h4>
            <p>
              Our experienced writers will develop tailor-made content that reflects your unique voice and meets your specific requirements.
            </p>
      
            <h4>Timely Delivery:</h4>
            <p>
              Deadlines are crucial in the business world. With Sage Scholastic, you can rest assured that your projects will be delivered on time, every time.
            </p>
      
            <h4>Quality Assurance:</h4>
            <p>
              We have a rigorous quality assurance process to ensure that our content is accurate, well-researched, and free from errors.
            </p>
      
            <p>
              Join the Sage Scholastic community, where writers thrive and businesses succeed. Whether you're looking to embark on an exciting writing journey or require top-quality content for your enterprise, we are here to make it happen. Reach out to us today to explore the possibilities!
            </p>
            {/* ... other content */}

         
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TextBoxLeft;
