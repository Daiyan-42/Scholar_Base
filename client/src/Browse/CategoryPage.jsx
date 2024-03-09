import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Finder from '../apis/Finder';
import Navbar from '../components/Navbar';

function CategoryPage() {
  const { categoryId } = useParams();
  const [info, setInfo] = useState({ category_name: '', journals: [] });

  useEffect(() => {
    Finder.get(`/categories/${categoryId}`)
      .then(response => setInfo(response.data))
      .catch(error => console.error('Error fetching category:', error));
  }, [categoryId]);

  return (
    <div>
        <Navbar />
        <div className="container text-center"> {/* Center content */}
            <h1 className='mb-10 me-4'>{info.category_name}</h1>
            
            {/* Search field */}
            <div className="mb-4">
            <input type="text" placeholder="Search Journals" />
            <button>Search</button>
            </div>
            
            <h6>{info.journals.length} Journals under {info.category_name}:</h6>
            <table className="table">
            <thead>
                <tr>
                <th>Journals</th>
                <th>Date Range</th>
                </tr>
            </thead>
            <tbody>
                {info.journals.map(journal => (
                <tr key={journal.journal_id}>
                    <td><Link to={`/journal/${journal.journal_id}`} className='text-decoration-none text-dark'>{journal.journal_name}</Link></td> 
                    <td>{journal.coverage}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>

  );
}

export default CategoryPage;
