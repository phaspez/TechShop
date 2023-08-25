import "./App.css";
import Header from "./components/Header";
import ErrorPage from "./components/404";
import Slideshow from "./components/Slideshow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductGroup from "./components/ProductGroup";

import "bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Slideshow />} />
          <Route
            path="all-products"
            element={<ProductGroup searchCriteria="" pageName="All Products" />}
          />
          <Route
            path="all-products/phones"
            element={<ProductGroup searchCriteria="phone" pageName="Phones" />}
          />
          <Route
            path="all-products/laptops"
            element={
              <ProductGroup searchCriteria="laptop" pageName="Laptops" />
            }
          />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
