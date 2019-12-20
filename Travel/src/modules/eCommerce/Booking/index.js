import React, { useState } from "react";
import {
  Icon,
  Tabs,
  Button,
  Card,
  Row,
  Col,
  Table,
  Carousel,
  Form,
  Select,
  Input,
  DatePicker,
  notification
} from "antd";
const FormItem = Form;
const { Option } = Select;
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemBook from "./items/Info";
import Note from "./Note";
import Price from "./Prices";
import TourBook from "./TourBook";
import { booking } from "./redux/actions";
import "./book.less";

const Index = props => {
  const checkBook = useSelector(state => state.BookingReducer.checkBook);
  //console.log(checkBook);
  if (checkBook === true) {
    notification.open({
      message: "Đặt tour thành công",
      description:
        "Vui lòng kiểm tra lại thông tin đã đặt qua số điện thoại 0977432417",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  }
  const [count_nl, setCountNL] = useState(1);
  const [count_tn, setCountTN] = useState(0);
  const [count_te, setCountTE] = useState(0);
  var listdata = [];
  console.log(props.id_lich);
  JSON.parse(JSON.stringify(props.data)).map((item, index) => {
    listdata.push(item.ma_tour);
  });

  var listGia = [];
  listdata.map((item, index) => {
    listGia.push(item.giave);
  });
  var gia = [];
  const showGia = () => {
    var tongTien = 0;
    listGia.map((item, index) => {
      if (index < 1) {
        JSON.parse(JSON.stringify(item)).map((item2, index) => {
          if (index === 0) {
            var l = parseInt(count_te) * parseInt(item2["gia"]);
            tongTien = parseInt(tongTien) + parseInt(l);
          }
          if (index === 1) {
            var l = parseInt(count_tn) * parseInt(item2["gia"]);
            tongTien = parseInt(tongTien) + parseInt(l);
          }
          if (index === 2) {
            var l = parseInt(count_nl) * parseInt(item2["gia"]);
            tongTien = parseInt(tongTien) + parseInt(l);
          }
        });
      }
    });
    return tongTien;
  };

  const listKH = [];
  var datenew = new Date();
  const listDate = [];
  const sokh = parseInt(count_nl) + parseInt(count_te) + parseInt(count_tn);
  const { getFieldDecorator } = props.form;
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err === null) {
        for (var i = 0; i < sokh; i++) {
          //console.log(sokh);
          listDate.push(values["ngaysinh" + i].format("DD-MM-YYYY"));
        }
        for (var i = 0; i <= sokh; i++) {
          listKH.push({
            hoten: values["tenKH" + i],
            gioitinh: values["gioitinh" + i],
            ngaysinh: listDate[i],
            phongdon: false,
            loaikhach: values["loaikhach" + i]
          });
        }
        const dataPost = {
          tenKH: values["tenKH0"],
          email: values["email0"],
          dienthoai: values["dienthoai0"],
          ngaysinh: listDate[0],

          chitiet: listKH,

          diemdon: "Sài gòn",
          ngaydat: datenew,
          trangthai: true,
          tongtien: showGia(),
          lichkhoihanh: props.id_lich,
          loaiTT: values["thanhtoan"]
        };
        console.log(dataPost);
        dispatch(booking({ data: dataPost }));
      }
    });
  };
  const showData = data => {
    //console.log(data);
  };
  const setValueNL = e => {
    setCountNL(parseInt(e.target.value) + parseInt(1));
  };
  const setValueTN = e => {
    setCountTN(e.target.value);
  };
  const setValueTE = e => {
    setCountTE(e.target.value);
  };
  const showFormNL = n => {
    if (n !== 0) {
      const b = [];
      var x = parseInt(sokh) - (parseInt(count_te) + parseInt(count_tn));
      for (var i = 1; i < x; i++) {
        var stt = parseInt(i);
        b.push(
          <div className="gx-login-container">
            <div className="gx-login-content form-full">
              <div className=" gx-mb-4 color-txt gx-border-bottom">
                <h2 className="color-txt">{"Người lớn " + i}</h2>
              </div>
              <Form onSubmit={handleSubmit} layout="inline">
                <div style={{ display: "flex" }}>
                  <Row>
                    <Col md={12}>
                      <div>Họ và tên</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("tenKH" + stt, {
                          rules: [
                            { required: true, message: "Vui lòng nhập họ!" }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            placeholder="họ"
                          />
                        )}
                      </Form.Item>
                      <div>Giới tính</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("gioitinh" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng chọn giới tính!"
                            }
                          ]
                        })(
                          <Select>
                            <Option value="Nam">Nam</Option>
                            <Option value="Nữ">Nữ</Option>
                          </Select>
                        )}
                      </Form.Item>

                      <div>Số điện thoại</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("dienthoai" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhật số điện thoại"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            placeholder="họ"
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col md={12}>
                      <div>Ngày sinh</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("ngaysinh" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhập ngày sinh!"
                            }
                          ]
                        })(<DatePicker />)}
                      </Form.Item>
                      <div>Email</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("email" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhập email !"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="email" />}
                            placeholder="email"
                          />
                        )}
                      </Form.Item>
                      <Form.Item style={{ display: "none" }}>
                        {getFieldDecorator("loaikhach" + stt)(
                          <Input
                            style={{ dislay: "none" }}
                            defaultValue="5df8b23d7fc3123640551e5a"
                          />
                        )}
                      </Form.Item>
                      <div>Địa chỉ</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("diachi" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhật địa chỉ"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            placeholder="163 Lê Trọng Tấn"
                          />
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
          </div>
        );
      }
      return b;
    }
  };
  const showFormTN = n => {
    if (n !== 0) {
      const b = [];
      var bd = parseInt(count_nl);
      var kt = parseInt(sokh) - parseInt(count_te);
      //console.log(bd + " " + kt);
      for (var i = bd; i < kt; i++) {
        var stt = parseInt(i);
        b.push(
          <div className="gx-login-container">
            <div className="gx-login-content form-full">
              <div className=" gx-mb-4 color-txt gx-border-bottom">
                <h2 className="color-txt">{"Trẻ nhỏ " + i}</h2>
              </div>
              <Form onSubmit={handleSubmit} layout="inline">
                <div style={{ display: "flex" }}>
                  <Row>
                    <Col md={12}>
                      <div>Họ và tên</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("tenKH" + stt, {
                          rules: [
                            { required: true, message: "Vui lòng nhập họ!" }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            placeholder="họ"
                          />
                        )}
                      </Form.Item>
                      <div>Giới tính</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("gioitinh" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng chọn giới tính!"
                            }
                          ]
                        })(
                          <Select>
                            <Option value="Nam">Nam</Option>
                            <Option value="Nữ">Nữ</Option>
                          </Select>
                        )}
                      </Form.Item>

                      <div>Số điện thoại</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("dienthoai" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhật số điện thoại"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            placeholder="họ"
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col md={12}>
                      <div>Ngày sinh</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("ngaysinh" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhập ngày sinh!"
                            }
                          ]
                        })(<DatePicker />)}
                      </Form.Item>
                      <div>Email</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("email" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhập email !"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="email" />}
                            placeholder="email"
                          />
                        )}
                      </Form.Item>
                      <Form.Item style={{ display: "none" }}>
                        {getFieldDecorator("loaikhach" + stt)(
                          <Input
                            style={{ dislay: "none" }}
                            defaultValue="5df8a41b9d787e4444f7b1c4"
                          />
                        )}
                      </Form.Item>
                      <div>Địa chỉ</div>
                      <Form.Item className="tuyen">
                        {getFieldDecorator("diachi" + stt, {
                          rules: [
                            {
                              required: true,
                              message: "Vui lòng nhật địa chỉ"
                            }
                          ]
                        })(
                          <Input
                            prefix={<Icon type="user" />}
                            placeholder="163 Lê Trọng Tấn"
                          />
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
          </div>
        );
      }
      return b;
    }
  };
  const showFormTE = n => {
    const b = [];
    var bd = parseInt(count_nl) + parseInt(count_tn);
    var kt = parseInt(sokh);
    for (var i = bd; i < kt; i++) {
      var stt = parseInt(i);
      b.push(
        <div className="gx-login-container">
          <div className="gx-login-content form-full">
            <div className=" gx-mb-4 color-txt gx-border-bottom">
              <h2 className="color-txt">{"Trẻ em " + i}</h2>
            </div>
            <Form onSubmit={handleSubmit} layout="inline">
              <div style={{ display: "flex" }}>
                <Row>
                  <Col md={12}>
                    <div>Họ và tên</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("tenKH" + stt, {
                        rules: [
                          { required: true, message: "Vui lòng nhập họ!" }
                        ]
                      })(
                        <Input prefix={<Icon type="user" />} placeholder="họ" />
                      )}
                    </Form.Item>
                    <div>Giới tính</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("gioitinh" + stt, {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng chọn giới tính!"
                          }
                        ]
                      })(
                        <Select>
                          <Option value="Nam">Nam</Option>
                          <Option value="Nữ">Nữ</Option>
                        </Select>
                      )}
                    </Form.Item>

                    <div>Số điện thoại</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("dienthoai" + stt, {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhật số điện thoại"
                          }
                        ]
                      })(
                        <Input prefix={<Icon type="user" />} placeholder="họ" />
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <div>Ngày sinh</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("ngaysinh" + stt, {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhập ngày sinh!"
                          }
                        ]
                      })(<DatePicker />)}
                    </Form.Item>
                    <div>Email</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("email" + stt, {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhập email !"
                          }
                        ]
                      })(
                        <Input
                          prefix={<Icon type="email" />}
                          placeholder="email"
                        />
                      )}
                    </Form.Item>
                    <Form.Item style={{ display: "none" }}>
                      {getFieldDecorator("loaikhach" + stt)(
                        <Input
                          style={{ dislay: "none" }}
                          defaultValue="5df8b23b7fc3123640551e50"
                        />
                      )}
                    </Form.Item>
                    <div>Địa chỉ</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("diachi" + stt, {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhật địa chỉ"
                          }
                        ]
                      })(
                        <Input
                          prefix={<Icon type="user" />}
                          placeholder="163 Lê Trọng Tấn"
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Form>
          </div>
        </div>
      );
    }
    return b;
  };
  //=====================================================================================
  const config = {
    rules: [{ type: "object", required: true, message: "Please select time!" }]
  };

  return (
    <div className="book-tour-row">
      <TourBook data={listdata} />
      <Note />
      <Price data={listdata} />

      <div>
        <div className="gx-login-container">
          <div className="gx-login-content form-full">
            <div className=" gx-mb-4 color-txt gx-border-bottom">
              <h2 className="color-txt">Thông tin</h2>
            </div>
            <Form onSubmit={handleSubmit} layout="inline">
              <div style={{ display: "flex" }}>
                <Row>
                  <Col md={12}>
                    <div>Họ và tên</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("tenKH0", {
                        rules: [
                          { required: true, message: "Vui lòng nhập họ!" }
                        ]
                      })(
                        <Input prefix={<Icon type="user" />} placeholder="họ" />
                      )}
                    </Form.Item>
                    <div>Giới tính</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("gioitinh0", {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng chọn giới tính!"
                          }
                        ]
                      })(
                        <Select>
                          <Option value="Nam">Nam</Option>
                          <Option value="Nữ">Nữ</Option>
                        </Select>
                      )}
                    </Form.Item>

                    <div>Số điện thoại</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("dienthoai0", {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhật số điện thoại"
                          }
                        ]
                      })(
                        <Input prefix={<Icon type="user" />} placeholder="họ" />
                      )}
                    </Form.Item>
                    <div>Địa chỉ</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("diachi0", {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhật địa chỉ"
                          }
                        ]
                      })(
                        <Input
                          prefix={<Icon type="user" />}
                          placeholder="163 Lê Trọng Tấn"
                        />
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <div>Ngày sinh</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("ngaysinh0", {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhập ngày sinh!"
                          }
                        ]
                      })(<DatePicker />)}
                    </Form.Item>
                    <div>Email</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("email0", {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng nhập email !"
                          }
                        ]
                      })(
                        <Input
                          prefix={<Icon type="email" />}
                          placeholder="email"
                        />
                      )}
                    </Form.Item>
                    <div>Hình thức thanh toán</div>
                    <Form.Item className="tuyen">
                      {getFieldDecorator("thanhtoan", {
                        rules: [
                          {
                            required: true,
                            message: "Vui lòng chọn giới tính!"
                          }
                        ]
                      })(
                        <Select>
                          <Option value="5df9b4c1afd2261908d89aac">
                            Thanh toán trực tiếp
                          </Option>
                          <Option value="5dfa59fda8e9390f944b7c75">
                            Thanh toán qua ngân hàng
                          </Option>
                        </Select>
                      )}
                    </Form.Item>
                    {/* <div>Số người đi kèm</div> */}
                    <Form.Item style={{ paddingTop: "20px" }}>
                      <Row>
                        <Col md={8}>
                          <div style={{ display: "flex" }}>
                            <div style={{ width: "100px" }}>Người lớn</div>
                            <Form.Item className="" style={{ width: "80px" }}>
                              {getFieldDecorator("key_nl", {
                                rules: [
                                  {
                                    required: true,
                                    message: "Vui lòng nhập !"
                                  }
                                ]
                              })(
                                <Input placeholder="0" onChange={setValueNL} />
                              )}
                            </Form.Item>
                          </div>
                        </Col>
                        <Col md={8}>
                          <div style={{ display: "flex" }}>
                            <div>Thành niên</div>
                            <Form.Item className="" style={{ width: "80px" }}>
                              {getFieldDecorator("key_tn", {
                                rules: [
                                  {
                                    required: true
                                  }
                                ]
                              })(
                                <Input placeholder="0" onChange={setValueTN} />
                              )}
                            </Form.Item>
                          </div>
                        </Col>
                        <Col md={8}>
                          <div style={{ display: "flex" }}>
                            <div>Trẻ em</div>
                            <Form.Item className="" style={{ width: "80px" }}>
                              {getFieldDecorator("key_te", {
                                rules: [
                                  {
                                    required: true
                                  }
                                ]
                              })(
                                <Input placeholder="0" onChange={setValueTE} />
                              )}
                            </Form.Item>
                          </div>
                        </Col>
                      </Row>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Form>
          </div>
        </div>
        <div className="gx-login-container">
          <div className="gx-login-content form-full">
            <div className=" gx-mb-4 color-txt gx-border-bottom">
              <h2 className="color-txt">Danh sách khách đi kèm</h2>
            </div>
            <div>
              {showFormNL(count_nl)}
              {showFormTN(count_tn)}
              {showFormTE(count_te)}
            </div>
            <h2 className="color-txt">Tổng tiền: {showGia()} vnd</h2>
          </div>
        </div>
      </div>
      <Button block type="danger" onClick={handleSubmit}>
        Đặt ngay
      </Button>
    </div>
  );
};

export default Form.create()(Index);
