import React from 'react';

function FeaturedAuthors() {
  return (
    <div className="container mt-5" >
      <h3 style={{ textAlign: 'center',fontSize:45, marginBottom: '20px' }}>Featured Authors</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-around">
        <div className="col-md-4">
          <div className="card text-dark" style={{ width: '15rem', marginBottom: '20px' }}>
            <img src="https://hips.hearstapps.com/hmg-prod/images/james-baldwin-photo-by-ted-thaithe-life-picture-collectiongetty-images.jpg" className="card-img-top" alt="Author" />
            <div className="card-body">
              <h5 className="card-title">John Smith</h5>
              <p className="card-text">
              John Smith is a prominent researcher in artificial intelligence, with a focus on machine learning algorithms and their applications in natural language processing and computer vision.
              </p>
              <a href="#" className="btn btn-primary">
                View Profile
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ width: '15rem', marginBottom: '20px' }}>
            <img src="https://149645218.v2.pressablecdn.com/wp-content/uploads/2020/09/3-1.jpg" className="card-img-top" alt="Author" />
            <div className="card-body">
              <h5 className="card-title">Emily Johnson</h5>
              <p className="card-text">
              Emily Johnson is a leading expert in cryptography, specializing in the design and analysis of secure communication protocols and cryptographic algorithms.
              </p>
              <a href="#" className="btn btn-primary">
                Visit Profile
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ width: '15rem', marginBottom: '20px' }}>
            <img src="https://hips.hearstapps.com/hmg-prod/images/1bbf7738-5ef4-417f-bb66-e44371e97826.jpg?crop=0.564xw:1.00xh;0.304xw,0&resize=480:*" className="card-img-top" alt="Author" />
            <div className="card-body">
              <h5 className="card-title">Michael Brown</h5>
              <p className="card-text">
              Michael Brown's research interests lie in the field of computer networks and distributed systems, where he investigates scalable and reliable network protocols and architectures. 
              </p>
              <a href="#" className="btn btn-primary">
                Visit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedAuthors;
