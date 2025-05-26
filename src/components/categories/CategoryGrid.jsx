import React from "react";
import "./CategoryGrid.css";
import { Link } from "react-router-dom";

import mensImg from "../../assets/images/sample_images/menmain.avif";
import womensImg from "../../assets/images/sample_images/womenmain.webp";
import kidsImg from "../../assets/images/sample_images/image.png";
import moreImg from "../../assets/images/sample_images/family.jpg";

const categories = [
  { name: "Mens", image: mensImg, link: "/Catalog/men" },
  { name: "Womens", image: womensImg, link: "/Catalog/women" },
  { name: "Kids", image: kidsImg, link: "/Catalog/kids" },
  { name: "More", image: moreImg, link: "#", comingSoon: true },
];

const CategoryGrid = () => {
  return (
    <section className="category-section">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <Link
            to={cat.comingSoon ? "#" : cat.link}
            className={`category-card ${cat.comingSoon ? "disabled" : ""}`}
            key={idx}
          >
            <div className="category-img-wrapper">
              <img src={cat.image} alt={cat.name} className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">{cat.name}</h3>
                {cat.comingSoon && (
                  <span className="coming-soon">Coming Soon</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
