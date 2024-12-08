import { useCart } from "../context/CartContext";

export const cartFunctions = () => {
  const { cartItems, setCartItems } = useCart();

  const addCart = (index) => {
    const newCart = [...cartItems];
    const item = { ...newCart[index] };
    item.quantity = (item.quantity || 1) + 1;
    newCart[index] = item;
    setCartItems(newCart);
  };

  const reduceCart = (index) => {
    const newCart = [...cartItems];
    const item = { ...newCart[index] };
    if ((item.quantity || 1) > 1) {
      item.quantity = (item.quantity || 1) - 1;
      newCart[index] = item;
    } else {
      newCart.splice(index, 1);
    }
    setCartItems(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return {
    addCart,
    reduceCart,
    removeItem,
    clearCart,
    getTotal,
  };
};
