import laptopimg from "../assets/laptops.jpg";
import introimg from "../assets/intro.jpg";
import accessoriesimg from "../assets/accessories.jpg";

import "../css/Slideshow.css";

function Slideshow() {
  return (
    <div
      id="demo"
      className="carousel slide"
      data-bs-ride="true"
      data-bs-theme="light"
      data-interval="2000"
      data-wrap="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={introimg}
            alt="Welcome!"
            className="d-block w-100 fixed-size img-fade"
          />
          <div className="carousel-caption d-none d-lg-block text-light ">
            <h2>Welcome to TechShop!</h2>
            <p>Great deals at your fingertips.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={laptopimg}
            alt="Laptops"
            className="d-block w-100 fixed-size img-fade"
          />
          <div className="carousel-caption d-none d-lg-block text-light">
            <h2>Discover endless saving with our referral program</h2>
            <p>
              Invite a friend to sign up and both of you will get a 10% off
              discount on your next purchase!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={accessoriesimg}
            alt="Accessories"
            className="d-block w-100 fixed-size img-fade"
          />
          <div className="carousel-caption d-none d-lg-block text-light">
            <h2>Shop our wide range of accessories</h2>
            <p>Affordable, convenient, and stylish</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Slideshow;
