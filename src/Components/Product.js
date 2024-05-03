import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";

function Product(props) {
  const { product } = props;

  const {increaseQuantity, getItemQuantity, decreaseQuantity, removeFromCart} = useShoppingCart();

  let quantity = getItemQuantity(product.id);


  return (
    <div className="card" key={product.id}>
      <img
        src={product.images[0]}
        className="card-img-top img-fluid mb-3 border-bottom"
        alt={"Text"}
        style={{ height: "320px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary">{product.title}</h5>
        <h5>${product.price}</h5>
        <p className="card-text mb-4" title={product.description} style={{minHeight: "50px", marginBottom: ""}}>
          {product.description.length > 50
            ? product.description.slice(0, 51) + "..."
            : product.description}
        </p>
        {quantity == 0 ? (
          <button className="btn btn-primary fw-bold" style={{marginTop: "54px"}} onClick={()=> {increaseQuantity(product.id)}}>
            Add To Cart
          </button>
        ) : (
          <div className="text-center">
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <button className="btn btn-primary" onClick={()=> {decreaseQuantity(product.id)}}>-</button>
              <span className="fs-4">{quantity} in cart</span>
              <button className="btn btn-primary" onClick={()=> increaseQuantity(product.id)}>+</button>
            </div>
            <button className="btn btn-danger mt-3" onClick={()=> {removeFromCart(product.id)}}>Remove</button>
          </div>
        )}
      </div>
      <Link
        to={`/products/${product.id}`}
        className="details btn btn-sm btn-success text-white fw-bold position-absolute"
      >
        Details
      </Link>
    </div>
  );
}

export default Product;
