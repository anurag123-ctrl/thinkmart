import React from 'react';
import './Coupon.css';
import myntraLogo from '../../assets/images/sample_images/thinkmart.png'; 

const Coupon = () => {
  return (
    <div className="coupon-container">
      <div className="coupon-left">
        <span className="coupon-text">FLAT <span className="rupee">₹</span>400 OFF</span>
      </div>
      <div className="coupon-right">
        <p className="coupon-subtext">On Your <sup>1st</sup> Purchase<br />Via <img src={myntraLogo} alt="Myntra" className="coupon-logo" /> App!</p>
      </div>
    </div>
  );
};

export default Coupon;
