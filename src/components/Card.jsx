import React from 'react';

function Card() {
  return (
    <div className="card">
      <div className="card-favorite">
        <img src="/images/heart.svg" alt="" />
      </div>
      <img className="card__img" src="/images/sneakers/1.jpg" alt="sneakers" />
      <h5 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card__bottom">
        <div className="card__price-box">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <div className="card__btn">
          <img src="/images/btn-add.svg" alt="add to card" />
        </div>
      </div>
    </div>
  );
}

export default Card;
