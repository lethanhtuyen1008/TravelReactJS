import React from "react";
import { Button, Row, Col, Card } from "antd";
import CurrencyFormat from "react-currency-format";

const CheckoutSuccess = props => {
    return (
      <Row type="flex" justify="center">
        <Col xl={12} lg={12} md={12} xs={24} sm={24}>
          <Card className="gx-box-shadow">
            <div className="gx-media gx-align-items-center gx-mb-4">
              <div className="gx-mr-3">
                <img src={require("assets/images/file-one.png")} width="100px" height="100px" alt="flying" />
              </div>
              <div className="gx-media-body">
                <h2 className="gx-mb-1">THANH TOÁN THÀNH CÔNG</h2>
                <p className="gx-text-grey gx-mb-0">
                  Đơn hàng: #123
                </p>
              </div>
            </div>
            <p className="gx-mb-2">
              Xin chân thành cảm ơn khách hàng: Nguyễn Văn A
            </p>
            <p className="gx-mb-2">
              Quý khách đã thanh toán đơn hàng thành công.
            </p>
            <p className="gx-mb-2">
              Tổng giá trị đơn hàng:{" "}
              <CurrencyFormat
                value={2000000}
                suffix="đ"
                thousandSeparator={true}
                displayType="text"
              />
            </p>
            <Button
              type="primary"
              href="/"
              className="gx-mb-1 gx-mt-4"
            >
              Back home
            </Button>
          </Card>
        </Col>
      </Row>
  )
}
export default (CheckoutSuccess);
