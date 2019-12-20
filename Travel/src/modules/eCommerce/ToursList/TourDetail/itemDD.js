import React from "react";
import { Col } from "antd";
const Index = props => {
  const data = props.data;
  return (
    <Col span={24}>
      <div className="gx-timeline-section">
        <div className={`gx-timeline-items`}>
          <div className="gx-timeline-badge gx-timeline-img">
            <img
              src={require("assets/images/pentagon.png")}
              alt="Pentagon"
              title="Pentagon"
              style={{ width: "40px" }}
            />
          </div>
          <div className="gx-timeline-panel">
            <div className="gx-timeline-panel-header">
              <div className="gx-timeline-header-img gx-timeline-left"></div>
              <div className="gx-timeline-heading">
                <h3 className="gx-timeline-title">{data.tenDD}</h3>
              </div>
            </div>
            <div className="gx-timeline-body">
              <p>{data.chi_tiet}</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Index;
