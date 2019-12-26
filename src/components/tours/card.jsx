import React, { Component } from "react";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    const { number, day, pepole, tour, level, price } = this.props;
    return (
      <div className="col-md-4">
        <div className="cards">
          <div className="cards__side cards__side--front">
            <div className={`cards__picture cards__picture--${number}`}>
              &nbsp;
            </div>
            <h4 className="cards__heading">
              <span
                className={`cards__heading-span cards__heading-span--${number}`}
              >
                The Sea Explorer
              </span>
            </h4>
            <div className="cards__details">
              <ul>
                <li>{day} day tours</li>
                <li>Up to {pepole} pepole</li>
                <li>{tour} tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Defficulty :{level}</li>
              </ul>
            </div>
          </div>
          <div
            className={`cards__side cards__side--back cards__side--back-${number}`}
          >
            <div className="cards__cta">
              <div className="cards__price-box">
                <p className="cards__price-only">Only</p>
                <p className="cards__price-value">{price}</p>
              </div>
              <Link to="/" className="btn btn--white">
                Book Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
