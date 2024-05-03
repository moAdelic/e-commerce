import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";


function Navbar() {
  let [categories, setCategories] = useState([]);
  let {cartQuantity} = useShoppingCart();


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);


  let navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();

    let value = e.target.productName.value;

    navigate("/search/" + value);

  };
    
    
    return (
      <>
      <nav className="navbar navbar-expand-md bg-white sticky-top shadow-lg">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand fs-3 text-primary fw-bold me-5" to="/">
            Brand<span className="text-warning">Store</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <form
              className="d-flex me-4 w-100 my-3 my-md-0"
              role="search"
              onSubmit={(ev) => search(ev)}
            >
              <input
                className="form-control me-2 w-75"
                type="search"
                name="productName"
                placeholder="Search by name"
                spellCheck="false"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>


            <div className="position-relative m-auto" style={{width: "fit-content"}}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className=" fs-3 btn btn-primary rounded-pill d-block m-auto mt-3 m-md-0"
                data-bs-target="#offcanvasExample"
                data-bs-toggle="offcanvas"
              />

              <span
                className="position-absolute bg-danger text-white text-center rounded-circle"
                style={{
                  minWidth: "25px",
                  minHeight: "25px",
                  lineHeight: "25px",
                  bottom: "-10px",
                  right: "-10px",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
                data-bs-target="#offcanvasExample"
                data-bs-toggle="offcanvas"
              >
                {cartQuantity}
              </span>
            </div>

            <div className=" dropdown m-auto" style={{ width: "fit-content" }}>
              <button
                className="btn btn-sm btn-primary dropdown-toggle ms-md-4 mt-4 mt-md-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu dropdown-menu-dark ">
                {categories.map((cat) => (
                  <Link to={`/${cat}`} className="dropdown-item" key={cat}>
                    {cat}
                  </Link>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

