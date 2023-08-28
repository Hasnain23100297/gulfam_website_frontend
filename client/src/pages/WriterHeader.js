import React, { useState } from 'react';
import './WriterHeader.css';
import companyLogo from '.././images/a.png';
import ApplicationForm from './ApplicationForm';

const WriterHeader = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNow = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Welcome to Sage Scholastic</h1>
          <p>Empowering Writers, Enriching Content.</p>
        </div>
        <img src={companyLogo} alt="Company Logo" className="logo" />
        {/* Additional button */}
        <button className="apply-now-button" onClick={handleApplyNow}>
          Apply Now
        </button>
      </header>
      {showForm && <ApplicationForm onClose={handleCloseForm} />}
    </div>
  );
}

export default WriterHeader;
