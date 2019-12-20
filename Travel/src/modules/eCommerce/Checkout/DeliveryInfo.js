import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Form, Button, Input, Icon, Col, Radio, Modal, Select } from "antd";
import CurrencyFormat from "react-currency-format";
import "./checkout.less";

const FormItem = Form.Item;
const MSG_REQUIRED = "Dữ liệu bắt buộc";

const Delivery = React.memo(props => {
  const { getFieldDecorator } = props.form,
    [visible, setVisible] = useState(false),
    { addressDeli, listShop, payment, listProvince, listWard } = props;

  useEffect(() => {
    if (Object.entries(addressDeli).length <= 0) setVisible(true);
  }, [addressDeli]);

  const handleAddDeliInfo = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          full_name: values.fullName,
          address: values.address,
          email: values.email,
          phone: values.phoneNumber,
          country: "vn",
          province: values.province
        };
        props.onAddAddressDeli(data);
        setVisible(false);
        props.form.resetFields();
      }
    });
  };
  const showModalAddress = () => setVisible(true);
  
  const handleCancel = () => {
    if (Object.entries(addressDeli).length > 0) {
      setVisible(false);
      props.form.resetFields();
      props.resetWard();
    }
  };
  const onChangeProvince = value => {
    props.getWard(value);
  };

  /**
   * @function showProvince
   */
  const showProvince = data => {
    let result = null;
    if (data.length > 0) {
      result = data.map((pr, index) => {
        return (
          <Select.Option key={index} value={pr.province_id}>
            {pr.province_name}
          </Select.Option>
        );
      });
    }
    return result;
  };
  const provinceData = useMemo(() => showProvince(listProvince), [
    listProvince
  ]);

    /**
   * @function showProvince
   */
  const showWard = data => {
    let result = null;
    if (data.length > 0) {
      result = data.map((pr, index) => {
        return (
          <Select.Option key={index} value={pr.district_id}>
            {pr.district_name}
          </Select.Option>
        );
      });
    }
    return result;
  };
  const wardData = useMemo(() => showWard(listWard), [
    listWard
  ]);

  const updateAddress = value => {
    //..code
  }

  /**
   * @function onChangePaymentMethod
   * @summary update payment method
   */
  const onChangePaymentMethod = useCallback(e => {
    props.onSelectPaymentMethod(e.target.value);
  });
  return (
    <>
      <Col className="gx-background-white gx-mb-3 gx-box-shadow" span={24}>
        <div className="gx-page-title">
          <h5 className="gx-border-bottom gx-text-red gx-p-3 gx-font-weight-bold">
            Địa chỉ nhận hàng
          </h5>
        </div>
        <div className="address-deli gx-d-flex gx-justify-content-between">
          <div className="address-main gx-pb-3">
            {Object.entries(addressDeli).length <= 0 ? (
              <span className="gx-text-red">Chưa có thông tin giao hàng</span>
            ) : (
              <>
                <strong>Lê Van A</strong> - {addressDeli.phone}
                <p>{`${addressDeli.address}, ${addressDeli.province}, Việt Nam`}</p>
              </>
            )}
          </div>
          <div
            onClick={showModalAddress}
            className="edit gx-text-primary gx-pointer"
          >
            <Icon type="edit" /> Thay đổi
          </div>
        </div>
      </Col>
      <Col className="gx-background-white gx-mb-3 gx-box-shadow" span={24}>
        <div className="gx-page-title">
          <h5 className="gx-border-bottom gx-text-red gx-p-3 gx-font-weight-bold">
            Phương thức vận chuyển
          </h5>
        </div>
        <div className="gx-d-flex gx-flex-column">
          <div className="gx-d-flex gx-flex-column gx-border-bottom">
            <span>Chuyển phát tiêu chuẩn</span>
            <span className="gx-mt-1 gx-mb-2">
              Dự kiến giao hàng từ <strong>1 - 2</strong> ngày.
            </span>
          </div>
          {/* fee deli */}
          <div className="st-fee-deli gx-pointer gx-mb-3">
            <div className="gx-page-title gx-mt-2">
              <h5 className="gx-text-primary">
                Phí vận chuyển:{" "}
                <strong>
                  <CurrencyFormat
                    value={200000}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"đ"}
                  />
                </strong>
                <small><i> (Tạm tính)</i></small>
              </h5>
            </div>
           
          </div>
        </div>
      </Col>
      <Col className="gx-background-white gx-mb-3 gx-box-shadow" span={24}>
        <div className="gx-page-title">
          <h5 className="gx-border-bottom gx-text-red gx-p-3 gx-font-weight-bold">
            Phương thức thanh toán
          </h5>
        </div>
        <div className="st-pttt">
          <div className="address-main gx-mb-3">
            <Radio.Group
              defaultValue={payment}
              onChange={onChangePaymentMethod}
              className="gx-d-flex gx-flex-column gx-align-items-start gx-justify-content-start"
            >
              <Radio value={"COD"}>
                <div className="gx-d-inline-table">
                  <strong>Thanh toán khi nhận hàng (COD)</strong>
                  <br />
                  <small className="gx-text-grey">
                    <i>Trả tiền mặt</i>
                  </small>
                </div>
              </Radio>
              <Radio className="gx-mt-2" value={"PaymentOnline"}>
                <div className="gx-d-inline-table">
                  <strong>Thanh toán trực tuyến</strong>
                  <br />
                  <small className="gx-text-grey">
                    <i>
                      Thanh toán bằng thẻ tín dụng/ATM nội địa hoặc chuyển khoản
                    </i>
                  </small>
                </div>
              </Radio>
            </Radio.Group>
          </div>
        </div>
      </Col>
      <Modal
        visible={visible}
        maskClosable={addressDeli.length <= 0 ? false : true}
        className="st-modal-up-ad"
        width="400px"
        onOk={handleAddDeliInfo}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onSubmit={handleAddDeliInfo} className="st-form-up-add">
          <FormItem className="item-checkout">
            <span className="gx-d-block gx-font-size-12">
              Họ và tên <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("fullName", {
              rules: [
                {
                  required: true,
                  message: MSG_REQUIRED
                }
              ]
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="Họ và tên người nhận"
              />
            )}
          </FormItem>
          <FormItem className="item-checkout">
            <span className="gx-d-block gx-font-size-12">
              Email <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("email", {
              rules: [
                {
                  required: true,
                  message: MSG_REQUIRED
                },
                {
                  type: "email",
                  message: "Chưa đúng định dạng"
                }
              ]
            })(
              <Input
                prefix={<Icon type="mail" />}
                placeholder="Email người nhận"
              />
            )}
          </FormItem>
          <FormItem className="item-checkout">
            <span className="gx-d-block gx-font-size-12">
              Tỉnh thành/Quận huyện <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("province", {
              rules: [
                {
                  required: true,
                  message: MSG_REQUIRED
                }
              ]
            })(
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn Tỉnh thành/Quận huyện"
                optionFilterProp="children"
                onChange={onChangeProvince}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {provinceData}
              </Select>
            )}
          </FormItem>
          <FormItem className="item-checkout">
            <span className="gx-d-block gx-font-size-12">
              Phường xã <small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("ward", {
              rules: [
                {
                  required: true,
                  message: MSG_REQUIRED
                }
              ]
            })(
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Chọn Phường/Xã"
                optionFilterProp="children"
                onChange={updateAddress}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {wardData}
              </Select>
            )}
          </FormItem>
          <FormItem className="item-checkout">
            <span className="gx-d-block gx-font-size-12">
              Địa chỉ<small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("address", {
              rules: [
                {
                  required: true,
                  message: MSG_REQUIRED
                }
              ]
            })(
              <Input
                prefix={<Icon type="shop" />}
                placeholder="Tên đường, số nhà"
              />
            )}
          </FormItem>
          <FormItem className="item-checkout">
            <span className="gx-d-block gx-font-size-12">
              Số điện thoại<small className="gx-text-red">*</small>
            </span>
            {getFieldDecorator("phoneNumber", {
              rules: [
                {
                  required: true,
                  message: MSG_REQUIRED
                }
              ]
            })(
              <Input
                prefix={<Icon type="phone" />}
                type="number"
                placeholder="Số điện thoại người nhận"
              />
            )}
          </FormItem>
          <FormItem className="gx-mb-1 gx-mt-3 gx-d-block gx-full-width">
            <Button
              key="submit"
              className="gx-btn-red gx-mb-1 gx-full-width"
              onClick={handleAddDeliInfo}
            >
              {addressDeli.length <= 0
                ? "THÊM THÔNG TIN GIAO HÀNG"
                : "CẬP NHẬT THÔNG TIN GIAO HÀNG"}
            </Button>
          </FormItem>
        </Form>
      </Modal>
    </>
  );
});
export default Form.create()(Delivery);
