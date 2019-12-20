import ItemTour from "./itemTour";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
  Select,
  DatePicker,
  Pagination
} from "antd";
import "./listtour.less";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;

const Index = props => {
  console.log(props.id);
  const [page, setPage] = useState(1);
  const [soPage, setSopage] = useState(100);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const { getFieldDecorator } = props.form;
  const listTours = props.data;
  const countPage = () => {
    var t = 10;
    listTours.map((item, index) => {
      if (index > 16 && item.ma_loai === props.id) t = t + 10;
    });
    return t;
  };
  const onSubmit = event => {
    //gọi hàm dòng 52
    event.preventDefault();
    props.form.validateFields();
    props.form.validateFields((err, values) => {
      setSearch(values["name"]);
      console.log(search);
    });
  };

  const onChange = e => {
    setCount(e.target.value);
  };
  const onChangePage = pageNumber => {
    setPage(pageNumber);
  };
  return (
    <div id="product">
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={24} md={16} className="gx-border-bottom text-tour">
          {" "}
          <h2>DANH SÁCH TOUR DU LỊCH</h2>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
      <Row>
        <Col sm={2} xs={0}></Col>
        <Col sm={5}>
          <Row style={{ padding: "10px", paddingTop: 30 }}>
            <Col span={24} xs={24}>
              <div style={{ backgroundColor: "#F2F2F2" }} className="inp">
                <Form onSubmit={onSubmit} className="login-form">
                  <Form.Item className="col-first_name inp-pad">
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          required: true,
                          message: "Vui lòng nhập tên tour!"
                        }
                      ]
                    })(<Input className="inp-size" placeholder="Hà Nội" />)}
                  </Form.Item>
                  <Form.Item className="col-first_name inp-pad">
                    {getFieldDecorator("map", {
                      rules: [
                        {
                          required: false,
                          message: "Please input your first name!"
                        }
                      ]
                    })(
                      <div className="inp-size">
                        <Select defaultValue="Miền Bắc">
                          <Option value="jack">Niềm Trung</Option>
                          <Option value="lucy">Miền nam</Option>
                          <Option value="Yiminghe">Nước Ngoài</Option>
                        </Select>
                      </div>
                    )}
                  </Form.Item>
                  <Form.Item className="col-first_name inp-pad">
                    {getFieldDecorator("date_from", {
                      rules: [
                        {
                          required: false,
                          message: "Please input your first name!"
                        }
                      ]
                    })(<RangePicker className="inp-size" />)}
                  </Form.Item>
                  <Form.Item className="col-first_name inp-pad">
                    {getFieldDecorator("date_to", {
                      rules: [
                        {
                          required: false,
                          message: "Please input your first name!"
                        }
                      ]
                    })(<Input className="inp-size" placeholder="Ngày đến" />)}
                  </Form.Item>
                  <Form.Item className="inp-pad">
                    {getFieldDecorator("remember", {
                      valuePropName: "checked",
                      initialValue: true
                    })}
                    <Button
                      type="danger"
                      htmlType="submit"
                      className="inp-size"
                      onClick={onSubmit}
                    >
                      Tìm kiếm
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col span={24} xs={24} style={{ paddingTop: "30px" }}>
              <div
                style={{
                  paddingTop: "30px",
                  border: "solid 1px #D8D8D8",
                  paddingLeft: "10px",
                  backgroundColor: "#F2F2F2"
                }}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <Checkbox value={5} onChange={onChange}></Checkbox>
                  </div>
                  <div className="ais-RatingMenu-link pad-bot ">
                    <p className="rate" style={{ paddingLeft: "20px" }}>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Checkbox value={4} onChange={onChange}></Checkbox>
                  </div>
                  <div className="ais-RatingMenu-link pad-bot ">
                    <p className="rate" style={{ paddingLeft: "20px" }}>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Checkbox value={3} onChange={onChange}></Checkbox>
                  </div>
                  <div className="ais-RatingMenu-link pad-bot ">
                    <p className="rate" style={{ paddingLeft: "20px" }}>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Checkbox value={2} onChange={onChange}></Checkbox>
                  </div>
                  <div className="ais-RatingMenu-link pad-bot ">
                    <p className="rate" style={{ paddingLeft: "20px" }}>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Checkbox value={1} onChange={onChange}></Checkbox>
                  </div>
                  <div className="ais-RatingMenu-link pad-bot ">
                    <p className="rate" style={{ paddingLeft: "20px" }}>
                      <i className="icon-star tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                      <i className="icon-star-o tuyen"></i>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={15}>
          <Row>
            <Col></Col>
          </Row>

          <Row>
            {listTours.map((item, index) => {
              console.log(item.ma_loai);
              if (
                index <= page * 8 &&
                index >= (page - 1) * 8 &&
                item.rate >= count &&
                item.ma_loai === props.id
              )
                return <ItemTour data={item} key={index} count={count} />;
            })}
          </Row>
          <Pagination
            defaultCurrent={1}
            total={parseInt(countPage())}
            onChange={onChangePage}
          />
        </Col>
        <Col sm={2} xs={0}></Col>
      </Row>
    </div>
  );
};
const WrappedSignUpForm = Form.create()(Index);
export default WrappedSignUpForm;
