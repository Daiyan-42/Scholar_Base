import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Finder from '../apis/Finder';

function EditorRegistration() {
  const [editorInfo, setEditorInfo] = useState({
    name: '',
    password: '',
    journal_name: '',
    email: '',
    researchInterests: '',
    aboutYourself: '',
  });

  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditorInfo({
      ...editorInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Finder.post('/register-editor', editorInfo);
      let msg = response.data.message;
      console.log(msg);
      setSuccess(msg);
      setEditorInfo({
      name: '',
      password: '',
      journal_name: '',
      email: '',
      researchInterests: '',
      aboutYourself: '',
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
        <h1 className="mb-4" style={{ fontFamily: "Liberation Mono, monospace", color: "#01428c", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>Editor Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={editorInfo.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" name="password" value={editorInfo.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="journal_name">Journal Name:</label>
            <input type="text" className="form-control" id="journal_name" name="journal_name" value={editorInfo.journal_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={editorInfo.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="researchInterests">Research Interests:</label>
            <textarea className="form-control" id="researchInterests" name="researchInterests" value={editorInfo.researchInterests} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="aboutYourself">About Yourself:</label>
            <textarea className="form-control" id="aboutYourself" name="aboutYourself" value={editorInfo.aboutYourself} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Register</button>
        </form>
      </div>
    </div>
  );
}

export default EditorRegistration;
