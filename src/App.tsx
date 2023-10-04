import "./App.css";
import Header from "./components/Header";
import ErrorPage from "./components/404";
import Slideshow from "./components/Slideshow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductGroup from "./components/ProductGroup";
import { ShopContextProvider } from "./ShopContext";
import Cart from "./components/Cart";
import SideScrollableGroup from "./components/SideScrollable";

import "bootstrap";

function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slideshow />
                  <SideScrollableGroup
                    searchCriteria=""
                    pageName="Today's offer"
                  />
                </>
              }
            />
            <Route
              path="all-products"
              element={
                <ProductGroup searchCriteria="" pageName="All Products" />
              }
            />
            <Route
              path="all-products/phones"
              element={
                <ProductGroup searchCriteria="phone" pageName="Phones" />
              }
            />
            <Route
              path="all-products/laptops"
              element={
                <ProductGroup searchCriteria="laptop" pageName="Laptops" />
              }
            />
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
