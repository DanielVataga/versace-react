import React from "react";
import { useParams } from "react-router-dom";
import { SHOP_DATA } from "../../shop-data";

import "./product-page.styles.scss";

const ProductPage = () => {
  const SizesGuide = [37, 38, 39, 40, 41, 42, 43];
  const { id } = useParams();

  const product = SHOP_DATA.find((el) => id == el.id);

  return (
    <div className="ProductPageWrapper">
      <div className="ProductImageWrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="ProductContentWrapper">
        <div className="ProdcutContent">
          <div className="ProductTitle">
            <h3>{product.name}</h3>
          </div>

          <div className="ProductPrice">
            <span>—{product.price} $</span>
          </div>

          <div className="ProductDescription">
            <p>
              {product.description}
            </p>
          </div>

          <ul className="SizesGuide">
            {SizesGuide.map((size) => (
              <li>{size}</li>
            ))}
          </ul>

          <button className="AddToBag">Add To Bag</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
