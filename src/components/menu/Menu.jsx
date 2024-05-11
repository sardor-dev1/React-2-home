import React from "react";
import "./menu.scss";
import { MenuCards } from "../static";

const Menu = () => {
  const menuData = MenuCards.map((card) => {
    return (
      <div key={card.id} className="menu__card">
        <img className="menu__card__img" src={card.img} alt="" />
        <div className="menu__card__info">
          <div className="menu__info__top">
            <h2 className="menu__info__top__text">{card.name}</h2>
            <h2 className="menu__info__top__text">{card.price}</h2>
          </div>
          <p className="menu__desc">{card.title}</p>
          <div className="menu__card__bottom">
            <span className="bottom__count">+</span>
            <img src={card.route} alt="" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="menu container">
      <p className="menu__text">Menu</p>
      <h1 className="menu__title">Food Full of treaty Love</h1>
      <p className="menu__desc__card">
        There are many things are needed to start the Fast Food Business. You
        need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers,{" "}
      </p>
      <div className="menu__cards">{menuData}</div>
    </div>
  );
};

export default Menu;
