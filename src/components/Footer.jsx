import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <p>Footer Content Here</p>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
