import React from 'react';
import CommonForAll from './CommonForAll';
import { Link } from 'react-router-dom';

function SearchHero() {
  return (
    <div>
      <CommonForAll />
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <div style={searchBarContainerStyle}>
            <div style={buttonContainerStyle}>
              <Link to="/SearchHero" className="btn btn-outline-secondary " style={linkButtonStyle}>All Contents</Link>
            </div>
            <input type="text" placeholder="Search..." style={searchBarStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px', // Adjust as needed
};

const imageContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh', // Adjust image height as needed
  backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/06/22/11/54/countryside-2430566_1280.jpg")', // Replace with your image URL
  backgroundSize: 'cover',
};

const searchBarContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  textAlign: 'center',
  display: 'flex', // Make it a flex container
  alignItems: 'center', // Align items vertically
};

const buttonContainerStyle = {
  marginRight: '10px', // Add some margin between the button and the search bar
};

const searchBarStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const linkButtonStyle = {
  color: 'white',
  padding: '8px 15px', // Adjust padding to make it wider and thinner
  fontSize: '16px', // Adjust font size to make it smaller
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '170px', // Adjust width as needed
  textAlign: 'center',
  height: '45px', // Adjust height as needed
};

export default SearchHero;
