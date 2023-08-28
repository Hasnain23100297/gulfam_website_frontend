import React, { useState } from 'react';
import './ApplicationForm.css';
import axios from 'axios';

const ApplicationForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [cvFile, setCVFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCVFile(file);

    // Read PDF file content using FileReader
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      // You can process or display the file content if needed
      console.log(fileContent);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('contact', contact);
    formData.append('cvFile', cvFile);

    try {
      await axios.post('http://localhost:5000/submit-application', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Form submitted successfully!');
      onClose();
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error scenario
    }
  };

  return (
    <div className="modal-overlay">
      <div className="application-form">
        <h2>Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>CV (Choose file):</label>
            <input
              type="file"
              onChange={(e) => setCVFile(e.target.files[0])}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  //   <div className="modal-overlay">
  //     <div className="application-form">
  //       <h2>Apply Now</h2>
  //       <form onSubmit={handleSubmit}>
  //         {/* ... (existing form fields) */}
  //         <div className="form-group">
  //           <label>CV (Choose file):</label>
  //           <input
  //             type="file"
  //             onChange={handleFileChange}
  //             required
  //           />
  //         </div>
  //         <div className="form-actions">
  //           <button type="submit">Submit</button>
  //           <button type="button" onClick={onClose}>
  //             Cancel
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default ApplicationForm;