import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link
import Quartz from '../assets/CT-734.jpg'; // Example image import

export default function ProductCard() {
  return (
    <div className="d-flex justify-content-center my-3">
      <Card style={{ width: '18rem' }} className="shadow-lg rounded">
        {/* Image */}
        <Card.Img variant="top" src={Quartz} alt="Quartz Countertops" />
        
        {/* Card Body */}
        <Card.Body>
          <Card.Title>Quartz Countertops</Card.Title>
          <Card.Text>
            High-quality quartz countertops for your kitchen. Durable, stylish, and easy to maintain. Perfect for modern homes.
          </Card.Text>

          {/* Button with Link */}
          <Link to="./productLayout"> {/* Updated the link path */}
            <Button variant="primary">
              View Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
