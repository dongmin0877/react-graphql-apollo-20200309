import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("tama")));

  console.log(isAuth);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "0 16px"
      }}
    >
      <div
        style={{
          width: "200px",
          height: "auto"
        }}
      >
        <img
          src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png"
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill"
          }}
        />
      </div>
      <div
        style={{
          display: "flex"
        }}
      >
        <Link style={LinkStyle} to="/">
          HOME
        </Link>
        <Link style={LinkStyle} to="/signin">
          SIGN IN
        </Link>
        <Link style={LinkStyle} to="/signup">
          SIGN UP
        </Link>
        <Link style={LinkStyle} to="/mypage">
          MY PAGE
        </Link>
      </div>
    </div>
  );
};
const LinkStyle = {
  display: "block",
  margin: "0 10px",
  textDecoration: "none",
  color: "inherit",
  fontSize: "14px",
  fontWeight: "900"
};

export default Header;
