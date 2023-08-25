import Breadcrumb from "./Helpers/Breadcrumb";
import myJson from "../data/all_products.json";
import ProductLayout from "./ProductsLayout";
import { styled } from "styled-components";

const StyledProductLayout = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
`;

export interface ProductPageProps {
  pageName: string;
  searchCriteria: string | null;
}

function ProductGroup({ pageName, searchCriteria }: ProductPageProps) {
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

      <StyledProductLayout className="container-fluid">
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
      </StyledProductLayout>
    </div>
  );
}

export default ProductGroup;
