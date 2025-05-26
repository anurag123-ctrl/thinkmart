import React from "react";
import "./NavSide.css";
import { Link } from "react-router-dom";

const NavSide = (props) => {

  const handleCloseSidebar = () => {
    props.setIsMenuOpen(false);
  };

  return (
    props.isMenuOpen && 
    <div className="NavSidebar-container">
      <div className="NavSidebar-profile">
        <div className="NavSidebar-welcome">Welcome</div>
        <div className="NavSidebar-close" onClick={handleCloseSidebar}>
          X
        </div>
      </div>
      <div className="NavSidebar-nav-ul">
        <Link to={"/Catalog/men"} className="NavSidebar-cat" onClick={handleCloseSidebar}>
          Men
        </Link>
        <Link to={"/Catalog/women"} className="NavSidebar-cat" onClick={handleCloseSidebar}>
          Women
        </Link>
        <Link to={"/Catalog/kids"} className="NavSidebar-cat" onClick={handleCloseSidebar}>
          Kids
        </Link>
        <div className="break"></div>
        <div className="NavSidebar-cat NavSidebar-cat2 ">Accounts</div>
        <div className="NavSidebar-cat NavSidebar-cat2 ">Orders</div>
        <div className="NavSidebar-cat NavSidebar-cat2 ">Contact Us</div>
      </div>
    </div>
  );
};

export default NavSide;
