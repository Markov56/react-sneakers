import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import AppContext from '../context';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { isLoading } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://61670f9613aa1d00170a6980.mockapi.io/orders');
        const allOrders = data.reduce((acc, obj) => [...acc, ...obj.items], []);
        setOrders(allOrders);
      } catch (error) {
        alert('Ошибка при загрузке заказов');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center">
        <h1>Мои заказы </h1>
      </div>
      <div className="cards">
        {isLoading
          ? [...Array(4)].map((item, index) => <Card isLoading={isLoading} key={index} />)
          : orders.map((obj, index) => {
              return (
                <Card
                  key={index}
                  id={obj.parentId}
                  title={obj.title}
                  price={obj.price}
                  image={obj.image}
                  isLoading={isLoading}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Orders;
