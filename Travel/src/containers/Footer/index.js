import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWidthScreen } from "base/redux/General/GeneralAction";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Icon, Avatar } from "antd";
import "./footer.less";
const { Footer } = Layout;
const Index = React.memo(() => {
  const { loader } = useSelector(state => state.GeneralReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(getWidthScreen(window.innerWidth));
    });
  }, []);
  return (
    <div>
      <Row className="row-footer">
        <Col md={3} xs={1}></Col>
        <Col md={18} xs={22} className="">
          <Row>
            <Col md={7} xs={24} className="inter" style={{ paddingBottom : 20}}>
              <div><h3 className="title-foo" >Mạng xã hội</h3></div>
              <div style={{display : 'flex'}}>
                <div><Avatar size={40} icon="instagram" style={{ backgroundColor: 'black' }} className="ico-size" /></div>
                <div className="pading-icon-footer"><Avatar size={40} icon="facebook" style={{ backgroundColor: 'black' }} className="ico-size" /></div>
                <div className="pading-icon-footer"><Avatar size={40} icon="twitter" style={{ backgroundColor: 'black' }} className="ico-size" /></div>
              </div>
            </Col>
            <Col md={5} xs={24} className="">
              <div><h3 className="title-foo">Hỗ trợ khách hàng</h3></div>
              <div className="item-foo">Hình thức thanh toán</div>
            </Col>
            <Col md={5} xs={24} className="">
              <div><h3 className="title-foo" style={{ color: "white" }}>Thông tin</h3></div>
              <div>
                <div className="item-foo">Giới thiệu</div>
                <div className="item-foo">Đảm bảo giá tốt nhất</div>
                <div className="item-foo">Điều khoản sử dụng</div>
                <div className="item-foo">Chính sách quyền riêng tư</div>
              </div>
            </Col>
            <Col md={7} xs={24} >
              <div ><h3 className="title-foo">Liên hệ</h3></div>
              <div>
                <div className="item-foo"> <Icon type="environment" theme="filled" className="ico" />02 Pasteur, Phường 6, Quận 3, TP.HCM</div><br />
                <div className="item-foo"><Icon type="phone" theme="filled" className="ico" />(+8428) 3255 6541</div>
                <div className="item-foo"><Icon type="mail" theme="filled" className="ico" />travel@gmail.com</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ textAlign: "center", paddingTop: 70 }} >
                <div className="item-foo" >Lê Thanh Tuyên</div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} xs={1}></Col>
      </Row>
    </div>
  );
});

export default Index;
