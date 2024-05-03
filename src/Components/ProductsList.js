import './ProductsList.css'
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100").then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <>
      <div className="products-list my-5">
        <h1 className="text-primary text-center my-5">All Products</h1>
        <div className="container">
          { products.length != 0 ?  products.products.map((product) => {
            return <Product product={product} key={product.id} />
          }) : <h1>Loading</h1> } 
        </div>
      </div>
    </>
  );
}

export default ProductsList;