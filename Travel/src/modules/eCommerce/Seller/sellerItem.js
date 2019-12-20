import React, { Component } from 'react';
import { Avatar, Icon, Button } from 'antd';

class sellerItem extends Component {
    render() {
        return (
            <div className="seller-item">
                <div className="left-seller">
                    <Avatar className="avatar-seller" size={90}>
                        Edward
                    </Avatar>
                </div>
                <div className="right-seller">
                    <span className="seller-name">Điện máy Minh Phương</span>
                    <span className="seller-status">
                        <i className="icon icon-circle" />
                        Hoạt động gần nhất cách đây 5 phút
                    </span>
                    <div className="seller-rate">
                        <Icon type="star" theme='filled' style={{color: "#fa3d3d", marginRight: '4px'}} />
                        <Icon type="star" theme='filled' style={{color: "#fa3d3d", marginRight: '4px'}} />
                        <Icon type="star" theme='filled' style={{color: "#fa3d3d", marginRight: '4px'}} />
                        <Icon type="star" theme='filled' style={{color: "#fa3d3d", marginRight: '4px'}} />
                        <Icon type="star" style={{color: "#fa3d3d"}} />
                        <span style={{color: "#fa3d3d", margin: '0 10px'}}>4.0</span>
                    </div>
                    <em>(1,533 đánh giá)</em>
                    <div className="shop-location" style={{marginBottom: '10px'}}>Kho hàng: <span>Hà nội</span></div>
                    <div className="shop-follow">
                        <Button type="danger" ghost>
                            <Icon type="heart" /> Theo dõi
                        </Button>
                        <Button type="default">
                            <Icon type="inbox" /> Chat ngay
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default sellerItem;