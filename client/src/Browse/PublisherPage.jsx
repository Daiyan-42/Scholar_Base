import React, { useState, useEffect } from 'react';
import Finder from '../apis/Finder';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PublisherPage() {
  const { publisherId = 14 } = useParams();

  const [publisherInfo, setPublisherInfo] = useState({
    name: '',
    description: '',
    website_link: '',
    image_link: '',
    journals: [],
  });

   useEffect(() => {
    const fetchPublisherInfo = async () => {
      try {
        console.log(publisherId);
        const response = await Finder.get(`/publishers/${publisherId}`);
        setPublisherInfo(response.data);
      } catch (error) {
        console.error('Error fetching publisher:', error);
      }
    };

    fetchPublisherInfo();
  }, [publisherId]);


  return (
    <div>
      <Navbar />
      <div className="container mt-10">
      <div className="row">
        <div className="col-lg-6">
      <div className="publisher-details">
        <h1>{publisherInfo.name}</h1>
        <p>{publisherInfo.description}</p>
      </div>
      </div>
      <div className="journal-list">
        <h2>Journals</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {publisherInfo.journals.map((journal, index) => (
              <tr key={index}>
                <td><Link  to={`/journal/${journal.journal_id}`} className='text-dark'>{journal.title}</Link></td>
                <td>{journal.dateRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <div className="col-lg-6 mt-5">
      <div className="publisher-image">
        <img src={publisherInfo.image_link} alt="Publisher Image" style={{ maxWidth: '100%', height: 'auto' }} />
        <p>Website: <a href={publisherInfo.website_link}>{publisherInfo.website_link}</a></p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default PublisherPage;
