import React, { useState, useEffect } from 'react';
import Finder from '../apis/Finder';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    const fetchPublishers = async () => {
      try {
        const response = await Finder.get('/publishers');
        const publishersWithDefaultDescription = response.data.publishers.map(
            (publisher) => ({
              ...publisher,
              description: publisher.description === 'Description tag not found' ? 'No description' : publisher.description,
            })
          );
          setPublishers(publishersWithDefaultDescription);
      } catch (error) {
        console.error('Error fetching publishers:', error);
      }
    };

    fetchPublishers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex justify-center align-center'>
      <h2 style={{ textAlign: 'center' }}>Publishers</h2>
      <ul>
        {publishers.map((publisher, index) => (
          <li key={index}>
            <Link key={index} to={`/publisher/${publisher.publisher_id}`} style={{ textDecoration: 'none', fontSize: '20px', color: 'black' }}>
              {publisher.publisher_name}
              <br />
              <span style={{ fontSize: '14px', color: 'gray' }}>{publisher.description}</span>
            </Link>
          </li>  
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Publishers;