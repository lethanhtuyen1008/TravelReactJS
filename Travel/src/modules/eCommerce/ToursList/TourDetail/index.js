import React, { useState } from "react";
import Slider from "react-slick";
import CurrencyFormat from "react-currency-format";
import ItemDD from "./itemDD";
import { APIIMG } from "../../../../../envAPI";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Rate,
  Button,
  Input,
  Icon,
  Select,
  Tabs,
  Card,
  Table,
  Radio,
  Avatar,
  Carousel,
  Form,
  Modal
} from "antd";
import "./detailtour.less";
const { TabPane } = Tabs;
const FormItem = Form;
const { Option } = Select;

const changeTabPosition = tabPosition => {
  tabPosition.setState({ tabPosition });
};
const Index = props => {
  const [show, setShow] = useState(false);
  const columns = [
    {
      title: "Ngày đi",
      dataIndex: "1"
    },
    {
      title: "Ngày đến",
      dataIndex: "2"
    },
    {
      title: "Chuyến bay",
      dataIndex: "3"
    },
    {
      title: "Phương điên",
      dataIndex: "4"
    }
  ];

  const data = [
    {
      key: "1",
      1: "12/06/2019",
      2: "13/6/2019",
      3: "VKIG004",
      4: true
    }
  ];
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err === null) {
        console.log(values);
      }
    });
  };
  var lichtrinh = {
    ngay_khoi_hanh: "",
    so_cho_trong: 0,
    ngay: 0,
    noi_khoi_hanh: "",
    ten: "",
    id: ""
  };
  const [check, setCheck] = useState(0);
  const [idLich, setIdlich] = useState(null);
  const [ngay, setNgay] = useState(lichtrinh.ngay_khoi_hanh);
  var listCT = [];
  var listdata = [];
  var listHinh = [];
  var listLich = [];
  var listGia = [];
  var listDD = [];

  var a = [];
  JSON.parse(JSON.stringify(props.data)).map((item, index) => {
    listdata.push(item.ma_tour);
    listLich.push(item);
  });
  // lấy hình=======================================
  listdata.map((item, index) => {
    listHinh.push(item.hinh);
    listCT.push(item.chuongtrinh);
    lichtrinh.ten = item["ten"];
    lichtrinh.ngay = item["songay"];
    lichtrinh.id = item["_id"];
    listGia.push(item.giave);
  });
  JSON.parse(JSON.stringify(listHinh)).map((item, index) => {
    if (index < 1) {
      JSON.parse(JSON.stringify(item)).map((item2, index) => {
        a.push(item2.url);
      });
    }
  });
  //=================================================
  //Lấy ngày
  const listNgayKH = [];
  JSON.parse(JSON.stringify(listLich)).map((item, index) => {
    var k = item["ngay_khoi_hanh"].substring(0, 10);
    listNgayKH.push({
      id: index,
      ngay: k,
      ma_lich: item._id,
      ten_lich: item.ten_lich
    });
    if (index < 1) {
      lichtrinh.ngay_khoi_hanh = item["ngay_khoi_hanh"];
      lichtrinh.so_cho_trong = item["so_cho_trong"];
      lichtrinh.noi_khoi_hanh = item["noi_khoi_hanh"];
    }
  });
  //console.log(listNgayKH);

  const showCT = () => {
    var listS = [];
    var i = 1;
    JSON.parse(JSON.stringify(listCT)).map((item, index) => {
      if (index < 1) {
        JSON.parse(JSON.stringify(item)).map((item2, index) => {
          listS.push(
            <Col span={24}>
              <div className="gx-timeline-section">
                <div className={`gx-timeline-items`}>
                  <div className="gx-timeline-badge gx-timeline-img">
                    <img
                      src={require("assets/images/pentagon.png")}
                      alt="Pentagon"
                      title="Pentagon"
                    />
                  </div>
                  <div className="gx-timeline-panel">
                    <div className="gx-timeline-panel-header">
                      <div className="gx-timeline-header-img gx-timeline-left"></div>
                      <div className="gx-timeline-heading">
                        <h5>{item2.ngay}</h5>
                        <h3 className="gx-timeline-title">{item2.tenCT}</h3>
                      </div>
                    </div>
                    <div className="gx-timeline-body">
                      {JSON.parse(JSON.stringify(item2.dia_diem)).map(
                        (item3, index) => {
                          return <ItemDD data={item3} key={index} />;
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
          i++;
        });
      }
    });
    return listS;
  };
  const showGia = () => {
    var x = 0;
    var k = [];
    listGia.map((it, index) => {
      k = it;
    });
    JSON.parse(JSON.stringify(k)).map((it, index) => {
      x = x + it.gia;
    });
    return x;
  };
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };
  var lich = "";
  listLich.map((item, index) => {
    lich = item._id;
    //setIdlich(item._id);
  });
  const onCheck = (id, key, ngay) => {
    setIdlich(id);
    setCheck(key);
    //console.log(ngay);
    setNgay(ngay);
  };
  const setLich = () => {
    if (idLich === null) return lich;
    else return idLich;
  };
  // console.log(lich);
  // console.log(idLich);
  // console.log(listLich);
  // var ngay = lichtrinh.ngay_khoi_hanh.substring(0, 10);
  return (
    <div>
      {() => {
        listNgayKH.map((item, index) => {
          if (index < 1) {
            setIdlich(item.ma_lich);
          }
        });
      }}
      <div className="padding-row-detail">
        <div className="gx-login-container">
          <div className="gx-login-content form-full">
            <Row className="gx-border-bottom">
              <Col
                span={24}
                style={{
                  textAlign: "center",
                  color: "red",
                  fontSize: "30px",
                  padding: "10px"
                }}
              >
                {lichtrinh.ten}
              </Col>
              <Col md={16} xs={24} className="">
                <div>
                  <Carousel autoplay>
                    {a.map((item, index) => {
                      return (
                        <div>
                          <img
                            className="gx-rounded-md"
                            style={{ height: "550px", borderRadius: "10px" }}
                            src={APIIMG + item}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </Col>
              <Col md={8} xs={24} className="">
                <div className="ais-RatingMenu-link pad-bot ro">
                  <div>
                    <p className="rate ico">
                      <i className="icon-star pad-rig-del "></i>
                      <i className="icon-star pad-rig-del"></i>
                      <i className="icon-star pad-rig-del"></i>
                      <i className="icon-star pad-rig-del"></i>
                      <i className="icon-star-o icon-star ico pad-rig-del"></i>
                    </p>
                  </div>
                  <div className="ro">
                    <span className="rat rev">4.61/5 trong 368 Đánh giá</span>
                  </div>
                </div>

                <div className="ro gx-border-bottom pad-bot-del">
                  <div className="pad-ri-del">
                    <Icon type="eye" />
                    423
                  </div>
                  <div className="pad-ri-del">
                    <Icon type="like" />
                    124
                  </div>
                  <div className="pad-ri-del">
                    <Icon type="message" />7
                  </div>
                </div>

                <div className="gx-border-bottom pad-bot-del ">
                  <Row style={{ paddingTop: "20px" }}>
                    <Col md={12} xs={24}>
                      <div className="ro">
                        <div className="">
                          Khởi hành:
                          <span style={{ paddingLeft: "44px", color: "red" }}>
                            {ngay}
                          </span>
                        </div>
                      </div>
                      <div>
                        Thời gian:
                        <span style={{ paddingLeft: "52px", color: "red" }}>
                          {lichtrinh.ngay}
                        </span>
                      </div>
                      <div>
                        Nơi khởi hành:
                        <span style={{ paddingLeft: "23px", color: "red" }}>
                          {lichtrinh.noi_khoi_hanh}
                        </span>
                      </div>
                    </Col>
                    <Col md={12} xs={24}>
                      <div
                        className="ro"
                        style={{ color: "white", paddingLeft: "50px" }}
                      >
                        <Button
                          type="primary"
                          className="day price"
                          style={{ color: "white" }}
                          onClick={() => setShow(!show)}
                        >
                          Ngày khác
                        </Button>
                        <Modal
                          title={"Lịch khởi hành của tour " + lichtrinh.ten}
                          visible={show}
                          onOk={() => setShow(!show)}
                          onCancel={() => setShow(!show)}
                        >
                          {listNgayKH.map((item, index) => {
                            return (
                              <Radio
                                checked={item.id === check ? true : false}
                                style={radioStyle}
                                value={item.ma_lich}
                                onChange={() =>
                                  onCheck(item.ma_lich, item.id, item.ngay)
                                }
                              >
                                {item.ten_lich + " " + item.ngay}
                              </Radio>
                            );
                          })}
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="gx-border-bottom pad-bot-del">
                  <Row className="pad-bot-del" style={{ paddingTop: "20px" }}>
                    <Col md={12} xs={24}>
                      <div>
                        <div>
                          Giá:
                          <span
                            className="price"
                            style={{ paddingLeft: "93px" }}
                          >
                            {showGia()}
                          </span>
                        </div>
                        <div>
                          Số chỗ còn nhận:
                          <span
                            className="seat"
                            style={{ paddingLeft: "10px" }}
                          >
                            {lichtrinh.so_cho_trong}
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} xs={24}>
                      <div className="but-book">
                        <Link
                          to={"/booking/tour/" + lichtrinh.id + "/" + setLich()}
                        >
                          <Button type="danger">Đặt ngay</Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="gx-border-bottom pad-bot-del">
                  <Row className="pad-bot-del" style={{ paddingTop: "40" }}>
                    <Col md={12} xs={24}>
                      <div>
                        <div className="te">
                          Giá ưu đãi khi đăng ký & thanh toán trực tuyến
                        </div>
                        <div>
                          Giá:
                          <span
                            className="price"
                            style={{ paddingLeft: "94px" }}
                          >
                            {showGia() - showGia() * 0.1}
                          </span>
                        </div>
                        <div>
                          Số chỗ còn nhận:
                          <span
                            className="seat"
                            style={{ paddingLeft: "13px" }}
                          >
                            3
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} xs={24}>
                      <div className="but-book">
                        <Link to="/booking/tour/5">
                          <Button type="primary">Đặt ngay</Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="gx-border-bottom pad-bot-del">
                  <Row className="pad-bot-del" style={{ paddingTop: "20px" }}>
                    <Col md={12} xs={24}>
                      <div className="">
                        <Button type="primary" block className="te1">
                          <Icon type="phone" />
                          Gọi miễn phí
                        </Button>
                      </div>
                    </Col>
                    <Col md={12} xs={24}>
                      <div className="">
                        <Button type="danger" block className="te1">
                          <Icon type="edit" />
                          Gửi yêu cầu
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Row className="" style={{}}>
          <Col md={24} xs={24} className="">
            <div className="gx-login-container">
              <div className="gx-login-content form-full">
                <Row>
                  <Tabs tabPosition="left">
                    <TabPane tab="Chương trình tour" key="1">
                      <div>
                        <Row span={24} className="pad-bot-del tieudechinh">
                          CHƯƠNG TRÌNH TOUR
                        </Row>
                      </div>
                      <div>{showCT()}</div>
                    </TabPane>
                    <TabPane className="panel-l" tab="Chi tiết tour" key="2">
                      <div>
                        <Row span={24} className="pad-bot-del tieudechinh">
                          CHI TIẾT TOUR
                        </Row>
                        <Row>
                          <Col span={24}>
                            <div>
                              <div className="tieudenho">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <Icon type="car" />
                                  </div>
                                  <div className="pad-icon-detail">
                                    THÔNG TIN VẬN CHUYỂN
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <Col className="orderoc-col-1">
                                  <Card className="gx-card-widget">
                                    <div className="gx-table-responsive">
                                      <Table
                                        className="gx-table-no-bordered"
                                        block
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
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="tieudenho">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <Icon type="wallet" />
                                  </div>
                                  <div className="pad-icon-detail">
                                    THÔNG TIN KHÁCH SẠN
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <Col className="orderoc-col-1">
                                  <Card className="gx-card-widget">
                                    <div className="gx-table-responsive">
                                      <Table
                                        className="gx-table-no-bordered"
                                        block
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
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="tieudenho">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <Icon type="user" />
                                  </div>
                                  <div className="pad-icon-detail">
                                    THÔNG TIN HƯỚNG DẪN VIÊN
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <Col className="orderoc-col-1">
                                  <Card className="gx-card-widget">
                                    <div className="gx-table-responsive">
                                      <Table
                                        className="gx-table-no-bordered"
                                        block
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
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="tieudenho">
                                <div style={{ display: "flex" }}>
                                  <div>
                                    <Icon type="dollar" />
                                  </div>
                                  <div className="pad-icon-detail">
                                    THÔNG TIN PHỤ THU
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <Col className="orderoc-col-1">
                                  <Card className="gx-card-widget">
                                    <div className="gx-table-responsive">
                                      <Table
                                        className="gx-table-no-bordered"
                                        block
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
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane tab="Lưu ý" key="3">
                      <div>
                        <Row span={24} className="pad-bot-del tieudechinh">
                          LƯU Ý
                        </Row>
                        <Row>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail inf">
                                    Lộ trình tham khảo, cự ly khoảng:
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div className="ro">
                                    <p className="inf">- Ngày 01 (301 km):</p>{" "}
                                    SB Nội Bài - TP Lào Cai (262 km) – Sa Pa (39
                                    km)
                                  </div>
                                  <div className="ro">
                                    <p className="inf">- Ngày 02 (47 km):</p> Sa
                                    Pa – Fansipan Legend (5 km) – TP Lào Cai (42
                                    km)
                                  </div>
                                  <div className="ro">
                                    <p className="inf">- Ngày 03 (300 km):</p>{" "}
                                    Tp Lào Cai – Hà Nội (300 km)
                                  </div>
                                  <div className="ro">
                                    <p className="inf">- Ngày 04 (197 km):</p>{" "}
                                    Hà Nội – Yên Tử (141 km) - TP Hạ Long (56
                                    km)
                                  </div>
                                  <div className="ro">
                                    <p className="inf">- Ngày 05 (214 km):</p>{" "}
                                    TP Hạ Long – Chùa Bái Đính (192 km) – Ninh
                                    Bình (22 km)
                                  </div>
                                  <div className="pad-bott ro">
                                    <p className="inf">- Ngày 06 (138 km):</p>{" "}
                                    Ninh Bình – KDL Tràng An (10 km) – SB Nội
                                    Bài (128 km)
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail ">
                                    THÔNG TIN CẦN LƯU Ý:
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div className="inf">Giá tour bao gồm:</div>
                                  <div>
                                    - Xe tham quan (15, 25, 35, 45 chỗ tùy theo
                                    số lượng khách) theo chương trình
                                  </div>
                                  <div>
                                    - Vé máy bay khứ hồi Sài Gòn – Hà Nội – Sài
                                    Gòn{" "}
                                  </div>
                                  <div>
                                    - Khách sạn theo tiêu chuẩn 2 khách/phòng
                                    hoặc 3 khách/phòng{" "}
                                  </div>
                                  <div>
                                    + Hà Nội 3 sao: Delight, Ha Noi Emotion,
                                    Hồng Hà…. (do đặc điểm vị trí phòng khách
                                    sạn Hà Nội có diện tích nhỏ)
                                  </div>
                                  <div>
                                    + Hạ Long 3 sao: Kenny, Sea Star, New star,
                                    Sen Vàng….
                                  </div>
                                  <div>
                                    + Lào Cai 4 sao: Mường Thanh Lào Cai,
                                    Sapaly....
                                  </div>
                                  <div>
                                    + Sapa 3 sao: Golden Sa Pa , Sunny Moutain,
                                    Sapa Charm,…
                                  </div>
                                  <div>
                                    + Ninh Bình 4 sao: Hoàng Sơn, Vissai….
                                  </div>
                                  <div>
                                    - Vé tham quan theo chương trình (xe điện
                                    Yên Tử, Bái Đính)
                                  </div>
                                  <div>
                                    - Các bữa ăn theo chương trình : 05 bữa sáng
                                    buffet + 11 bữa chính từ 120.000 –
                                    140.000vnd/ khách{" "}
                                  </div>
                                  <div>
                                    - Hướng dẫn viên tiếng Việt nối tuyến
                                  </div>
                                  <div>
                                    - Bảo hiểm du lịch với mức bồi thường cao
                                    nhất 120.000.000đ/vụ
                                  </div>
                                  <div>
                                    - Nón Travel + Nước suối + Khăn lạnh{" "}
                                  </div>
                                  <div className="pad-bott">- Thuế VAT </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Giá tour không bao gồm:
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div>
                                    - Chi phí cá nhân: ăn uống ngoài chương
                                    trình, giặt ủi, chi phí hủy đổi hành trình
                                    và nâng hạng chuyến bay, hành lý quá cước,
                                    phụ thu phòng đơn,…
                                  </div>
                                  <div className="pad-bott">
                                    - Chi phí tham quan ngoài chương trình: Cáp
                                    Treo Yên Tử và Fansipan, Múa Rối Nước Hoa
                                    Sen Hạ Long., Sun World Ha Long Park,….
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Giá vé trẻ em:{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div>
                                    - Trẻ em dưới 5 tuổi: không thu phí dịch vụ,
                                    bố mẹ tự lo cho bé và thanh toán các chi phí
                                    phát sinh (đối với các dịch vụ tính phí theo
                                    chiều cao…). Hai người lớn chỉ được kèm 1
                                    trẻ em dưới 5 tuổi, trẻ em thứ 2 sẽ đóng phí
                                    theo qui định dành cho độ tuổi từ 5 đến dưới
                                    12 tuổi và phụ thu phòng đơn. Vé máy bay,
                                    tàu hỏa, phương tiện vận chuyển công cộng
                                    mua vé theo qui định của các đơn vị vận
                                    chuyển.
                                  </div>
                                  <div>
                                    - Trẻ em từ 5 tuổi đến dưới 12 tuổi: 75% giá
                                    tour người lớn (không có chế độ giường
                                    riêng). Hai người lớn chỉ được kèm 1 trẻ em
                                    từ 5 - dưới 12 tuổi, em thứ hai trở lên phải
                                    mua 1 suất giường đơn.
                                  </div>
                                  <div className="pad-bott">
                                    - Trẻ em từ 12 tuổi trở lên: mua một vé như
                                    người lớn
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Điều kiện thanh toán:
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div>
                                    - Khi đăng ký đặt cọc 50% số tiền tour
                                  </div>
                                  <div className="pad-bott">
                                    - Số tiền còn lại thanh toán hết trước ngày
                                    khởi hành 7-10 ngày (áp dụng tour ngày
                                    thường), trước ngày khởi hành 20-25 ngày (áp
                                    dụng tour lễ tết){" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Các điều kiện khi đăng ký tour:{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div>
                                    - Đối với Khách Quốc tịch Việt Nam: Khi đi
                                    tour Trẻ em từ 14 tuổi trở lên và người lớn
                                    cần đem theo CMND/Passport (Hộ chiếu) bản
                                    chính còn hạn sử dụng, hình ảnh rõ (CMND có
                                    thời hạn sử dụng không quá 15 năm, tính từ
                                    ngày cấp)/ Giấy khai sinh bản chính (trẻ em
                                    dưới 14 tuổi), trẻ em trên 14 tuổi bắt buộc
                                    phải có CMND hoặc Passport làm thủ tục lên
                                    máy bay.{" "}
                                  </div>
                                  <div>
                                    - Đối với khách Nước ngoài/Việt Kiều: Khi đi
                                    tour phải mang theo đầy đủ Passport (Hộ
                                    Chiếu) bản chính còn hạn sử dụng hoặc thẻ
                                    xanh kèm theo Visa và giấy tái xuất nhập
                                    Việt Nam làm thủ tục lên máy bay.{" "}
                                  </div>
                                  <div>
                                    - Khi đăng ký tour Quý khách vui lòng mang
                                    theo CMND/Passport bản chính hoặc cung cấp
                                    tên chính xác đầy đủ, đúng từng ký tự trên
                                    CMND/ Passport (Hộ chiếu)/Giấy khai sinh
                                    (trẻ em dưới 14 tuổi) theo thứ tự: Họ/tên
                                    lót/tên. Quý khách khi đăng ký cung cấp tên
                                    theo giấy tờ tùy thân nào, khi đi tour phải
                                    mang theo giấy tờ tùy thân đó theo qui định
                                    hãng hàng không{" "}
                                  </div>
                                  <div>
                                    - Trong trường hợp Quý khách cung cấp tên
                                    sai, đến trễ giờ bay, vui lòng chịu phí đổi
                                    vé hoặc mua lại vé mới theo quy định của
                                    Hãng Hàng Không (nếu chuyến bay còn chỗ).{" "}
                                  </div>
                                  <div>
                                    - Trong trường hợp Quý khách bay hãng hàng
                                    không Vietjet và Jetstar, vé không hoàn,
                                    không dời, đổi, huỷ, sai tên mất 100% theo
                                    qui định hãng hàng không. Giá vé máy bay trẻ
                                    em bằng 100% người lớn.{" "}
                                  </div>
                                  <div>
                                    - Trong trường hợp Quý khách bay hãng hàng
                                    không Việt Nam. Vé máy bay khuyến mãi không
                                    hoàn, không đổi, hủy, sai tên mất 100% theo
                                    qui định hãng hàng không. Vé Vietnam
                                    Airlines không bay chặng đi, tự động hủy
                                    chặng về. Giá vé máy bay trẻ em bằng 90% vé
                                    người lớn.
                                  </div>
                                  <div>
                                    - Giá vé, giờ bay có thể thay đổi theo Hãng
                                    Hàng Không (Vietnam Airlines, Vietjet,
                                    Jetstar) không thể báo trước.{" "}
                                  </div>
                                  <div>
                                    - Do các chuyến bay phụ thuộc vào các hãng
                                    Hàng Không nên trong một số trường hợp giờ
                                    bay có thể thay đổi mà không được báo trước.
                                    Tùy vào tình hình thực tế, Chương trình và
                                    điểm tham quan có thể linh động thay đổi thứ
                                    tự các điểm phù hợp điều kiện giờ bay và
                                    thời tiết thực tế. Vietravel sẽ không chịu
                                    trách nhiệm bảo đảm các điểm tham quan trong
                                    trường hợp:
                                  </div>
                                  <div>
                                    + Xảy ra thiên tai: bão lụt, hạn hán, động
                                    đất…
                                  </div>
                                  <div>
                                    + Sự cố về an ninh: khủng bố, biểu tình
                                  </div>
                                  <div>
                                    + Sự cố về hàng không: trục trặc kỹ thuật,
                                    an ninh, dời, hủy, hoãn chuyến bay.
                                  </div>
                                  <div>
                                    - Nếu những trường hợp trên xảy ra,
                                    Vietravel sẽ xem xét để hoàn trả chi phí
                                    không tham quan cho khách trong điều kiện có
                                    thể (sau khi đã trừ lại các dịch vụ đã thực
                                    hiện….và không chịu trách nhiệm bồi thường
                                    thêm bất kỳ chi phí nào khác).
                                  </div>
                                  <div>
                                    - Sau khi Quý khách đã làm thủ tục Hàng
                                    Không và nhận thẻ lên máy bay, đề nghị Quý
                                    khách giữ cẩn thận và lưu ý lên máy bay đúng
                                    giờ. Vietravel không chịu trách nhiệm trong
                                    trường hợp khách làm mất thẻ lên máy bay và
                                    không lên máy bay đúng theo giờ quy định của
                                    Hàng Không.
                                  </div>
                                  <div>
                                    - Giờ nhận phòng khách sạn: sau 14:00 giờ và
                                    trả phòng trước 12:00 giờ{" "}
                                  </div>
                                  <div>
                                    - Phòng khách sạn/resort có thể xảy ra
                                    trường hợp phòng không gần nhau, không cùng
                                    tầng, loại phòng một giường đôi hoặc hai
                                    giường đơn không theo yêu cầu, tùy tình hình
                                    thực tế từng khách sạn/Resort.{" "}
                                  </div>
                                  <div>
                                    - Trường hợp quý khách tham gia tour 01
                                    khách, bắt buộc đóng thêm tiền phụ thu phòng
                                    đơn để ở riêng 01 phòng. Trường hợp trong
                                    đoàn cũng có khách đi 01 mình, cùng giới
                                    tính và có nhu cầu muốn ghép cùng phòng với
                                    quý khách thì Vietravel sẽ hoàn lại tiền phụ
                                    thu phòng đơn cho quý khách.
                                  </div>
                                  <div>
                                    - Trường hợp quý khách đi nhóm 03 khách,
                                    Vietravel sẽ cung cấp 01 phòng dành cho 03
                                    khách là 01 giường lớn 1m6 và 01 giường phụ
                                    di động từ 0.8 - 1,2m (extrabed) hoặc 01 nệm
                                    đơn tùy từng khách sạn/Resort. Trong trường
                                    quý khách có nhu cầu ở riêng, vui lòng đóng
                                    thêm tiền phụ thu phòng đơn theo qui định{" "}
                                  </div>
                                  <div>
                                    - Thông tin hành lý khi đi tour : Xách tay
                                    dưới 7kg/1khách - Kích thước không quá: 56cm
                                    x 36cm x 23 cm, chất lỏng với thể tích không
                                    quá 100ml. Ký gửi: 20kg/1khách - Kích thước
                                    không quá: 119cm x 119cm x 81cm. Các vật
                                    phẩm không được chấp nhận dưới dạng hành lý
                                    ký gởi hoặc vận chuyển trong hành lý theo
                                    qui định hàng không
                                  </div>
                                  <div>
                                    - Thông tin tập trung : Tại sân bay Tân Sơn
                                    Nhất, Ga đi trong nước, trước giờ bay 2
                                    tiếng (áp dụng ngày thường), trước 2 tiếng
                                    30 phút (áp dụng lễ tết), tại cột số 4 Trong
                                    trường hợp bay hãng hàng không Vietjet, tại
                                    cột 10 trong trường hợp bay hãng hàng không
                                    Vietnam, Jetstar.{" "}
                                  </div>
                                  <div>
                                    - Quý khách dưới 18 tuổi khi đi tour phải có
                                    Bố Mẹ hoặc người thân trên 18 tuổi đi cùng.
                                    Trường hợp đi một mình phải được Bố Mẹ ủy
                                    quyền (có xác nhận của chính quyền địa
                                    phương) cho Vietravel{" "}
                                  </div>
                                  <div>
                                    - Khách nữ từ 55 tuổi trở lên và khách nam
                                    từ 60 trở lên: nên có người thân dưới 55
                                    tuổi (đầy đủ sức khỏe) đi cùng. Riêng khách
                                    từ 70 tuổi trở lên: Bắt buộc phải có người
                                    thân dưới 55 tuổi (đầy đủ sức khỏe) đi cùng
                                    Vì lý do an toàn Quý khách hạn chế và không
                                    nhận khách từ 80 tuổi trở lên. Khách trên 80
                                    tuổi không có chế độ bảo hiểm.
                                  </div>
                                  <div>
                                    - Quý khách đang mang thai vui lòng báo cho
                                    nhân viên bán tour ngay tại thời điểm đăng
                                    ký. Lưu ý phải có ý kiến của bác sĩ trước
                                    khi đi tour. Cam kết tự chịu trách nhiệm về
                                    sức khỏe của mình và thai nhi trong suốt
                                    thời gian tham gia chương trình du lịch.{" "}
                                  </div>
                                  <div>
                                    - Quý khách có nhu cầu cần xuất hóa đơn vui
                                    lòng cung cấp thông tin xuất hóa đơn cho
                                    nhân viên bán tour khi ngay khi đăng ký,
                                    không nhận xuất hóa đơn sau khi tour đã kết
                                    thúc.{" "}
                                  </div>
                                  <div className="pad-bott">
                                    - Quý khách vui lòng tham khảo kỹ các Điều
                                    Kiện Bán Vé trước khi đăng ký chuyến du
                                    lịch. Trong trường hợp không trực tiếp đăng
                                    ký, nhờ người thân đăng ký hộ vui lòng cập
                                    nhật thông tin từ người đăng ký.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Các điều kiện chuyển và hủy tour{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div>Lưu ý khi chuyển/huỷ tour:</div>
                                  <div className="pad-bott">
                                    - Sau khi đóng tiền, nếu Quý khách muốn
                                    chuyển/huỷ tour xin vui lòng mang Vé Du Lịch
                                    đến văn phòng đăng ký tour để làm thủ tục
                                    chuyển/huỷ tour và chịu mất phí theo quy
                                    định của Vietravel. Không giải quyết các
                                    trường hợp liên hệ chuyển/huỷ tour qua điện
                                    thoại.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Các điều kiện huỷ tour: (đối với ngày
                                    thường):
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div>
                                    - Được chuyển sang các tuyến du lịch khác
                                    trước ngày khởi hành 20 ngày: Không mất chi
                                    phí.
                                  </div>
                                  <div>
                                    - Nếu hủy hoặc chuyển sang các chuyến du
                                    lịch khác từ 15-19 ngày trước ngày khởi
                                    hành: Chi phí hủy tour: 50% tiền cọc tour.
                                  </div>
                                  <div>
                                    - Nếu hủy hoặc chuyển sang các chuyến du
                                    lịch khác từ 12-14 ngày trước ngày khởi
                                    hành: Chi phí hủy tour: 100% tiền cọc tour.
                                  </div>
                                  <div>
                                    - Nếu hủy chuyến du lịch trong vòng từ 08-11
                                    ngày trước ngày khởi hành: Chi phí hủy tour:
                                    50% trên giá tour du lịch.
                                  </div>
                                  <div>
                                    - Nếu hủy chuyến du lịch trong vòng từ 05-07
                                    ngày trước ngày khởi hành: Chi phí hủy tour:
                                    70% trên giá tour du lịch.
                                  </div>
                                  <div>
                                    - Nếu hủy chuyến du lịch trong vòng từ 02-04
                                    ngày trước ngày khởi hành: Chi phí hủy tour:
                                    90% trên giá vé du lịch.
                                  </div>
                                  <div className="pad-bott">
                                    - Nếu hủy chuyến du lịch trong vòng 1 ngày
                                    trước ngày khởi hành : Chi phí hủy tour:
                                    100% trên giá vé du lịch.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Các điều kiện huỷ tour: (đối với ngày lễ,
                                    Tết. Áp dụng cho các tour có thời gian diễn
                                    ra rơi vào một trong các ngày Lễ, Tết theo
                                    qui định){" "}
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div>
                                  <div>
                                    - Được chuyển sang các tuyến du lịch khác
                                    trước ngày khởi hành 30 ngày: Không mất chi
                                    phí.
                                  </div>
                                  <div>
                                    - Nếu hủy hoặc chuyển sang các chuyến du
                                    lịch khác từ 25-29 ngày trước ngày khởi
                                    hành: Chi phí hủy tour: 50% tiền cọc tour.
                                  </div>
                                  <div>
                                    - Nếu hủy hoặc chuyển sang các chuyến du
                                    lịch khác từ 20-24 ngày trước ngày khởi
                                    hành: Chi phí hủy tour: 100% tiền cọc tour.
                                  </div>
                                  <div>
                                    - Nếu hủy chuyến du lịch trong vòng từ 17-19
                                    ngày trước ngày khởi hành: Chi phí hủy tour:
                                    50% trên giá tour du lịch.
                                  </div>
                                  <div>
                                    - Nếu hủy chuyến du lịch trong vòng từ 08-16
                                    ngày trước ngày khởi hành: Chi phí hủy tour:
                                    70% trên giá tour du lịch.
                                  </div>
                                  <div>
                                    - Nếu hủy chuyến du lịch trong vòng từ 02-07
                                    ngày trước ngày khởi hành: Chi phí hủy tour:
                                    90% trên giá vé du lịch.
                                  </div>
                                  <div className="pad-bott">
                                    - Nếu hủy chuyến du lịch trong vòng 1 ngày
                                    trước ngày khởi hành : Chi phí hủy tour:
                                    100% trên giá vé du lịch.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div>
                              <div className="">
                                <div style={{ display: "flex" }}>
                                  <div className="pad-icon-detail">
                                    Mọi chi tiết vui lòng liên hệ
                                  </div>
                                </div>
                              </div>
                              <div className="table-vanchuyen">
                                <div className="kt gx-border-bottom">
                                  <div>
                                    02 Pasteur, phường 6, quận 3, TP.HCM
                                  </div>
                                  <div>Email: Travel@gmail.com</div>
                                  <div className="pad-bott">
                                    KÍNH CHÚC QUÝ KHÁCH MỘT CHUYẾN DU LỊCH VUI
                                    VẺ
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane tab="Ý kiến khách hàng" key="5">
                      <div>
                        <Row span={24} className="tieudechinh">
                          Ý KIẾN KHÁCH HÀNG
                        </Row>
                        <Row>
                          <Col span={24}>
                            <div className="gx-timeline-section">
                              <div className="gx-timeline-item">
                                <div className="gx-timeline-badge gx-timeline-img">
                                  <Icon type="message" />
                                </div>
                                <div className="gx-timeline-panel">
                                  <div className="gx-timeline-panel-header">
                                    <div className="gx-timeline-header-img gx-timeline-left">
                                      <Avatar
                                        size="large"
                                        className="gx-size-60 gx-rounded-circle"
                                        src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg"
                                      />
                                    </div>
                                    <div className="gx-timeline-heading">
                                      <h5>12/09/2018</h5>
                                      <h3 className="gx-timeline-title">
                                        Lê Thanh Tuyên
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="gx-timeline-body">
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the standard dummy text
                                      ever since the 1500s, when an unknown
                                      printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                      It has survived not only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining essentially
                                      unchanged.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div className="gx-timeline-section">
                              <div className="gx-timeline-item">
                                <div className="gx-timeline-badge gx-timeline-img">
                                  <Icon type="message" />
                                </div>
                                <div className="gx-timeline-panel">
                                  <div className="gx-timeline-panel-header">
                                    <div className="gx-timeline-header-img gx-timeline-left">
                                      <Avatar
                                        size="large"
                                        className="gx-size-60 gx-rounded-circle"
                                        src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg"
                                      />
                                    </div>
                                    <div className="gx-timeline-heading">
                                      <h5>12/09/2018</h5>
                                      <h3 className="gx-timeline-title">
                                        Lê Thanh Tuyên
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="gx-timeline-body">
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the standard dummy text
                                      ever since the 1500s, when an unknown
                                      printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                      It has survived not only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining essentially
                                      unchanged.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div className="gx-timeline-section">
                              <div className="gx-timeline-item">
                                <div className="gx-timeline-badge gx-timeline-img">
                                  <Icon type="message" />
                                </div>
                                <div className="gx-timeline-panel">
                                  <div className="gx-timeline-panel-header">
                                    <div className="gx-timeline-header-img gx-timeline-left">
                                      <Avatar
                                        size="large"
                                        className="gx-size-60 gx-rounded-circle"
                                        src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg"
                                      />
                                    </div>
                                    <div className="gx-timeline-heading">
                                      <h5>12/09/2018</h5>
                                      <h3 className="gx-timeline-title">
                                        Lê Thanh Tuyên
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="gx-timeline-body">
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the standard dummy text
                                      ever since the 1500s, when an unknown
                                      printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                      It has survived not only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining essentially
                                      unchanged.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane tab="Liên hệ" key="6">
                      <div>
                        <Row span={24} className="tieudechinh">
                          LIÊN HỆ
                        </Row>
                        <Row>
                          <Col span={16}>
                            <div className="gx-login-container">
                              <div className="gx-login-content form-full">
                                <div className=" gx-mb-4 color-txt gx-border-bottom">
                                  <h2 className="color-txt">Thông tin</h2>
                                </div>
                                <Form onSubmit={handleSubmit} layout="inline">
                                  <div style={{ display: "flex" }}>
                                    <Row>
                                      <Col md={16}>
                                        <div>Họ</div>
                                        <Form.Item className="tuyen phuongcd">
                                          {getFieldDecorator("first_name", {
                                            rules: [
                                              {
                                                required: true,
                                                message: "Vui lòng nhập họ!"
                                              }
                                            ]
                                          })(
                                            <Input
                                              prefix={<Icon type="user" />}
                                              placeholder="Họ"
                                            />
                                          )}
                                        </Form.Item>
                                        <div>Tên</div>
                                        <Form.Item className="tuyen phuongcd">
                                          {getFieldDecorator("last_name", {
                                            rules: [
                                              {
                                                required: true,
                                                message: "Vui lòng nhập tên!"
                                              }
                                            ]
                                          })(
                                            <Input
                                              prefix={<Icon type="user" />}
                                              placeholder="Tên"
                                            />
                                          )}
                                        </Form.Item>

                                        <div>Số điện thoại</div>
                                        <Form.Item className="tuyen phuongcd">
                                          {getFieldDecorator("phone", {
                                            rules: [
                                              {
                                                required: true,
                                                message:
                                                  "Vui lòng nhập số điện thoại!"
                                              }
                                            ]
                                          })(
                                            <Input
                                              prefix={<Icon type="phone" />}
                                              placeholder="Số điện thoại"
                                            />
                                          )}
                                        </Form.Item>
                                        <div>Nội dung</div>
                                        <Form.Item className="tuyen phuongcd">
                                          {getFieldDecorator("content", {
                                            rules: [
                                              {
                                                required: true,
                                                message:
                                                  "Vui lòng nhập nội dung!"
                                              }
                                            ]
                                          })(
                                            <Input
                                              prefix={<Icon type="form" />}
                                              placeholder="Nội dung"
                                            />
                                          )}
                                        </Form.Item>
                                      </Col>
                                    </Row>
                                  </div>

                                  <Form.Item>
                                    <div className="tuyen phuong phuongcd">
                                      <div>
                                        <Input
                                          type="submit"
                                          value="Gửi"
                                          className="btn_book"
                                          style={{
                                            background: "#ff4d4f",
                                            color: "white"
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </Form.Item>
                                </Form>
                              </div>
                            </div>
                          </Col>
                          <Col span={8}>
                            <div className="gx-login-container">
                              <div className="gx-login-content form-full">
                                <div className=" gx-mb-4 color-txt gx-border-bottom">
                                  <h2 className="color-txt">
                                    Phương thức liên hệ
                                  </h2>
                                </div>
                                <Form onSubmit={handleSubmit} layout="inline">
                                  <div style={{ display: "flex" }}>
                                    <Row>
                                      <Col md={8}>
                                        <div>
                                          <b>Địa chỉ:</b>
                                        </div>
                                        <Form.Item className="phuonghihi">
                                          <h5>
                                            202/21 Lý Thường Kiệt, phường 14,
                                            quận 10, thành phố Hồ Chí Minh.
                                          </h5>
                                        </Form.Item>
                                        <div>
                                          <b>Phone:</b>
                                        </div>
                                        <Form.Item className="phuonghihi">
                                          <h5>+84 327373434</h5>
                                        </Form.Item>
                                        <div>
                                          <b>Email:</b>
                                        </div>
                                        <Form.Item className="phuonghihi">
                                          <h5>
                                            <a hrel="">travel@gmail.com</a>
                                          </h5>
                                        </Form.Item>
                                        <div>
                                          <b>Facebook:</b>
                                        </div>
                                        <Form.Item className="phuonghihi">
                                          <h5>
                                            <a hrel="">
                                              https://www.facebook.com/phuong.pe.90857
                                            </a>
                                          </h5>
                                        </Form.Item>
                                        <div></div>
                                        <Form.Item className="phuonghihi">
                                          <h5> </h5>
                                        </Form.Item>
                                        <div></div>
                                        <Form.Item className="phuonghihi">
                                          <h5> </h5>
                                        </Form.Item>
                                        <div></div>
                                        <Form.Item className="phuonghihi">
                                          <h5> </h5>
                                        </Form.Item>
                                        <Form.Item className="phuonghihi">
                                          <h5> </h5>
                                        </Form.Item>
                                      </Col>
                                    </Row>
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                  </Tabs>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Form.create()(Index);
