import React, { useState } from "react";
import { Table, Icon, Modal, Button, Card } from "antd";
import View from "./View";

const History = () => {
  const [show, setShow] = useState(false);
  const [id, setID] = useState(0);
  const showInfoOrder = value => {
    setID(value);
    setShow(!show);
  };
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
      title: "Mã giảm giá",
      dataIndex: "PromotionCode",
      align: "center"
    },
    {
      title: "Giảm giá",
      dataIndex: "Discount",
      sorter: (a, b) => a.Discount - b.Discount,
      align: "center"
    },
    {
      title: "Tổng tiền",
      dataIndex: "Total",
      align: "center"
    },
    {
      title: "Trạng thái",
      dataIndex: "Status",
      align: "center"
    },
    {
      title: "Ngày bán",
      dataIndex: "CreateAt",
      align: "center"
    },
    {
      title: "",
      dataIndex: "",
      align: "center",
      render: (text, record) => (
        <a>
          <Icon type="eye" onClick={() => showInfoOrder(record.key)} />
        </a>
      )
    }
  ];
  const data = [
    {
      key: "1",
      order_id: "ICB00225",
      PromotionCode: "UETELKH242",
      Discount: 0,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "2",
      order_id: "ICB00226",
      PromotionCode: "",
      Discount: 32,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "3",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "4",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "5",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "6",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "7",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "8",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "9",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "10",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    },
    {
      key: "11",
      order_id: "ICB00227",
      PromotionCode: "SDGSDGRET",
      Discount: 36,
      Total: 135,
      Status: "New",
      CreateAt: "19/09/2019"
    }
  ];
  return (
    <div>
      <Modal
        width={900}
        title={
          <div>
            <h2>Thông tin đơn hàng</h2>
          </div>
        }
        visible={show}
        onCancel={() => setShow(!show)}
        footer={[
          <Button
            key="close"
            className="btn-info"
            onClick={() => setShow(!show)}
          >
            Thoát
          </Button>
        ]}
      >
        <View data={data[id - 1]} key={id} />
      </Modal>
      <div className="gx-order-history padding-top">
        <Card
          className="gx-card-widget"
          title={
            <h2 className="h4 gx-text-capitalize gx-mb-0">Lịch sử mua hàng</h2>
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
      </div>
    </div>
  );
};

export default History;
