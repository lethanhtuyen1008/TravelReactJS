import React from "react";
import { Col, Card, Table } from "antd";
const Index = props => {
  var listGia = [];
  props.data.map((item, index) => {
    listGia.push(item.giave);
  });
  var gia = [];
  listGia.map((item, index) => {
    if (index < 1) {
      JSON.parse(JSON.stringify(item)).map((item2, index) => {
        gia.push(item2);
      });
    }
  });
  var ct = [];
  const columns = [];
  const listTenLoai = [];
  gia.map((item, index) => {
    listTenLoai.push(item.ma_loai_khach);
    ct.push(item.gia);
  });
  listTenLoai.map((item, index) => {
    try {
      columns.push({
        title: item.ten_loai_khach,
        dataIndex: index,
        key: index
      });
    } catch {}
  });
  columns.push({
    title: "Phụ thu phòng đơn",
    dataIndex: 4
  });
  const data = [
    {
      0: ct[0],
      1: ct[1],
      2: ct[2],
      3: ct[3],
      4: 5500000
    }
  ];
  return (
    <Col className="orderoc-col-2">
      <Card
        className="gx-card-widget"
        title={
          <h2 className="h2 color-txt gx-text-capitalize gx-mb-0 gx-border-bottom">
            Giá tour cơ bản
          </h2>
        }
        extra={<p className="gx-text-primary gx-mb-0 gx-pointer"></p>}
      >
        <div className="gx-table-responsive">
          <Table
            className="gx-table-no-bordered"
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered={false}
            style={{ backgound: "white" }}
            size="middle"
          />
        </div>
      </Card>
    </Col>
  );
};
export default Index;
