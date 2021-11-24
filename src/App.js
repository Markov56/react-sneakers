import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorite from './pages/Favorite';
import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
          axios.get('https://61670f9613aa1d00170a6980.mockapi.io/cartItems'),
          axios.get('https://61670f9613aa1d00170a6980.mockapi.io/favorite'),
          axios.get('https://61670f9613aa1d00170a6980.mockapi.io/items'),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavoriteItems(favoriteResponse.data);
        setSneakers(itemsResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    try {
      fetchData();
    } catch (error) {
      console.log(error);
      alert('Произошла ошибка');
    }
  }, []);

  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = async (obj) => {
    setCartItems((prevVal) => [...prevVal, obj]);
    await axios.post('https://61670f9613aa1d00170a6980.mockapi.io/cartItems', obj);
  };

  const removeFromCart = (obj) => {
    try {
      setCartItems((prevVal) =>
        prevVal.filter((item) => {
          if (item.parentId == obj.parentId) {
            axios.delete(`https://61670f9613aa1d00170a6980.mockapi.io/cartItems/${item.id}`);
          }
          return item.parentId != obj.parentId;
        }),
      );
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка');
    }
  };

  const onSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onLikeItem = async (obj) => {
    try {
      setFavoriteItems((prevVal) => [...prevVal, obj]);
      await axios.post('https://61670f9613aa1d00170a6980.mockapi.io/favorite', obj);
    } catch (error) {
      console.log(error);
      alert('Не удалось выполнить действие. Для детальной информации обратитесь в консоль');
    }
  };

  const onUnlikeItem = (obj) => {
    try {
      setFavoriteItems((prevVal) =>
        prevVal.filter((item) => {
          if (item.parentId == obj.parentId) {
            axios.delete(`https://61670f9613aa1d00170a6980.mockapi.io/favorite/${item.id}`);
          }
          return item.parentId != obj.parentId;
        }),
      );
    } catch (error) {
      console.log(error);
      alert('Произошла ошибка');
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => {
      return Number(obj.parentId) === Number(id);
    });
  };

  const isItemFavorited = (id) => {
    return favoriteItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        sneakers,
        cartItems,
        setCartItems,
        favoriteItems,
        isItemAdded,
        isItemFavorited,
        setCartIsOpened,
        isLoading,
      }}>
      <div className="wrapper clear">
        <Drawer
          onCloseCart={() => setCartIsOpened(false)}
          onRemove={(obj) => removeFromCart(obj)}
          opened={cartIsOpened}
        />

        <Header
          onOpenCart={() => {
            setCartIsOpened(true);
          }}
          favorited={favoriteItems.length}
        />
        <Route path="/" exact>
          <Home
            sneakers={sneakers}
            searchInput={searchInput}
            onSearchChange={onSearchChange}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            onLikeItem={onLikeItem}
            onUnlikeItem={onUnlikeItem}
            isLoading={isLoading}
          />
        </Route>
        <Route exact path="/favorite">
          <Favorite
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            onLikeItem={onLikeItem}
            onUnlikeItem={onUnlikeItem}
          />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

//learning progress
const progress = (args) => {
  const fullTime = 1383;
  let result = (args.reduce((acc, start) => start + acc, 0) * 100) / fullTime;
  console.log(result, '%');
  return result;
};
// progress([161, 149, 174, 171, 205 ]);

export default App;
