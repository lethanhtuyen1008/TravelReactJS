import React from "react";
import { Icon, Table, Row, Col, Button, Card, Divider } from "antd";
import { Link } from "react-router-dom";
const Index = props => {
  // console.log(props.data);
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      align: "center"
    },
    {
      title: "Điểm đón",
      dataIndex: "diemdon",
      align: "center"
    },
    {
      title: "Ngày đặt",
      dataIndex: "ngaydat"
    },
    {
      title: "Tên khách hàng",
      dataIndex: "tenkh"
    },
    {
      title: "Tổng tiền",
      dataIndex: "tongtien",
      align: "center"
    },
    {
      title: "Trạng thái",
      dataIndex: "trangthai",
      align: "center"
    },
    {
      title: "Lịch khởi hành",
      dataIndex: "lichkhoihanh",
      align: "center"
    },
    {
      title: "Ngày khởi hành",
      dataIndex: "ngaykhoihanh",
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
  const listKH = [];
  const listTenKH = [];
  const listL = [];
  const listTenLich = [];
  const listNgay = [];
  JSON.parse(JSON.stringify(props.data)).map((item, index) => {
    console.log(item.lichkhoihanh);
    listL.push(item.lichkhoihanh);
    if (item.khachhang !== null) listKH.push(item.khachhang);
  });
  listKH.map((item, index) => {
    listTenKH.push(item.tenKH);
  });
  listL.map((item, index) => {
    listTenLich.push(item.ten_lich);
    listNgay.push(item.ngay_khoi_hanh);
  });
  JSON.parse(JSON.stringify(props.data)).map((item, index) => {
    data.push({
      key: index,
      diemdon: item.diemdon,
      ngaydat: item.ngaydat.substring(0,10),
      tenkh: listTenKH[index],
      tongtien: item.tongtien,
      lichkhoihanh: listTenLich[index],
      ngaykhoihanh: listNgay[index].substring(0,10),
      trangthai: item.trangthai === true ? "Hoàn thành" : "Chưa hoàn thành",
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
                Danh sách tour đặt
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
export default Index;
