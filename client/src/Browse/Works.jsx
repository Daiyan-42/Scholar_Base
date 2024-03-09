import React, { useState } from "react";
import "../index.css";
import API from "./API";

function Works() {
  const [data, setData] = React.useState(API);

  const filterItems = (categoryItem) => {
    if (categoryItem === "All Categories") {
      setData(API);
    } else {
      const updatedItems = API.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setData(updatedItems);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-info">Categories</h1>
        <div className="container-fluid mx-2">
          <div className="row mt-5 mx-2">
            <div className="col-md-3">
              <button
                className="btn btn-warning w-100 mb-4"
                onClick={() => filterItems("category 1")}
              >
                category 1
              </button>
              <button
                className="btn btn-warning w-100 mb-4"
                onClick={() => filterItems("category 2")}
              >
                category 2
              </button>
              <button
                className="btn btn-warning w-100 mb-4"
                onClick={() => filterItems("category 3")}
              >
                category 3
              </button>
              <button
                className="btn btn-warning w-100 mb-4"
                onClick={() => filterItems("category 4")}
              >
                category 4
              </button>
              <button
                className="btn btn-warning w-100 mb-4"
                onClick={() => filterItems("All Categories")}
              >
                All Categories
              </button>
            </div>
            <div className="col-md-9">
              <div className="row">
                {data.map((item, index) => {
                  const { title, image, description, category } = item;
                  return (
                    <div className="col-md-4" key={index}>
                      <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">{category}</p>
                          <p className="card-text">{description}</p>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
