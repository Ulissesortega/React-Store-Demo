import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>This is the Home page.</p>
      <Link to="/ProductDetails">Product Details</Link>
    </div>
  );
}

export default Home;
