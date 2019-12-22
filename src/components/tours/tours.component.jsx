import React, { Component } from "react";
import Card from "./card";
import "./tours.style.scss";
import { Link } from "react-router-dom";

class Tours extends Component {
  render() {
    return (
      <section className="section-tours">
        <div className="container">
          <div className="text-center u-margin-bottom-8">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>
          <div className="row">
            <Card
              number="1"
              day="3"
              pepole="20"
              tour="2"
              level="easy"
              price="$293"
            />
            <Card
              number="2"
              day="7"
              pepole="40"
              tour="6"
              level="medium"
              price="$444"
            />
            <Card
              number="3"
              day="5"
              pepole="15"
              tour="5"
              level="hard"
              price="$500"
            />
          </div>
          <div className="text-center u-margin-bottom-8 u-margin-top ">
            <Link to="/" className="btn btn--green">
              Discover all tours
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Tours;
