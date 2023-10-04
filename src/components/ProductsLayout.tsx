import "../css/Product.css";
import { useState } from "react";
import { useShopCart, ProductSearchProps } from "../ShopContext";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  specs: {};
  desc: string;
  imgUrl: string[];
}

function ProductLayout({ id, name, desc, imgUrl, price, specs }: ProductProps) {
  const { addItems, removeItems, retreiveItemCount } = useShopCart();
  const [count, setCount] = useState(retreiveItemCount(id));

  const append_product = () => {
    if (count > 10) {
      return;
    }
    setCount(Math.min(10, count + 1));
    if (count < 10) {
      addItems({ id: id, count: count } as ProductSearchProps);
    }
  };

  const remove_product = () => {
    if (count < 0) {
      return;
    }
    setCount(Math.max(0, count - 1));
    if (count > 0) {
      removeItems({ id: id, count: count } as ProductSearchProps);
    }
  };

  let badges: any[] = [];

  for (const [key, value] of Object.entries(specs)) {
    key;
    if (typeof value == "object") {
      continue;
    }
    badges.push(value);
  }

  return (
    <div className="card product" id={id.toString()} key={id.toString()}>
      <img
        src={imgUrl[0]}
        className="card-img-top img-fluid product-img"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>Price: {(price * 1000).toString() + "đ"}</p>
        <p>
          {badges.map((items) => (
            <span className="badge bg-secondary m-1" key={items.name}>
              {items}
            </span>
          ))}
        </p>
        <div className="container-fluid align-middle">
          <p className="card-text">{desc}</p>
          <div className="btn-sm">
            <button
              type="button"
              className="btn btn-secondary btn-sm pr-5"
              onClick={append_product}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={remove_product}
            >
              -
            </button>
            <span className="px-3">{count}</span>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={append_product}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
