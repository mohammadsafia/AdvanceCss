import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./story.style.scss";
class Story extends Component {
  state = {};
  render() {
    return (
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="/assets/img/video.mp4" type="video/mp4" />
            <source src="/assets/img/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="container">
          <div className="text-center  m-4">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>
          <div className="row u-margin-bottom-8 m-3 ">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="/assets/img/nat-8.jpg"
                  alt="person"
                  className="story__img"
                />
                <figcaption className="story__caption">Terkwaz</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary mb-4">
                  WOW! My life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum quis omnis dolore vero distinctio odio voluptatum error,
                  nam,Ipsum quis omnis dolore vero distinctio odio voluptatum
                  error, nam.Ipsum quis omnis dolore vero distinctio odio
                  voluptatum error, nam.Ipsum quis omnis dolore vero distinctio
                  odio voluptatum error, nam.
                </p>
              </div>
            </div>
          </div>
          <div className="row m-3">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="/assets/img/nat-9.jpg"
                  alt="person"
                  className="story__img"
                />
                <figcaption className="story__caption">Abu Safia</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary mb-4">
                  I had the best week ever with may family
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum quis omnis dolore vero distinctio odio voluptatum error,
                  nam,Ipsum quis omnis dolore vero distinctio odio voluptatum
                  error, nam.Ipsum quis omnis dolore vero distinctio odio
                  voluptatum error, nam.Ipsum quis omnis dolore vero distinctio
                  odio voluptatum error, nam.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center u-margin-top ">
            <Link to="/" className="btn-text">
              Read all stories &rarr;
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Story;
