import React, { useContext } from 'react';
import AppContext from '../context';
import styles from './Drawer/Drawer.module.scss';

const Info = ({ title, text, img }) => {
  const { setCartIsOpened } = useContext(AppContext);

  return (
    <div className={styles.drawer}>
      <h2 className={styles.basket}>
        Корзина{' '}
        <img src="/images/delete-btn.svg" alt="delete" onClick={() => setCartIsOpened(false)} />
      </h2>
      <div className={styles.basket__empty}>
        <div className="basket__empty-img">
          <img src={img} alt="пусто" width={150} />
        </div>
        <h3 className={styles.basket__emptyTitle}>{title}</h3>
        <p className={styles.basket__emptyText}>{text}</p>
        <button className={styles.basket__emptyBtn} onClick={() => setCartIsOpened(false)}>
          Вернуться назад
          <img src="./images/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Info;
