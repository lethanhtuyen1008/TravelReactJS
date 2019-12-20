import React from 'react';
import { Col, Card, Icon } from 'antd';

const ItemBanner = ({ data }) => {
    return (
        <Col xs={24} md={6} style={{ textAlign: "center" }}>
            <div className='banner'>
                <Card className='gx-card-widget banner'>
                    <div className="gx-mt-xxl-3 gx-ayurveda-thumb">
                        <Icon className="gx-img-fluid gx-w-100 icon-banner" theme="filled" type={data.icon} />
                    </div>
                    <div className="gx-card-full gx-text-center">
                        <div className="gx-pt-4 gx-px-3">
                            <h2 className="gx-mb-4">{data.title}</h2>
                            <p>{data.description}</p>
                            {/*<span className="gx-text-primary gx-pointer gx-text-uppercase gx-mb-3 gx-mb-xxl-2 gx-d-block">learn More</span>*/}
                        </div>

                    </div>
                </Card>
            </div>
        </Col>
    )
};
export default ItemBanner;