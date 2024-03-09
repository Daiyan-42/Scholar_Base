import React from 'react'

function Card() {
  return (
    <div>
      <div className="col-md-4">
        <div className="card" style={{ width: '15rem', marginBottom: '20px' }}>
          <img src="https://patch.com/img/cdn/users/22848633/2015/10/raw/2015105617e0d11c033.png" className="card-img-top" alt="Author" />
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
