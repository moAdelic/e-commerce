import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";

function SearchProducts() {
  let [products, setProducts] = useState([]);
  let {val} = useParams()


  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=" + val)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [val]);


  return (
    <>
        <div className="products-list my-5 text-center">
            <h1 className="text-primary text-center my-5">{products.length !== 0 && val}</h1>
            
            <div className="container">
              {
              products.length !== 0 &&
                products.products.map((product) => {
                  return <Product product={product} key={product.id} />;
                })

              }
              
            </div>
            {
              <Link to={'/'} className="btn btn-primary mt-5">Back To Home</Link>
            }
        </div>
    </>
  );
}

export default SearchProducts;
