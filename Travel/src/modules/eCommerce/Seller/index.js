import React from 'react';
import { Row, Col } from 'antd';
import DetailSeller from './detailSeller';
import SellerItem from './sellerItem';
import './seller.less';
import BannerSeller from './bannerSeller';
import OptionSeller from './optionSeller';

const index = () => {
    return (
        <>
            <div className="seller">
                <Row>
                    <Col xs={24} md={24} lg={8}>
                        <SellerItem />
                    </Col>
                    <Col xs={0} md={24} lg={16}>
                        <DetailSeller />
                    </Col>
                </Row>
                <BannerSeller />
                <Row>
                    <Col span={24}>
                        <OptionSeller />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default index;