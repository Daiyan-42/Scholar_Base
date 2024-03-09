import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Finder from '../apis/Finder';

const CategoryList = () => {

  let [categories, setCategories] = useState([]);

  const fetchCategories = async () => {

      const res = await Finder.get('/categories');
      const result = res.data;
      setCategories(result.categories);
      console.log("this works");    
  };

  useEffect(() => {
      fetchCategories();
  }, []);


  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Category List</h2>
      <br/><br/>
      <ul>
        {categories.map((category, index) => (
          <div key={index}>
            <li>
              <Link to={`/category/${category.category_id}`} style={{ textDecoration: 'underline', fontSize: '20px' , color: 'black'}}>{category.category_name}</Link>
              <br />
              <span style={{ fontSize: '10px', color: 'red' , width: '70%'}}>{category.description}</span>
            </li>
            {/* Add a horizontal line between categories */}
            {index !== categories.length - 1 && <hr style={{ margin: '10px 0', width: '70%' }} />}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
