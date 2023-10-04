import Breadcrumb from "./Helpers/Breadcrumb";
import myJson from "../data/all_products.json";
import { useShopCart } from "../ShopContext";
import ProductLayoutCart from "./ProductsLayoutCart";

function Cart() {
  const { retreiveItemCount } = useShopCart();

  let filteredProducts = myJson.filter(
    (item) => retreiveItemCount(item.id) > 0
  );
  console.log(filteredProducts);

  let totalcost: number = 0;
  filteredProducts.forEach((product) => {
    totalcost += product.price * 1000 * retreiveItemCount(product.id);
  });

  filteredProducts = filteredProducts.filter(
    (product) => retreiveItemCount(product.id) > 0
  );

  return (
    <div className="container pt-5 mt-2">
      <Breadcrumb />
      <h1>My Cart</h1>
      <p>Total: {totalcost}</p>
      <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-3">
        {filteredProducts.map((item) =>
          retreiveItemCount(item.id) > 0 ? (
            <ProductLayoutCart
              id={item.id}
              price={item.price}
              specs={item.specs}
              name={item.name}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={item.id}
            />
          ) : null
        )}
        {filteredProducts.length ? null : (
          <div className="container-fluid text-secondary py-5">
            <h3>Looks a bit empty here...</h3>
            <p>Fill your cart with items!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
