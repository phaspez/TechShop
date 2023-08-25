import { Link } from "react-router-dom";

function Header() {
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
            <li className="nav-item">
              <Link to={"/all-products"} className="nav-link">
                All Products
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Phones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to={"/all-products/phones/samsung"}
                    className="dropdown-item"
                  >
                    Samsung
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/all-products/phones/oppo"}
                    className="dropdown-item"
                  >
                    Oppo
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/all-products/phones"} className="dropdown-item">
                    All Phones
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Laptops
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to={"/all-products/laptops/dell"}
                    className="dropdown-item"
                  >
                    Dell
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/all-products/laptops/lenovo"}
                    className="dropdown-item"
                  >
                    Lenovo
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/all-products/laptops"} className="dropdown-item">
                    All Laptops
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/all-products/accessories"} className="nav-link">
                Accessories
              </Link>
            </li>
          </ul>
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
