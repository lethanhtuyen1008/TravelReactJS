import { Col, Row, Avatar } from "antd";
import "./checkout.less";
import CurrencyFormat from "react-currency-format";
import React, { Component } from "react";

export default class itemCheck extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="gx-d-block gx-mt-2 gx-pb-2 gx-border-bottom gx-no-border-bottom-last-child">
        <div className="gx-d-flex gx-flex-row gx-justify-content-start">
          <div className="l-item gx-mr-3">
            <Avatar className="gx-border" shape="square" size={64} src={process.env.IMG_URL+cart.image} />
          </div>
          <div className="r-item gx-d-flex gx-flex-column">
            <div className="gx-text-red gx-font-weight-bold gx-pb-2">
              <span>{cart.quantity} x </span>
              {cart.typePrice === 1 ? (
                <CurrencyFormat
                  value={cart.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"đ"}
                />
              ) : (
                <>
                  <CurrencyFormat
                    value={cart.ocPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"đ + "}
                  />
                  <CurrencyFormat
                    value={cart.ocPoint}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" OC"}
                  />
                </>
              )}
            </div>
            <div className="name-product-checkout">{cart.title}</div>
          </div>
          
        </div>
      </div>
    );
  }
}
