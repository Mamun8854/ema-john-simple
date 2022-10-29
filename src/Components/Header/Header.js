import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="link">
        {/* <Link to="/">Home</Link> */}
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <Link onClick={signOutUser}>Sign Out</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}

        <span style={{ color: "tomato", marginLeft: "10px" }}>
          {user?.email}
        </span>
      </div>
    </nav>
  );
};

export default Header;
