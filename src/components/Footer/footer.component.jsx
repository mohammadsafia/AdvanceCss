import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.style.scss";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__logo-box">
            <picture className="footer__logo">
              <source
                srcSet="/assets/img/logo-green-small-1x.png 1x, /assets/img/logo-green-small-2x.png 2x"
                media="(max-width: 37.5em)"
              />
              <img
                srcSet="/assets/img/logo-green-1x.png 1x, /assets/img/logo-green-2x.png 2x"
                alt="Fulllogo"
                src="/assets/img/logo-green-2x.png"
              />
            </picture>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link to="/" className="footer__link">
                      Company
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link to="/" className="footer__link">
                      Contact us
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link to="/" className="footer__link">
                      Carrers
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link to="/" className="footer__link">
                      Privacy policy
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link to="/" className="footer__link">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6  ">
              <p className="footer__copyright">
                Built by
                <Link to="/" className="footer__link">
                  Mohammad Safia
                </Link>
                for
                <Link to="/" className="footer__link">
                  Advanced CSS and Sass
                </Link>
                . Copyright &copy; by Mohammad Safia. You are 100% allowed to
                use this webpage for both personal and commercial use, but NOT
                to claim it as your own design. A credit to the original author,
                Mohammad Safia, is of course highly appreciated!
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
