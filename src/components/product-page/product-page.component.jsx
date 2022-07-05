import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { SHOP_DATA } from "../../shop-data";

import "./product-page.styles.scss";

const ProductPage = () => {
  const SizesGuide = [37, 38, 39, 40, 41, 42, 43];

  const { id } = useParams();
  const navigate = useNavigate();

  const product = SHOP_DATA.find((el) => id == el.id);

  const { cart, addProductToCart, getSize } = useContext(CartContext);
  // const cart = state.cart
  
  return (
    <div className="ProductPageWrapper">
      <div className="ProductPageContainer">
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
            <p>{product.description}</p>
          </div>

          <ul className="SizesGuide">
            {SizesGuide.map((size, i) => (
              <li key={i} onClick={() => getSize(size)} >{size}</li>
            ))}
          </ul>
          
          {!cart.find((el) => el.id == id) ? (
            <button
              className="AddToBag"
              onClick={() => addProductToCart(product)}
            >
              Add To Bag
            </button>
          ) : (
            <button className="CheckBag" onClick={() => navigate("/cart")}>
              To Cart
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductPage;
