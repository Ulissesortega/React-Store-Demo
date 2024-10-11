import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js'

import Home from './pages/home.js';
import About from './pages/about.js';
import Products from './pages/products.js';
import Services from './pages/services.js';
import Contact from './pages/contact.js';
import ProductDetails from './pages/productDetails.js'

import ProductLayout from './components/ProductLayout.js';
import countertopsData from './data/countertopsData';  

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails" element={<ProductDetails />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
