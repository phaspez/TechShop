import { Link } from "react-router-dom";

export interface WebHierachyProps {
  pathName: String[];
  path: String[];
}

function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={"/all-products"} className="disabled">
            All Products
          </Link>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
