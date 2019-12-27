import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./about.style.scss";
class About extends Component {
  state = {};
  render() {
    return (
      <main>
        <section className="section-about">
          <div className="container">
            <div className="text-center u-margin-bottom-8">
              <h2 className="heading-secondary">
                Exciting tours for advetoures pepolse
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6 my-5">
                <h3 className="heading-tertiary mb-3">
                  You'r going to fall in love with nature
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  voluptatum aut debitis sequi hic. Saepe iusto asperiores
                  tempore aspernatur earum, porro aliquid assumenda quibusdam,
                  odit, voluptas sunt ea repudiandae quos.
                </p>
                <h3 className="heading-tertiary mb-3">
                  Live adventures like you never have before
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat itaque ea quo, amet ipsam dolores vitae commodi
                  repudiandae suscipit doloribus.
                </p>
                <Link to="/" className="btn-text">
                  Learn more &rarr;
                </Link>
              </div>
              <div className="col-md-6 my-5">
                <div className="composition">
                  <img
                    src="/assets/img/nat-1-large.jpg"
                    alt="Photo1"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src="/assets/img/nat-2-large.jpg"
                    alt="Photo2"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src="/assets/img/nat-3-large.jpg"
                    alt="Photo3"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default About;
