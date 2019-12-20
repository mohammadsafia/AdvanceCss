import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="logo-box">
          <img
            src="/assets/img/logo-white.png"
            alt="logo-white"
            className="logo"
          />
        </div>
        <div className="text-box">
          <h1 className="header-primary">
            <span className="heading-primary-main">Terkwaz</span>
            <span className="heading-primary-sub">business solutions </span>
          </h1>

          <Link className="btn btn-white btn-animated">Discover our tours</Link>
        </div>
      </header>
    );
  }
}

export default Header;
