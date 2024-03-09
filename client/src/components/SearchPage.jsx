import React from 'react';
import { Link } from 'react-router-dom';
const SearchPage = ({ searchCriteria }) => {
  // Perform search based on searchCriteria and get search results
  
  // Dummy search results for demonstration
  const searchResults = [
    { id: 1, title: 'American Educational Research Journal', category: 'Education', coverage: '1964 - 2020', publisher: 'American Educational Research Association' },
    { id: 2, title: 'Educational Evaluation and Policy Analysis', category: 'Education', coverage: '1979 - 2020', publisher: 'American Educational Research Association' },
    { id: 3, title: 'Journal Of Behavioral Education', category: 'Education', coverage: '1982 - 2010', publisher: 'Springer' }
  ];

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>
            <p>Title: {result.title}</p>
            <p>Category: {result.category}</p>
            <p>Coverage: {result.coverage}</p>
            <p>Publisher: {result.publisher}</p>
            <Link to={{ pathname: `/journal2`, state: { searchCriteria } }}>
              View Article
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
