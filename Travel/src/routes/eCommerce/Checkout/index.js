import React, { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, message } from "antd";
import {
  onAddAddressDeli,
  onSelectPaymentMethod,
  onPayment
} from "modules/eCommerce/Checkout/redux/actions";
import { getWard, resetWard } from "base/redux/General/GeneralAction";
import DeliveryInfo from "modules/eCommerce/Checkout/DeliveryInfo";
import CheckOutInfo from "modules/eCommerce/Checkout/CheckOutInfo";

const Index = (props) => {
  console.log(props)
  const { carts } = useSelector(state => state.CartReducer),
    { addressDeli, payment } = useSelector(state => state.CheckOutReducer),
    { listProvince, listWard, loadingBTN } = useSelector(state => state.GeneralReducer),
    dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("ADDRESS")) {
      dispatch(onAddAddressDeli(JSON.parse(localStorage.getItem("ADDRESS"))));
    }
  }, []);

  /**
   * @function getListShopByShopId
   * @param {*} carts
   * @summary filter shop duplicate by shopID
   */
  const getListShopByShopId = (arrayData, keys) => {
    const array = arrayData
      .map(value => value[keys]) // lấy ra mảng chỉ có "keys"
      .map((value, i, final) => final.indexOf(value) === i && i) // lấy ra mảng chứa các "keys" unique
      .filter(e => arrayData[e])
      .map(e => arrayData[e]); // lọc và map lại mảng dựa theo "keys"
    return array;
  };
  const listShop = getListShopByShopId(carts, "shopID");

  const dispatchOnPayment = data => dispatch(onPayment({
      data,
      cbError: () => {
        message.error("Không thể tạo đơn hàng")
      },
      cbSuccess: () => {
        props.history.push("/checkout-success")
      }
    }))


  //render
  if (carts.length <= 0) {
    return <Redirect to="/" />;
  }
  return (
    <Row type="flex" justify="center" className="gx-mb-5">
      <Col className="gx-mb-3" span={23}>
        <div className="gx-page-title">
          <h3>THANH TOÁN ĐƠN HÀNG</h3>
        </div>
      </Col>

      <Col className="gx-mr-3" xl={14} lg={14} md={24} xs={24} sm={24}>
        <Row>
          <DeliveryInfo
            addressDeli={addressDeli}
            listShop={listShop}
            payment={payment}
            listProvince={listProvince}
            listWard={listWard}
            getWard={id => dispatch(getWard(id))}
            resetWard={() => dispatch(resetWard())}
            onAddAddressDeli={address => dispatch(onAddAddressDeli(address))}
            onSelectPaymentMethod={payment =>
              dispatch(onSelectPaymentMethod(payment))
            }
          />
        </Row>
      </Col>

      <Col
        className="gx-background-white gx-box-shadow"
        xl={8}
        lg={8}
        md={24}
        xs={24}
        sm={24}
      >
        <CheckOutInfo
          carts={carts}
          listShop={listShop}
          loadingBTN={loadingBTN}
          payment={payment}
          addressDeli={addressDeli}
          onPayment={dispatchOnPayment}
        />
      </Col>
    </Row>
  );
};

export default withRouter(Index);
