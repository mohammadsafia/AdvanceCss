import React, { Component } from "react";
import {
  MdFingerprint,
  MdLanguage,
  MdFavoriteBorder,
  MdTimer
} from "react-icons/md";

import "./feature.style.scss";

class Feature extends Component {
  state = {};
  render() {
    return (
      <section className="section-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="feature-box">
                <MdLanguage className="feature-box__icon" />
                <h3 className="heading-tertiary mb-3">Explore the world</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus magnam hic enim animi
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-box">
                <MdFingerprint className="feature-box__icon" />
                <h3 className="heading-tertiary mb-3">But your fingerprint</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus magnam hic enim animi
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-box">
                <MdFavoriteBorder className="feature-box__icon" />
                <h3 className="heading-tertiary mb-3">Live a healthier life</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus magnam hic enim animi
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-box">
                <MdTimer className="feature-box__icon" />
                <h3 className="heading-tertiary mb-3">Meet Nature</h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus magnam hic enim animi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
