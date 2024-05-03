import { createContext, useContext, useState, useEffect } from "react";


const ShoppingCartContext = createContext({});

  let initialState = localStorage.getItem("shopping-cart") 
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];


function ShoppingCartProvider(props) {
  let [cartItems, setCartItems] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems))
  }, [cartItems])


  const cartQuantity = cartItems.reduce((quantity, item) => {
    return quantity + item.quantity;
  }, 0)

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };


  const increaseQuantity = (id) => {

    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };



  return(
    <ShoppingCartContext.Provider
    value={{
      cartItems,
      cartQuantity,
      getItemQuantity,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
    }}
  >
    {props.children}
  </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};