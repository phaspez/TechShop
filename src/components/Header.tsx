import { Link } from "react-router-dom";
import { useShopCart } from "../ShopContext";

function Header() {
  const { getItemsCount } = useShopCart();
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          TechShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item" id="all">
              <Link to={"/all-products"} className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item dropdown" id="phones">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Phones
              </a>
              <ul className="dropdown-menu" id="samsung">
                <li>
                  <Link
                    to={"/all-products/phones/samsung"}
                    className="dropdown-item"
                  >
                    Samsung
                  </Link>
                </li>
                <li id="oppo">
                  <Link
                    to={"/all-products/phones/oppo"}
                    className="dropdown-item"
                  >
                    Oppo
                  </Link>
                </li>
                <li id="div">
                  <hr className="dropdown-divider" />
                </li>
                <li id="all=phones">
                  <Link to={"/all-products/phones"} className="dropdown-item">
                    All Phones
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown" id="laptops">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Laptops
              </a>
              <ul className="dropdown-menu">
                <li id="dell">
                  <Link
                    to={"/all-products/laptops/dell"}
                    className="dropdown-item"
                  >
                    Dell
                  </Link>
                </li>
                <li id="lenovo">
                  <Link
                    to={"/all-products/laptops/lenovo"}
                    className="dropdown-item"
                  >
                    Lenovo
                  </Link>
                </li>
                <li id="all-laptops">
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/all-products/laptops"} className="dropdown-item">
                    All Laptops
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item" id="accessories">
              <Link to={"/all-products/accessories"} className="nav-link">
                Accessories
              </Link>
            </li>
          </ul>
          <label htmlFor="" className="px-2">
            {"In cart: " + getItemsCount()}
          </label>
          <Link to={"/cart"} className="btn btn-primary mx-1">
            Checkout
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
