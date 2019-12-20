import React from 'react';
import { Avatar, Row, Col } from 'antd';
import Slider from "react-slick";

const bannerSlide = () => {
    const x = "Du lịch trong nước luôn là lựa chọn tuyệt vời. Đường bờ biển dài hơn 3260km, những khu bảo tồn thiên nhiên tuyệt vời, những thành phố nhộn nhịp, những di tích lịch sử hào hùng, nền văn hóa độc đáo và hấp dẫn, cùng một danh sách dài những món ăn ngon nhất thế giới, Việt Nam có tất cả những điều đó. Với lịch trình dày, khởi hành đúng thời gian cam kết, Vietravel là công ty lữ hành uy tín nhất hiện nay tại Việt Nam, luôn sẵn sàng phục vụ du khách mọi lúc, mọi nơi, đảm bảo tính chuyên nghiệp và chất lượng dịch vụ tốt nhất thị trường";
    return (
        <Row>
            <Col span={24}>
                <div className={`gx-card`}>
                    <div className={`gx-card-body`} style={{paddingLeft : 10}}>
                        <Slider autoplay>
                            <div className="gx-classic-testimonial gx-slide-item" style={{ paddingRight : 40}}>
                                <Row>
                                    <Col span={5} style={{ paddingLeft : 40}}>
                                        <Avatar src={"https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg"} alt="..." size={150} />
                                    </Col>
                                    <Col span={19} style={{ paddingRight : 40}}>
                                        <h3 className="gx-title">{"Lê Thanh Tuyên"}</h3>
                                        <small className="gx-post-designation">{"Tuyên nè"}</small>
                                        <div className="gx-star-rating">

                                        </div>
                                        <p className="gx-description" style={{ paddingRight : 40}}>{x}</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="gx-classic-testimonial gx-slide-item">
                                <Row>
                                    <Col span={5} style={{ paddingLeft : 40}}>
                                        <Avatar src={"https://trustdex.news/wp-content/uploads/2018/07/kjb1435540799.jpg"} alt="..." size={150} />
                                    </Col>
                                    <Col span={19} style={{ paddingRight : 40}}>
                                        <h3 className="gx-title">{"Lê Thanh Tuyên"}</h3>
                                        <small className="gx-post-designation">{"Tuyên nè"}</small>

                                        <div className="gx-star-rating">

                                        </div>
                                        <p className="gx-description" style={{ paddingRight : 40}}>{x}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
export default bannerSlide;
