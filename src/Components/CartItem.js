import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";

function CartItem(props) {
  let {item} = props;
  let [products, setProducts] = useState([]);
  let {removeFromCart} = useShoppingCart();
  let product = null;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100").then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);
  

  if(products.length !=0 )
    product = products.products.find((el) => el.id == item.id);


  return (
    <>
      {
        product &&
        <div className="border-bottom pb-3 d-flex justify-content-between align-items-center text-start mb-3">
        <div className="d-flex gap-2 align-items-center">
          <img
            src={product.images[0]}
            className="img-fluid"
            style={{ width: "120px", height: "75px"}}
          />
          <div>
            <h6> {product.title}</h6>
            <p className="text-muted">
              ${product.price}<span className="text-primary"> x{item.quantity}</span>
            </p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <h6>${item.quantity * product.price}</h6>
          <button
            className="btn btn-outline-danger p-0 d-flex align-items-center justify-content-center"
            style={{ width: "25px", height: "25px" }}
            onClick={() => {removeFromCart(item.id)}}
          >
            X
          </button>
        </div>
      </div>
      }
    </>
  );
}

export default CartItem;
