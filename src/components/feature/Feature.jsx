import React from "react";
import "./feature.scss";
import { FeatureCards } from "../static";

const Feature = () => {
  const cards = FeatureCards.map((card) => {
    return (
      <div key={card.id} className="food__card">
        <img src={card.img} alt="" />
        <h2 className="food__card__title">{card.name}</h2>
        <p className="food__card__desc">{card.title}</p>
      </div>
    );
  });

  return (
    <div className="food container">
      <p className="food__desc">Features</p>
      <h2 className="food__title">Food with a New Passion</h2>
      <div className="food__cards">{cards}</div>
    </div>
  );
};

export default Feature;
