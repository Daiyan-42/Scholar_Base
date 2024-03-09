import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Finder from '../apis/Finder';

function ReviewerRegistration() {
  const [reviewerInfo, setReviewerInfo] = useState({
    email: '',
    name: '',
    password: '',
    institution: '',
    aboutYourself: '',
    researchInterests: '',
  });

  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewerInfo({
      ...reviewerInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await Finder.post('/register-reviewer', reviewerInfo);
      let msg = response.data.message;
      console.log(msg);
      setSuccess(msg);
      setReviewerInfo({
        email: '',
        name: '',
        password: '',
        institution: '',
        aboutYourself: '',
        researchInterests: '',
      });
      
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <header style={{ marginBottom: '20px' }}>
        <Link to="/">
          <img src="https://patch.com/img/cdn/users/22848633/2015/10/raw/2015105617e0d11c033.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        </Link>
        <p className="mb-0" style={{ fontFamily: "Liberation Mono, monospace", color: "#01428c", fontSize: "24px", fontWeight: "bold", marginLeft: "8px" }}> ScholarBase</p>
      </header>
      <div style={{ width: '500px', marginTop: '20px', marginBottom: '40px' }}>
      <h1 className="mb-4" style={{ fontFamily: "Liberation Mono, monospace", color: "#01428c", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Reviewer Registration</h1>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={reviewerInfo.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" className="form-control" id="email" name="email" value={reviewerInfo.email} onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" name="password" value={reviewerInfo.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="institution">Institution:</label>
            <input type="text" className="form-control" id="institution" name="institution" value={reviewerInfo.institution} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="researchInterests">Research Interests:</label>
            <textarea className="form-control" id="researchInterests" name="researchInterests" value={reviewerInfo.researchInterests} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="aboutYourself">About Yourself:</label>
            <textarea className="form-control" id="aboutYourself" name="aboutYourself" value={reviewerInfo.aboutYourself} onChange={handleChange}></textarea>
          </div>
        </form>
        <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Register</button>
        <h4>{success}</h4>
      </div>
    </div>
  );
}

export default ReviewerRegistration;
