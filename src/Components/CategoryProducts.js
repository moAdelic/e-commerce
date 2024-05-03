import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./Product";

import './ProductsList.css'

function CategoryProducts() {
  let {category} = useParams();
  let [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch("https://dummyjson.com/products/category/"+category).then((res) => res.json())
    .then((data) => setProducts(data));
  }, [category])
  
  return(
    <>
      <div className="products-list">
        <h1 className="text-center text-primary my-5">{category}</h1>
        <div className="container">
        { products.length != 0 ?  products.products.map((product) => {
            return <ProductDetails product={product} key={product.id} />
      }) : <h1>Loading</h1> } 
        </div>
      </div>
    </>
  )
}

export default CategoryProducts;