import React from "react";
import { Icon, Table, Row, Col, Button, Card } from "antd";

const NapOC = props => {
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center"
    },
    {
      title: "Order ID",
      dataIndex: "order_id",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.order_id - b.order_id,
      align: "center"
    },
    {
      title: "Gía trị",
      dataIndex: "order_value"
    },
    {
      title: "Tên người mua",
      dataIndex: "buyer_name",
      sorter: (a, b) => a.Discount - b.Discount,
      align: "center"
    },
    {
      title: "Trạng thái",
      dataIndex: "Status",
      align: "center"
    },
    {
      title: "Ngày giao dịch",
      dataIndex: "transaction_time",
      align: "center"
    }
  ];
  const data = [
    {
      key: "1",
      order_id: "ICB00225",
      order_value: "1,300 USD",
      buyer_name: "khách hàng",
      Status: "New",
      transaction_time: "19/09/2019"
    },
    {
      key: "2",
      order_id: "ICB00225",
      order_value: "1,300 USD",
      buyer_name: "khách hàng",
      Status: "New",
      transaction_time: "19/09/2019"
    },
    {
      key: "3",
      order_id: "ICB00225",
      order_value: "1,300 USD",
      buyer_name: "khách hàng",
      Status: "New",
      transaction_time: "19/09/2019"
    },
    {
      key: "4",
      order_id: "ICB00225",
      order_value: "1,300 USD",
      buyer_name: "khách hàng",
      Status: "New",
      transaction_time: "19/09/2019"
    },
    {
      key: "5",
      order_id: "ICB00225",
      order_value: "1,300 USD",
      buyer_name: "khách hàng",
      Status: "New",
      transaction_time: "19/09/2019"
    }
  ];
  return (
    <Row>
      <Col xs={24} md={8} className="padding-top">
        <div className="orderoc-col-1 gx-box-shadow">
          <p>Số OC hiện tại</p>
          <div className="oc-now">40000</div>
          <Button type="danger">Nạp tiền</Button>
        </div>
      </Col>
      <Col xs={24} className="orderoc-col-2">
        <Card
          className="gx-card-widget"
          title={
            <h2 className="h4 gx-text-capitalize gx-mb-0">Lịch sử giao dịch</h2>
          }
          extra={<p className="gx-text-primary gx-mb-0 gx-pointer"></p>}
        >
          <div className="gx-table-responsive">
            <Table
              className="gx-table-no-bordered"
              columns={columns}
              dataSource={data}
              pagination={true}
              bordered={false}
              style={{ backgound: "white" }}
              size="small"
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default NapOC;
