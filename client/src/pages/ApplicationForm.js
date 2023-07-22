import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [cvFile, setCVFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission here (e.g., API call or data processing)
    // Once the form is successfully submitted, you can close the modal.
    alert('Form submitted successfully!');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="application-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>CV (Choose file):</label>
            <input type="file" onChange={(e) => setCVFile(e.target.files[0])} required />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
