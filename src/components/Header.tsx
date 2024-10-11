import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Header() {
  return (
    <div className="nav">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p className="logo">LOGO</p> {/* Added a class for styling */}
        </div>

        <ul className="d-flex list-unstyled mb-0"> {/* Added classes for styling */}
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2">
            <Link to="/products">Products</Link>
          </li>
          <li className="mx-2">
            <Link to="/services">Services</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2">
            <Link to="/ProductDetails">Product Details</Link>
          </li>
        </ul>

        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
}
