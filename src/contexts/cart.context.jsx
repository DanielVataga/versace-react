import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setProductQty] = useState(0);
  const [size, setSize] = useState(37);

  const addProductToCart = (product) => setCart([...cart, {...product, size: size}]);

  const getSize = (size) => setSize(size)


  const removeProductFromCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const addQty = (id) => {
    let added = cart.find(el => el.id === id).quantity++
    setProductQty(added)
  }

  const removeQty = (id) => {
    let added = cart.find(el => el.id === id).quantity--
    if(added === 1) {
      let newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    }
    else {setProductQty(added)}
  }

  

  console.log(cart);

  const summaryPrice = cart.reduce( function (acc, obj) { return acc + obj.price * obj.quantity; }, 0 )

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        addProductToCart, 
        removeProductFromCart, 
        summaryPrice, 
        setProductQty, 
        addQty,
        removeQty,
        getSize,
        size
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
