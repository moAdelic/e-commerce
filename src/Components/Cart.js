import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  let {cartItems} = useShoppingCart();
  let [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100").then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);

  console.log(cartItems)


  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {
            cartItems.map((item) => {
              return <CartItem key={item.id} item={item}/>
            })
          }
          
          {
            products &&
            <h2 className="text-center text-primary">
            Total: $
            {
              cartItems.reduce((total, cartItem) => {
                let item = products.products?.find((el) => el.id == cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            }
            </h2>
            }
          
        </div>
      </div>
    </>
  );
}

export default Cart;
