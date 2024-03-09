import React from "react";

function Browser() {
  return (
    <div className="container mt-3 d-flex justify-content-center align-items-center vh-10" style={{ marginTop: '40px'}}>
      <div className="row">
        <div className="col-12">
          <div className="input-group rounded mt-2" style={{ width: "400px",outline: '1px solid black'}}>
            <input
              type="search"
              className="form-control rounded"
              placeholder="search"
              aria-label="Search"
              aria-describedby="search-addon"
              style={{ fontSize: "1.5rem", textAlign: "center", fontSmooth: 'auto'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browser;
