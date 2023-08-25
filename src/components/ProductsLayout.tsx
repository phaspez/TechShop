import "../css/Product.css";

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  specs: {};
  desc: string;
  imgUrl: string[];
}

function ProductLayout({ name, desc, imgUrl, price, specs }: ProductProps) {
  let badges: any[] = [];

  for (const [key, value] of Object.entries(specs)) {
    key;
    if (typeof value == "object") {
      continue;
    }
    badges.push(value);
  }

  return (
    <div className="card product">
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
            <span className="badge bg-secondary m-1">{items}</span>
          ))}
        </p>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
}

export default ProductLayout;
