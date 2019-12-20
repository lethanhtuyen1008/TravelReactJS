import React from "react";
import { Carousel, Form, Row, Col, Input, Icon, Button } from "antd";
import "./slider.scss";
const SliderItem = (props) => {
  const slideList = [
    {
      name: " Lê Thanh Tuyên",
      image: ""
    },
    {
      name: " Lê Thanh Tuyên",
      image: ""
    },
    {
      name: " Lê Thanh Tuyên",
      image: ""
    },
    {
      name: " Lê Thanh Tuyên",
      image: ""
    }
  ]
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err === null) {
        console.log(values);
      }
    });
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="text-slider">
        <Row style={{ color: "white" }}>
          <Col>

            <div className="form-search" >
              <div className="text-search gx-text-white">
                <div className="text-search-ct">DU LỊCH</div>
                <div className="gx-text-20">Đặt tour du lịch toàn quốc với giá rẻ</div>
              </div>
              <div>
                <Form onSubmit={handleSubmit} layout="inline">

                  <Form.Item className="tuyen phuongcd" >
                    {getFieldDecorator("first_name", {
                      rules: [{ required: true, message: "Vui lòng nhập họ!" }]
                    })(
                      <Input
                        className="input-slide"
                        prefix={<Icon type="map" />}
                        placeholder="Khách sạn, Đặc sản,..."
                        style={{borderRadius : '100px'}}
                      />
                    )}
                  </Form.Item>
                  <Form.Item className="tuyen phuongcd" >
                    {getFieldDecorator("first_name", {
                      rules: [{ required: true, message: "Vui lòng nhập họ!" }]
                    })(
                      <Input
                        className="input-slide"
                        prefix={<Icon type="map" />}
                        placeholder="Đi đâu"
                      />
                    )}
                  </Form.Item>

                  <Form.Item>
                    <div className="tuyen phuong phuongcd">
                      <div><Button block type="submit" className="btn_booke" style={{ background: "#ff4d4f", color: "white" }} >Tìm kiếm</Button></div>
                    </div>
                  </Form.Item>

                </Form>
                <div>
                  <div>Dịch vụ khác</div>
                  <div style={{ paddingTop: 10 }}>
                    <Button icon="user" className="btn_book">Khách sạn</Button>
                    <Button icon="edit" className="btn_book">Nhà hàng</Button>
                    <Button icon="lock" className="btn_book">Đặt tour</Button>
                    <Button icon="menu" className="btn_book">Địa điểm</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="image-slide">
        <Carousel autoplay>
          {slideList.map((obj, index) => (
            <div key={index}>
              <img
                className="slider"
                width="100%"
                src={"http://thuthuatphanmem.vn/uploads/2018/06/18/hinh-nen-may-tinh-4k-binh-minh-tren-bien-xanh-dep_033012202.jpg"}
              ></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>

  );
};

export default Form.create()(SliderItem);
