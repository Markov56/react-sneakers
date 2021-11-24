import { useContext } from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  let sum = cartItems.reduce((acc, obj) => acc + obj.price, 0);
  return { cartItems, setCartItems, sum };
};
