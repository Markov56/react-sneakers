import React, { useState, useContext } from 'react';
import { beautifyPrice } from '../../utils/utils';
import CardLoader from '../CardLoader';
import AppContext from '../../context';

import styles from './Card.module.scss';

const Card = ({
  title,
  id,
  image,
  price,
  onPlus,
  onRemove,
  onLikeItem,
  onUnlikeItem,
  isLoading,
}) => {
  const { isItemAdded, isItemFavorited } = useContext(AppContext);

  const onClickPlus = () => {
    onPlus();
  };

  const onClickRemove = () => {
    onRemove();
  };

  const onClickFavorite = () => {
    onLikeItem();
  };

  const onClickUnfavorite = () => {
    onUnlikeItem();
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <CardLoader />
      ) : (
        <>
          <div className={styles.cardFavorite}>
            {/* if onLikeItem exists render plus/remove button. Else return empty string */}
            {onLikeItem ? (
              isItemFavorited(id) ? (
                <img src="/images/heart-clicked.svg" alt="" onClick={onClickUnfavorite} />
              ) : (
                <img src="/images/heart.svg" alt="" onClick={onClickFavorite} />
              )
            ) : (
              ''
            )}
          </div>
          <img className={styles.card__img} src={image} alt="sneakers" />
          <h5 className={styles.card__title}>{title}</h5>
          <div className={styles.card__bottom}>
            <div className={styles.card__priceBox}>
              <span>Цена:</span>
              <b>
                {beautifyPrice(price)}
                руб.
              </b>
            </div>
            {/* if onPlus exists render plus/remove button. Else return empty string */}
            {onPlus ? (
              isItemAdded(id) ? (
                <img
                  className={styles.card__btn}
                  src={'/images/btn-added.svg'}
                  onClick={onClickRemove}
                />
              ) : (
                <img
                  className={styles.card__btn}
                  src={'/images/btn-add.svg'}
                  onClick={onClickPlus}
                />
              )
            ) : (
              ''
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
