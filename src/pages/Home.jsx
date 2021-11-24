import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

const Home = ({
  searchInput,
  onSearchChange,
  addToCart,
  removeFromCart,
  onLikeItem,
  onUnlikeItem,
  sneakers,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = sneakers.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    );

    return isLoading
      ? [...Array(8)].map((item, index) => <Card isLoading={isLoading} key={index} />)
      : filteredItems.map((obj) => (
          <Card
            key={obj.parentId}
            id={obj.parentId}
            title={obj.title}
            price={obj.price}
            image={obj.image}
            onPlus={() => addToCart(obj)}
            onRemove={() => removeFromCart(obj)}
            onLikeItem={() => onLikeItem(obj)}
            onUnlikeItem={() => onUnlikeItem(obj)}
            isLoading={isLoading}
          />
        ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center">
        <h1>{searchInput ? `Поиск по: "${searchInput}"` : 'Все кроссовки'}</h1>

        <div className="content__search-box ">
          <img src="/images/search.svg" alt="" />
          <input
            className="content__search"
            type="search"
            placeholder="Поиск..."
            onChange={onSearchChange}
          />
        </div>
      </div>

      <div className="cards">{renderItems()}</div>
    </div>
  );
};

export default Home;
