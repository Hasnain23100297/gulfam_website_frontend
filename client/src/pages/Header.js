import React from 'react';
import './Header.css';
import companyLogo from '.././images/a.png';

const Header = () => 
{

    const handleWriter = async () => {
        // Redirect to the user's dashboard
          window.location.href = `/writer`;
      };
      const handleClient = async () => {
        // Redirect to the user's dashboard
          window.location.href = `/cli`;
      };

  
    return (
      <div className="App">
        <header className="App-header">
        <div className="header-content">
          
          <h1>Welcome to Sage Scholastic</h1>
          <p>Empowering Writers, Enriching Content.</p>
          <nav className="header-nav">
          <a onClick={() => handleWriter()}>
              I am a Writer
            </a>
            <a  onClick={() => handleClient()}>
              I want a Writing Service
            </a>
            {/* <a href="#section3">Section 3</a>
            <a href="#section4">Section 4</a> */}
          </nav>
        </div>
          <img src={companyLogo} alt = "Company Logo" className="logo" />
          
        </header>
  
        </div>  );
  }
  
  export default Header;
  