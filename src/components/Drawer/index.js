import React, { useContext, useState } from 'react';
import axios from 'axios';

import Info from '../Info';
import { beautifyPrice } from '../../utils/utils.js';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const Drawer = ({ onCloseCart, onRemove, opened }) => {
  const { cartItems, setCartItems, sum } = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://61670f9613aa1d00170a6980.mockapi.io/orders', {
        items: cartItems,
      });
      await cartItems.map((obj) => {
        axios.delete(`https://61670f9613aa1d00170a6980.mockapi.io/cartItems/${obj.id}`);
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert('Не удалось создать заказ');
      console.log(error);
    }
    setIsLoading(false);
  };

  const onClickRemove = (obj) => {
    onRemove(obj);
  };

  return (
    <div className={`${opened ? styles.overlayVisible : ''} ${styles.overlay}`}>
      {cartItems.length > 0 ? (
        <div className={styles.drawer}>
          <h2 className={styles.basket}>
            Корзина <img src="/images/delete-btn.svg" alt="delete" onClick={onCloseCart} />
          </h2>
          <div className={styles.addedCartItems}>
            {cartItems.map((obj) => {
              return (
                <div className={styles.addedItem} key={obj.id}>
                  <img
                    className="addedItem__img"
                    width={70}
                    height={70}
                    src={obj.image}
                    alt="sneakers photo"
                  />
                  <div className={styles.addedItem__info}>
                    <h6 className={styles.addedItem__title}>{obj.title}</h6>
                    <p className={styles.addedItem__price}>
                      {beautifyPrice(obj.price)}
                      руб.
                    </p>
                  </div>
                  <div className={styles.deleteBtn}>
                    <img
                      src="/images/delete-btn.svg"
                      alt="delete"
                      onClick={() => onClickRemove(obj)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.makeOrder}>
            <div className={styles.makeOrder__sum}>
              <span>Итого: </span>
              <div className={styles.dash}></div>
              <span className={styles.makeOrder__num}> {sum} руб. </span>
            </div>
            <div className={styles.makeOrder__sum}>
              <span>Налог 5%:</span>
              <div className={styles.dash}></div>
              <span className={styles.makeOrder__num}> {sum / 20} руб.</span>
            </div>
            <button className={styles.makeOrder__btn} onClick={onClickOrder} disabled={isLoading}>
              Оформить заказ
              <img src="/images/arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
      ) : isOrderComplete ? (
        <Info
          title="Заказ оформлен!"
          text={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
          img="/images/complete.jpg"
        />
      ) : (
        <Info
          title="Корзина пустая"
          text="Вы не добавили ни одного товара"
          img="/images/empty-basket.png"
        />
      )}
    </div>
  );
};

export default Drawer;
