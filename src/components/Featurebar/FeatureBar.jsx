import React from "react";
import "./FeatureBar.css";
import vintageIcon from "../../assets/images/sample_images/vintage.png";
import trustedIcon from "../../assets/images/sample_images/trust.png";
import qualityIcon from "../../assets/images/sample_images/quality.png";

const FeatureBar = () => {
  return (
    <section className="feature-bar">
      <div className="feature">
        <img src={vintageIcon} alt="Vintage" className="feature-icon" />
        <h3>VINTAGE</h3>
      </div>
      <div className="feature">
        <img src={trustedIcon} alt="Trusted" className="feature-icon" />
        <h3>TRUSTED</h3>
      </div>
      <div className="feature">
        <img src={qualityIcon} alt="Assured Quality" className="feature-icon" />
        <h3>QUALITY</h3>
      </div>
    </section>
  );
};

export default FeatureBar;
