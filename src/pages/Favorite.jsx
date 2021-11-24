import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

const Favorite = ({ addToCart, removeFromCart, onLikeItem, onUnlikeItem }) => {
  const { favoriteItems } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center">
        <h1>Мои закладки </h1>
      </div>
      <div className="cards">
        {favoriteItems.map((obj) => {
          return (
            <Card
              key={obj.id}
              id={obj.parentId}
              title={obj.title}
              price={obj.price}
              image={obj.image}
              onPlus={() => addToCart(obj)}
              onRemove={() => removeFromCart(obj)}
              onLikeItem={() => onLikeItem(obj)}
              onUnlikeItem={() => onUnlikeItem(obj)}
              favorited={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
