import React, { Component } from 'react';
import { Tabs, Row, Col, Input } from 'antd';

const { TabPane } = Tabs;

class optionSeller extends Component {
    
    render() {
        return (
            <div className="option-seller">
                <h3>Tất cả danh mục</h3>
                <Row>
                    <Col xs={24}>
                        <div className="list-option-seller">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Bán chạy" key="1">
                                    Content of Tab Pane 1
                                </TabPane>
                                <TabPane tab="Mới nhất" key="2">
                                    Content of Tab Pane 2
                                </TabPane>
                                <TabPane tab="Giảm nhiều nhất" key="3">
                                    Content of Tab Pane 3
                                </TabPane>
                                <TabPane tab="Giá thấp" key="4">
                                    Content of Tab Pane 4
                                </TabPane>
                                <TabPane tab="Giá cao" key="5">
                                    Content of Tab Pane 5
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default optionSeller;