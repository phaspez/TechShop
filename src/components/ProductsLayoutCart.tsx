import "../css/Product.css";
import { useShopCart } from "../ShopContext";
import { useState } from "react";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  specs: {};
  desc: string;
  imgUrl: string[];
}

function ProductLayoutCart({
  id,
  name,
  //desc,
  imgUrl,
  price,
}: //specs,
ProductProps) {
  const { retreiveItemCount, addItems, removeItems } = useShopCart();
  let [count, setCount] = useState(retreiveItemCount(id));

  const append_product = () => {
    if (count > 10) {
      return;
    }
    setCount(Math.min(10, count + 1));
    addItems({ id: id, count: count });
  };

  const remove_product = () => {
    if (count < 0) {
      return;
    }
    setCount(Math.max(0, count - 1));
    if (count > 0) {
      removeItems({ id: id, count: count });
    }
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imgUrl[0]} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <small>
              {price * 1000} per item x{count}
            </small>
            <p className="card-text">
              <small className="text-body-secondary">
                Sub price: {1000 * price * count}
              </small>
            </p>
          </div>
          <div className="text-body-secondary">
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

export default ProductLayoutCart;
