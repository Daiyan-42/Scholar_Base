import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdvancedSearch() {
  const [searchCriteria, setSearchCriteria] = useState({
    title: '',
    category: '',
    coverage: '',
    publisher: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search criteria submission
    console.log('Search Criteria:', searchCriteria);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <header style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src="https://patch.com/img/cdn/users/22848633/2015/10/raw/2015105617e0d11c033.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          </Link>
          <p className="mb-0" style={{ fontFamily: "Liberation Mono, monospace", color: "#01428c", fontSize: "24px", fontWeight: "bold", marginLeft: "8px" }}> ScholarBase</p>
        </header>
      </div>
      <p className="mb-0" style={{ fontFamily: "Liberation Mono, monospace", color: "#01428c", fontSize: "24px", fontWeight: "bold", marginLeft: "8px", textAlign:"center" }}>Advanced Search Options</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="title" placeholder="Title" value={searchCriteria.title} onChange={handleChange} style={{ width: '400px', marginBottom: '15px', padding: '10px' }} />
          <input type="text" name="category" placeholder="Category" value={searchCriteria.category} onChange={handleChange} style={{ width: '400px', marginBottom: '15px', padding: '10px' }} />
          <input type="text" name="coverage" placeholder="Coverage" value={searchCriteria.coverage} onChange={handleChange} style={{ width: '400px', marginBottom: '15px', padding: '10px' }} />
          <input type="text" name="publisher" placeholder="Publisher" value={searchCriteria.publisher} onChange={handleChange} style={{ width: '400px', marginBottom: '15px', padding: '10px' }} />
          <button 
            type="submit" 
            style={{ 
              width: '200px', 
              padding: '10px', 
              backgroundColor: '#01428c', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              transition: 'background-color 0.3s' // Adding transition for smooth color change
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#013366'} // Change color on hover
            onMouseLeave={(e) => e.target.style.backgroundColor = '#01428c'} // Revert color on mouse leave
          >
          <Link to={'/Search'}>Search</Link> 
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdvancedSearch;
