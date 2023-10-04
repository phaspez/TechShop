import Breadcrumb from "./Helpers/Breadcrumb";
import myJson from "../data/all_products.json";
import ProductLayout from "./ProductsLayout";

export interface ProductPageProps {
  pageName: string;
  searchCriteria: string | null;
}

function SideScrollableGroup({ pageName, searchCriteria }: ProductPageProps) {
  let filteredProducts = myJson.map((item) =>
    searchCriteria
      ? item.specs.tags.includes(searchCriteria)
        ? item
        : null
      : item
  );

  return (
    <div className="container pt-5 mt-2">
      <Breadcrumb />
      <h1>{pageName}</h1>

      <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 overflow-x">
        {filteredProducts.map((item) =>
          item ? (
            <ProductLayout
              id={item.id}
              price={item.price}
              specs={item.specs}
              name={item.name}
              desc={item.desc}
              imgUrl={item.imgUrl}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default SideScrollableGroup;
