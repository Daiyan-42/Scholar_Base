import React, { useState, useEffect } from 'react';
import Finder from '../apis/Finder';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

function JournalPage() {
  const { journal_id = 308 } = useParams();
  const [journalInfo, setJournalInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJournalInfo = async () => {
      try {
        const response = await Finder.get(`/journal/${journal_id}`);
        setJournalInfo(response.data);
        setError(null);
      } catch (error) {
        setError('Error retrieving journal information');
        console.error('Error retrieving journal information:', error);
      }
    };

    fetchJournalInfo();
  }, [journal_id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!journalInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>{journalInfo.name}</h1>
      <div>
        <p><strong>Abstract:</strong> {journalInfo.abstract}</p>
        <p><strong>ISSN:</strong> {journalInfo.issn}</p>
        <p><strong>E-ISSN:</strong> {journalInfo.eissn}</p>
        <p><strong>Publisher:</strong> {journalInfo.publisher_name}</p>
        <p><strong>Category:</strong> {journalInfo.category_name}</p>
        <img src={journalInfo.img_url} alt="Journal Cover" style={{ maxWidth: '200px' }} />
      </div>
      <div>
        <h2>Articles</h2>
        <ul>
          {journalInfo.articles.map((article, index) => (
            <li key={index}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JournalPage;
