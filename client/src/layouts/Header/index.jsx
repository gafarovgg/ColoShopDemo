import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="left-header">
            <h1 className="colo">COLO</h1>
            <h1 className="shop">SHOP</h1>
          </div>
          <div className="middle-header">
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink>Shop</NavLink>
                </li>
                <li>
                  <NavLink>Promotion</NavLink>
                </li>
                <li>
                  <NavLink>Pages</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/add-product">Add Product</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right-header">
            <CiSearch />
            <CiUser />
            <CiShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
