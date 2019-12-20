import React, { Component } from 'react';
import { Row, Col } from 'antd';

class bannerSeller extends Component {
    render() {
        return (
            <Row>
                <Col xs={24} className="banner-seller">
                    <img src="https://chiasetainguyen.com/upload-file/banner-tet-15a4ce8ef4a2f8.jpg" />
                </Col>
            </Row>
        );
    }
}

export default bannerSeller;