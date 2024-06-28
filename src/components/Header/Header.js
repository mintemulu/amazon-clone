import React, { useContext } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import LowerHeader from "./LowerHeader/LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }] = useContext(DataContext);

  // Calculate total items in the basket
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  return (
    <section className="fixed">
      <header className="header-section">
        <div className="header-top">
          <Link to="/">
            <img
              className="header-logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="Amazon Logo"
            />
          </Link>
          <div className="header-location">
            <IoLocationOutline />
            <div className="location-text">
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="header-search">
          <select className="search-category">
            <option value="">All</option>
          </select>
          <input
            className="search-input"
            name="text"
            placeholder="Search product"
          />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>
        <div className="header-nav">
          <Link to="#" className="nav-item">
            <img
              className="nav-flag"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="US Flag"
            />
            <select className="nav-language">
              <option value="">EN</option>
            </select>
          </Link>
          <Link to="/Auth" className="nav-item">
            <div className="nav-account">
              <p>Hello, Sign In</p>
              <span>Accounts & Lists</span>
            </div>
          </Link>
          <Link to="/Orders" className="nav-item">
            <div className="nav-orders">
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>
          <Link to="/Cart" className="nav-item nav-cart">
            <LuShoppingCart size={35} />
            <span className="cart-count">{totalItem || 0}</span>
          </Link>
        </div>
      </header>
      <LowerHeader />
    </section>
  );
}

export default Header;
