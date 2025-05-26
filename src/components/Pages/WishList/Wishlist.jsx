import React from 'react';
import Navbar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import './Wishlist.css';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="wishlist-container">
        <div className="animated-bg"></div>
        <div className="wishlist-content">
          <h1 className="wishlist-title">Your Wishlist 💝</h1>
          <p className="wishlist-message">
            Nothing is in your wishlist 😢<br />Add something to make it 💖
          </p>
          <button
            className="wishlist-button"
            onClick={() => navigate('/')}
          >
            🛒 Explore Products
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
