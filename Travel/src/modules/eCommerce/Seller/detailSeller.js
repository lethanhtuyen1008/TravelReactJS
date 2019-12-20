import React, { Component } from 'react';
import { Row, Col } from 'antd';

class DetailSeller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            certificateSeller: [
                {
                    id: 1,
                    icon: 'icon icon-graduation',
                    title: 'Chứng nhận bởi Onesmart',
                    content: 'Cửa hàng đã cung cấp đủ giấy tờ kinh doanh'
                },
                {
                    id: 2,
                    icon: 'icon icon-team',
                    title: 'Cam kết hàng chính hiệu 100%',
                    content: 'Cửa hàng này đã cam kết chỉ bán sản phẩm thật'
                },
                {
                    id: 3,
                    icon: 'icon icon-revenue-new',
                    title: 'Hoàn tiền 100%',
                    content: 'Onesmart trực tiếp hoàn tiền 100% trong trường hợp phát hiện hàng giả'
                }
            ],
            aboutSeller: [
                {
                    id: 1,
                    icon: 'icon icon-schedule',
                    type: 'Thành viên từ',
                    content: '2+ năm'
                },
                {
                    id: 2,
                    icon: 'icon icon-home',
                    type: 'Loại hình',
                    content: 'Doanh nghiệp'
                },
                {
                    id: 3,
                    icon: 'icon icon-editor',
                    type: 'VAT',
                    content: 'Xuất hóa đơn cho tất cả sản phẩm'
                },
                {
                    id: 4,
                    icon: 'icon icon-shopping-cart',
                    type: 'Sản phẩm',
                    content: '10+'
                }
            ]
        }
    }


    render() {
        return (
            // <div>
            //     <Row>
            //         {this.state.certificateSeller.map((item,index) => {
            //             return (
            //                 <Col xs={8} key={index}>
            //                     <div className="seller-medal">
            //                         <i className={item.icon} />
            //                         <div className="seller-medal-content">
            //                             <p>{item.title}</p>
            //                             <span>{item.content}</span>
            //                         </div>
            //                     </div>
            //                 </Col>
            //             )
            //         })}
            //     </Row>
            //     <Row>
            //         {this.state.aboutSeller.map((item,index) => {
            //             return (
            //                 <Col xs={8} key={index}>
            //                     <div className="seller-feature">
            //                         <i className={item.icon} />
            //                         <span>{item.type}:</span>
            //                         <span className="seller-feature-content">{item.content}</span>
            //                     </div>
            //                 </Col>
            //             )
            //         })}
            //     </Row>
            // </div>
            <Row>
                <Col xs={24} md={8} className="info-seller">
                    <div className="seller-medal">
                        <i className='icon icon-graduation' />
                        <div className="seller-medal-content">
                            <p>Chứng nhận bởi Onesmart</p>
                            <span>Cửa hàng đã cung cấp đủ giấy tờ kinh doanh</span>
                        </div>
                    </div>
                    <div className="seller-feature">
                        <i className='icon icon-schedule' />
                        <span>Thành viên từ:</span>
                        <span className="seller-feature-content">2+ năm</span>
                    </div>
                    <div className="seller-feature">
                        <i className='icon icon-home' />
                        <span>Loại hình:</span>
                        <span className="seller-feature-content">Doanh nghiệp</span>
                    </div>
                </Col>
                <Col xs={24} md={8} className="info-seller">
                    <div className="seller-medal">
                        <i className='icon icon-team' />
                        <div className="seller-medal-content">
                            <p>Cam kết hàng chính hiệu 100%</p>
                            <span>Cửa hàng này đã cam kết chỉ bán sản phẩm thật</span>
                        </div>
                    </div>
                    <div className="seller-feature">
                        <i className='icon icon-editor' />
                        <span>VAT:</span>
                        <span className="seller-feature-content">Xuất hóa đơn cho tất cả sản phẩm</span>
                    </div>
                </Col>
                <Col xs={24} md={8} className="info-seller">
                    <div className="seller-medal">
                        <i className='icon icon-revenue-new' />
                        <div className="seller-medal-content">
                            <p>Hoàn tiền 100%</p>
                            <span>Onesmart trực tiếp hoàn tiền 100% trong trường hợp phát hiện hàng giả</span>
                        </div>
                    </div>
                    <div className="seller-feature">
                        <i className='icon icon-shopping-cart' />
                        <span>Sản phẩm:</span>
                        <span className="seller-feature-content">10+</span>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default DetailSeller;