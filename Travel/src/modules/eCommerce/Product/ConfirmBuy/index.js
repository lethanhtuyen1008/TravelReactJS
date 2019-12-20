import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import SweetAlerts from "react-bootstrap-sweetalert";
import CurrencyFormat from "react-currency-format";
import { Radio } from "antd";
import { withRouter } from "react-router-dom";
import "./confirm-buy.less";
import { addToCart } from "../helpers";

const Index = React.memo(props => {
  const { active, productToBuy } = props,
    [typePrice, setTypePrice] = useState(1),
    [msgAler, setMsgAlert] = useState(null),
    { authUser, ocPoint } = useSelector(state => state.AuthReducer),
    { carts } = useSelector(state => state.CartReducer),
    dispatch = useDispatch();


  /**
   * @function onSelectPrice
   * @summary select price before buy
   */
  const onSelectPrice = useCallback(e => {
    setTypePrice(e.target.value);
  });

  /**
   * @function checkOCPoint
   * @summary check point before buy
   */
  const checkOCPoint = (cartData, ocPointCurrent, ocPointProduct) => {
    if (cartData.length > 0) {
      const totalOCPoint = cartData.reduce(
        (sum, item) => (sum += parseInt(item.ocPoint) * item.quantity),
        0
      );
      if (ocPointCurrent - totalOCPoint >= ocPointProduct) return true;
      return false;
    }
  };
  /**
   * @function handleAddToCart
   * @summary add to cart
   * @param {*} typePrice type price selected
   * @param {*} data data for add to cart
   */
  const handleAddToCart = (
    typePrice,
    dataAddCart,
    cartData,
    ocPointCurrent,
    ocPointProduct
  ) => {
    let flag = true;

    if (typePrice === 2) {
      if (!checkOCPoint(cartData, ocPointCurrent, ocPointProduct)) {
        flag = false;
      }
    }

    if (flag) {
      const cart = addToCart(dataAddCart);
      if (cart) {
        props.onAddToCart(cart);
        message.success("Sản phẩm đã được thêm vào giỏ");
      } else message.error("Có lỗi xảy ra");
      onCancelBuy();
      setMsgAlert(null);
    } else {
      setMsgAlert(true);
    }
  };
  /**
   * @function onBuyProduct
   * @param {*} data
   * @summary add product to cart
   */
  const onBuyProduct = () => {
    if (productToBuy) {
      let price = 0,
        ocPrice = 0,
        ocPointPr = 0;
      if (typePrice === 1) {
        price = parseInt(productToBuy.product.price);
      } else {
        ocPrice = parseInt(productToBuy.product.ocPrice);
        ocPointPr = parseInt(productToBuy.product.ocPoint);
      }
      const data = {
        product_id: productToBuy.product.id,
        title: productToBuy.product.title,
        image: productToBuy.product.image,
        quantity: productToBuy.quantity,
        shopName: !!productToBuy.product.seller.shop_name
          ? productToBuy.product.seller.shop_name
          : "Đang cập nhật",
        shopID: productToBuy.product.seller.id,
        typePrice,
        price,
        ocPrice,
        ocPoint: ocPointPr
      };
      handleAddToCart(typePrice, data, carts, ocPoint, ocPointPr);
    } else {
      message.error("Có lỗi xảy ra");
    }
  };

  /**
   * @function onCancelBuy
   * @summary cancel buy product
   */
  const onCancelBuy = () => {
    setTypePrice(1);
    setMsgAlert(null);
    props.onShowConfirm(false)
  };

  /**
   * @function showProductPrice
   * value = 1: pure price VND
   * value = 2: price VND + oc point
   */
  const showProductPrice = data => {
    let result = null;
    if (data) {
      result = (
        <>
          <Radio value={1}>
            <CurrencyFormat
              value={data.product.price ? data.product.price : 0}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" VNĐ"}
            />
          </Radio>
          <Radio disabled={!!authUser ? false : true} value={2}>
            <CurrencyFormat
              value={data.product.ocPrice ? data.product.ocPrice : 0}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" VNĐ + "}
            />
            <CurrencyFormat
              value={data.product.ocPoint ? data.product.ocPoint : 0}
              displayType={"text"}
              thousandSeparator={true}
              suffix={" OC"}
            />
            {!!authUser ? null : (
              <>
                <br />
                <i className="gx-font-size-12 gx-text-grey">
                  <a onClick={e => onRedirectSignin(e)}>Đăng nhập</a> để sử dụng
                  OC
                </i>
              </>
            )}
            {!!msgAler ? (
              <>
                <br />
                <i className="gx-font-size-12 gx-text-red">
                  Không đủ OC Point, nạp thêm tại
                  <a onClick={e => onRedirectOcPoint(e)}> đây</a>
                </i>
              </>
            ) : null}
          </Radio>
        </>
      );
    }
    return result;
  };

  /**
   * @function onRedirectSignin
   * @summary close modal confirm and redirect to account/signin
   */
  const onRedirectSignin = e => {
    e.preventDefault();
    onCancelBuy();
    props.history.push("/account/signin");
  };
  /**
   * @function onRedirectOcPoint
   * @summary close modal confirm and redirect to account/oc-point
   */
  const onRedirectOcPoint = e => {
    e.preventDefault();
    onCancelBuy();
    props.history.push("/account/oc-point");
  };
  return (
    <SweetAlerts
      show={active}
      info
      showCancel
      confirmBtnText="Tiếp tục"
      cancelBtnText="Mua sau"
      confirmBtnBsStyle="primary"
      title="Chọn loại giá để mua!"
      onConfirm={onBuyProduct}
      onCancel={onCancelBuy}
    >
      <Radio.Group
        onChange={onSelectPrice}
        defaultValue={typePrice}
        className="radio-price"
      >
        {showProductPrice(productToBuy)}
      </Radio.Group>
    </SweetAlerts>
  );
});

export default withRouter(Index);
