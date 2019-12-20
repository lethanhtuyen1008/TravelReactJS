import React, { useMemo } from "react";
import { Row, Col, Input, Button, message } from "antd";
import CurrencyFormat from "react-currency-format";
import ItemCart from "./itemCheck";
import "./checkout.less";

const CheckOutInfo = React.memo(props => {
  const { carts, listShop, payment, addressDeli, loadingBTN } = props;

  /**
   * @function getListItemCartByShopID
   * @param {*} carts carts array
   * @param {*} shopID id shop
   */
  const getListItemCartByShopID = (carts, shopID) => {
    return carts.map((cart, index) => {
      if (cart.shopID === shopID) {
        return <ItemCart cart={cart} key={index} />;
      }
    });
  };

  /**
   * @function showListCartItem
   * @summary loop cart array and show items
   */
  const showListCartItem = (carts, listShop) => {
    let result = <span className="gx-text-red">Chưa có sản phẩm nào</span>;
    if (listShop.length > 0) {
      result = listShop.map((shop, index) => {
        return (
          <div
            key={index}
            className="row-right-checkout gx-d-flex gx-flex-column gx-pb-2 gx-mb-2 gx-border-bottom"
          >
            <span className="gx-d-block gx-text-grey gx-font-size-12">
              - Sản phẩm của shop
              <strong className="gx-text-primary"> {shop.shopName}</strong>
            </span>
            {getListItemCartByShopID(carts, shop.shopID)}
          </div>
        );
      });
    }
    return result;
  };
  const listItemCartByShopID = useMemo(
    () => showListCartItem(carts, listShop),
    [carts, listShop]
  );
  /**
   * @function calculatorTotalCart
   * @param {*} carts
   * @summary calculation total cart
   * @output total price, priceOC, ocPoint
   */
  const calculatorTotalCart = carts => {
    let price = 0,
      ocPoint = 0;
    if (carts.length > 0) {
      price = carts.reduce(
        (sum, item) => (sum += (item.price + item.ocPrice) * item.quantity),
        0
      );
      ocPoint = carts.reduce(
        (sum, item) => (sum += item.ocPoint * item.quantity),
        0
      );
    }
    return {
      price,
      ocPoint
    };
  };
  const totalPrice = useMemo(() => calculatorTotalCart(carts), [carts]);

  /**
   * @function onSubmitPayment
   * @summary finish payment
   */
  const onSubmitPayment = () => {
    if (carts.length > 0) {
      if (addressDeli.length <= 0) {
        message.error("Chưa có địa chỉ giao hàng");
      } else {
        const data = {
          paymentMethod: payment,
          discountCode: null,
          discountPrice: 0,
          status: 0,
          buyer: {
            name: "vinh phuc",
            address: "123 abc",
            email: "abc@gmail.com",
            phone: "1234",
            country: "Vietnam",
            provinceID: 207
          },
          reciever: {
            // name: addressDeli.full_name,
            // address: addressDeli.address,
            // email: addressDeli.email,
            // phone: addressDeli.phone,
            // country: "vn",
            // provinceID: addressDeli.province
            name: "Test",
            address: "address",
            email: "email@gmail.com",
            phone: "09876543321",
            country: "Vietnam",
            provinceID: 207
          },
          items: carts
        };
        props.onPayment(data);
      }
    } else message.error("Không có sản phẩm nào để thanh toán");
  };
  return (
    <div>
      <div className="gx-page-title">
        <h5 className="gx-border-bottom gx-text-red gx-p-3 gx-font-weight-bold">
          Thông tin đơn hàng
        </h5>
      </div>
      {/* for loop item cart */}
      {listItemCartByShopID}
      {/* end for loop */}
      <Row className="row-right-checkout st-margin-right gx-border-bottom">
        <Col className="right-right-checkout" span={14}>
          <strong>Tạm tính: </strong>
        </Col>
        <Col span={10} className="left-right-price-tamtinh">
          <CurrencyFormat
            value={totalPrice.price}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"đ"}
          />
          {totalPrice.ocPoint > 0 ? (
            <CurrencyFormat
              value={totalPrice.ocPoint}
              displayType={"text"}
              thousandSeparator={true}
              prefix=" + "
              suffix={" OC"}
            />
          ) : null}
        </Col>
        <Col className="right-right-checkout" span={14}>
          <strong>Phí vận chuyển: </strong>
        </Col>
        <Col span={10} className="left-right-price-tamtinh">
          <CurrencyFormat
            value={200000}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" VNĐ"}
          />
        </Col>
      </Row>
      <div className="st-code-promotion gx-mt-3 gx-mb-3 gx-border-bottom">
        <span className="gx-d-block gx-mb-2">Mã giảm giá</span>
        <Input.Search
          placeholder="Nhập mã giảm giá"
          enterButton="Áp dụng"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
      <div className="st-code-promotion gx-mt-3 gx-mb-3 gx-border-bottom gx-pb-3">
        <span className="gx-d-block gx-mb-2">Ghi chú đơn hàng</span>
        <Input.TextArea
          className="gx-no-rounded"
          rows={4}
          placeholder="Bạn có ghi chú gì cho đơn hàng này?"
        />
      </div>
      <Row className="row-right-checkout thanhtien gx-pb-4">
        <Col className="right-right-checkout" span={14}>
          <strong>THANH TOÁN:</strong>
        </Col>
        <Col span={10} className="left-right-price-tamtinh ">
          <div className="thanhtien-price">
            <CurrencyFormat
              value={totalPrice.price + 200000}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"đ"}
            />
            {totalPrice.ocPoint > 0 ? (
              <CurrencyFormat
                value={totalPrice.ocPoint}
                displayType={"text"}
                thousandSeparator={true}
                prefix=" + "
                suffix={" OC"}
              />
            ) : null}
          </div>
          <div className="vat-checkout">(Đã bao gồm thuế VAT)</div>
        </Col>
      </Row>
      <div className="end-checkout gx-mb-3">
        <Button
          onClick={onSubmitPayment}
          loading={loadingBTN}
          className="gx-btn gx-btn-red gx-full-width gx-no-rounded"
        >
          TIẾN HÀNH ĐẶT HÀNG
        </Button>
      </div>
    </div>
  );
});
export default CheckOutInfo;
