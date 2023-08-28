import React from 'react';
import './Dashboard.css';
import Header from './Header';
import TextBoxLeft from './TextBoxLeft';
import TestimonialsSlider from './TestimonialSlider';
import companyLogo from '.././images/Ayilah.png';



const Dashboard = () => 
{
    const handleButtonClick = () => {
      // Replace 'https://example.com' with the desired URL
      window.open('https://www.freepik.com/photos/dog', '_blank');
    };
  
    const handleNavigationClick = (sectionId) => {
      // Replace this function with your desired action
      // In this example, we'll navigate to the corresponding section
      // window.open('https://forms.gle/jfcX7CU5FhYJWrkk8', '_blank');
      window.location.href = `#${sectionId}`;
    };

    const testimonials = [
      {
        author: 'Ayilah',
        comment: 'I love working with Sage Scholastic. Their dedication to quality and creativity is unparalleled.',
        profilePicture: companyLogo, // Replace with actual URL
      },
      {
        author: 'Jane Smith',
        comment: 'Joining the Sage Scholastic writing team has been a turning point in my writing career. The opportunities for growth are endless.',
        profilePicture: 'url_to_janes_picture.jpg', // Replace with actual URL
      },
      // Add more testimonial objects with profile pictures
    ];
  
    return (
      <div className = 'App'>
        <Header/>

        <TextBoxLeft/>
        <TestimonialsSlider testimonials={testimonials} />

       

      </div>
        



    );
  }
  
  export default Dashboard;
  