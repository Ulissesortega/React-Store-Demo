import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function ProductLayout({ data }) {
  return (
    <div className="container">
      <header className="row">
        <div className="col d-flex justify-content-center align-items-center text-bg-primary mb-1 rounded-2 p-0">
          <h1>{data.title}</h1>
        </div>
      </header>

      <div className="row">
        <div className="col-md-6 col-sm-12 px-0">
          <img id="mainImage" src={data.mainImage} className="w-100 rounded-2 mb-1" alt="Main Image" />

          <div className="row justify-content-center align-items-center g-2">
            {data.thumbnails.map((thumbnail, index) => (
              <div className="col" key={index}>
                <img src={thumbnail} className="w-100 rounded-2 thumbnail" alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h4>Price: ${data.price.toFixed(2)}</h4>
        </div>
      </div>

      <div className="mt-3">
        <Link to="/producthub" className="btn btn-primary">Go to Product Hub</Link>
      </div>
    </div>
  );
}
