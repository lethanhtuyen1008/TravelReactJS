import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const noImage = require("assets/images/notFound.png");
const CateItem = ({ title, image, description }) => {
  return (
    <div className="category-item">
      <div className="product-item">
        <Link to="/product/list">
          <Row className="container">
            <Col span={10} xs={24} md={10} className="col-text-item div2">
              <Row className="gx-pl-1">
                <div className="text-item-1 ">
                  {title}
                </div>
              </Row>
            </Col>
            <Col span={14} xs={24} md={14} className="div1">
              <div className="product-image">
                <div className="gx-grid-thumb-equal">
                  <span className="gx-link gx-grid-thumb-cover">
                    <img
                      alt="product"
                      src={process.env.IMG_URL + image}
                      onError={e => (e.target.src = noImage)}
                    />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Link>
      </div>
    </div>
  );
};

export default CateItem;
