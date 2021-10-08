import React from 'react';

function Drawer() {
  return (
    <div className="drawer">
      <h2 className="basket">
        Корзина <img src="/images/delete-btn.svg" alt="delete" />
      </h2>

      <div className="added-items">
        <div className="added-item">
          <img
            className="added-item__img"
            width={70}
            height={70}
            src="/images/sneakers/4.jpg"
            alt="sneakers photo"
          />
          <div className="added-item__info">
            <h6 className="added-item__title">Мужские Кроссовки Nike Air Max 270</h6>
            <p className="added-item__price">12 999 руб.</p>
          </div>
          <div className="delete-btn">
            <img src="/images/delete-btn.svg" alt="delete" />
          </div>
        </div>

        <div className="added-item">
          <img
            className="added-item__img"
            width={70}
            height={70}
            src="/images/sneakers/2.jpg"
            alt="sneakers photo"
          />
          <div className="added-item__info">
            <h6 className="added-item__title">Мужские Кроссовки Nike Air Max 270</h6>
            <p className="added-item__price">12 999 руб.</p>
          </div>
          <div className="delete-btn">
            <img src="/images/delete-btn.svg" alt="delete" />
          </div>
        </div>
      </div>

      <div className="make-order">
        <div className="make-order__sum">
          <span>Итого: </span>
          <div className="dash"></div>
          <span className="make-order__num">21 498 руб. </span>
        </div>
        <div className="make-order__sum">
          <span>Налог 5%:</span>
          <div className="dash"></div>
          <span className="make-order__num">1074 руб.</span>
        </div>
        <button className="make-order__btn">
          Оформить заказ
          <img src="/images/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Drawer;
