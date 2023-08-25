import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="container-fluid pt-5 text-center">
      <h1 className="pt-5">Oops!</h1>
      <p className="pt-4">Sorry, an unexpected error has occurred.</p>
      <div className="container-fluid">
        <Link className="btn btn-primary m-2" to={"/"}>
          Go back to Homepage
        </Link>
        <Link className="btn btn-secondary m-2" to={"/all-products"}>
          ... or browse all of our products
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
