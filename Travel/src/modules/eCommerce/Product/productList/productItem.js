import React from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { getProductToBuy, showSelectPrice } from "../redux/actions";
import CurrencyFormat from "react-currency-format";
import "./product.less";

const ProductItem = React.memo(({ image, title, ocPrice, ocPoint, price, id, seller }) => {
  const dispatch = useDispatch();
  const noImage = require("assets/images/notFound.png");
  /**
   * @function showSelectPriceToBuy
   * @param {data} product detail
   * @summary show popup select price to buy
   */
  const showSelectPriceToBuy = e => {
    e.preventDefault();
    const product = {
      image,
      title,
      ocPrice,
      ocPoint,
      price,
      id,
      seller
    };
    dispatch(getProductToBuy({ product, quantity: 1 }));
    dispatch(showSelectPrice(true));
  };
  return (
    <div className="product-item product-hover gx-background-white">
      <div className="discount-item">
        <p className="discount-number">30%</p>
        <p className="discount-text gx-font-size-12">giảm</p>
      </div>
      <div className="product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-grid-thumb-cover">
            <Link to={`/product/detail/${id}`}>
              <img
                alt="product"
                src={process.env.IMG_URL + image}
                onError={e => (e.target.src = noImage)}
              />
            </Link>
          </span>
        </div>
      </div>
      <div className="gx-product-footer">
        <div className="footer">
          <Link to={`/product/detail/${id}`}>
            <p className="product-name">{title}</p>
          </Link>
          <div className="product-price">
            <p className="first-price">
              <CurrencyFormat
                value={ocPrice}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" VNĐ "}
              />
              +{" "}
              <CurrencyFormat
                value={ocPoint}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" OC"}
              />
            </p>
            <p className="second-price">
              hoặc{" "}
              <CurrencyFormat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" VNĐ"}
              />
            </p>
          </div>
          <p className="product-sold">Đã bán 1k+</p>
          <div className="product-button">
            <a
              onClick={e => showSelectPriceToBuy(e)}
              className="add-to-cart gx-font-size-12 gx-btn gx-btn-red"
            >
              Mua
            </a>
            <Link
              className="gx-btn gx-font-size-12"
              style={{borderColor: "#28aaeb", color: "#28aaeb"}}
              to={`/product/detail/${id}`}
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductItem;
