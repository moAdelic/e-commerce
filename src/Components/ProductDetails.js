import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";

function ProductDetails() {
  let [product, setProduct] = useState([]);
  let { id } = useParams();

  const {increaseQuantity, getItemQuantity, decreaseQuantity, removeFromCart} = useShoppingCart();

  let quantity = getItemQuantity(product.id);


  const zoom = (e) => {
    let zoomer = e.currentTarget;
    let x = (e.pageX / zoomer.offsetWidth) * 100;
    let y = (e.pageY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundImage = `url(${product.images[0]})`;
    zoomer.style.backgroundPosition = x - 25 + "% " + (y - 25) + "%";
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      {product.length != 0 && (
        <div
          className="card mx-auto my-4"
          key={product.id}
          to={`/${product.id}`}
          style={{ width: "650px", maxWidth: "100%" }}
        >
          <div
            className="image border border-bottom position-relative"
            onMouseMove={(ev) => zoom(ev)}
          >
            <img
              src={product.images[0]}
              className="card-img-top img- "
              alt={"Text"}
              style={{ height: "100%" }}
            />
          </div>
          <div className="card-body d-flex flex-column">
            <h4 className="card-title text-primary">{product.title}</h4>
            <h4>Brand: {product.brand}</h4>
            <h5>Price: ${product.price}</h5>
            <h6>Discount: {product.discountPercentage}</h6>
            <h6>Rating {product.rating}</h6>
            <p className="card-text mb-4">{product.description}</p>
            {quantity == 0 ? (
              <button
                className="btn btn-primary"
                style={{marginTop: "54px"}}
                onClick={() => {
                  increaseQuantity(product.id);
                }}
              >
                Add To Cart
              </button>
            ) : (
              <div className="text-center">
                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      decreaseQuantity(product.id);
                    }}
                  >
                    -
                  </button>
                  <span className="fs-4">{quantity} in cart</span>
                  <button
                    className="btn btn-primary"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
