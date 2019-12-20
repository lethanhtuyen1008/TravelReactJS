import React from "react";
import { Icon, Table, Row, Col, Button, Card, Divider } from "antd";
import { Link } from "react-router-dom";
const index = props => {
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center"
    },
    {
      title: "_Id",
      dataIndex: "_id",
      align: "center"
    },
    {
      title: "Tên",
      dataIndex: "ten",
      align: "center"
    },
    {
      title: "Số ngày",
      dataIndex: "songay"
    },
    {
      title: "Số chỗ",
      dataIndex: "socho",
      align: "center"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link to={"/admin/detail/tour/" + record._id}>Sửa</Link>
        </span>
      )
    }
  ];
  const data = [];
  JSON.parse(JSON.stringify(props.data)).map((item, index) => {
    data.push({
      key: index,
      _id: item._id,
      ten: item.ten,
      songay: item.songay,
      socho: item.socho,
      action: () => <div className="gx-link">action</div>
    });
  });

  return (
    <div>
      <Row style={{ paddingLeft: "5px" }}>
        <Col xs={24} className="orderoc-col-2">
          <Card
            className="gx-card-widget"
            title={
              <h2 className="h4 gx-text-capitalize gx-mb-0">
                Danh sách tour du lịch
              </h2>
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
                style={{ backgound: "white", width: "1200px" }}
                size="default"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default index;
