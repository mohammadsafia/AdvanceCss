import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
class Header extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>01</span>About Natous
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>02</span>Your benfits
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>03</span>Popular tours
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>04</span>Stories
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>05</span>Book now
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <header className="header">
          <div className="header__logo-box">
            <img
              src="/assets/img/logo-white.png"
              alt="logo-white"
              className="header__logo"
            />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Terkwaz</span>
              <span className="heading-primary--sub">business solutions </span>
            </h1>
            <Link to="/" className="btn btn--white btn--animated">
              Discover our tours
            </Link>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
