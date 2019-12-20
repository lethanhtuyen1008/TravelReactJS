import React, { useEffect } from "react";
import { Row, Col, Icon } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryList } from "../redux/actions";
import CateItem from "./cateItem";
import "./category.less";

const Category = props => {
  const { categoryList } = useSelector(state => state.CategoryReducer);
  const dispatch = useDispatch();
  //isIpad = screen.width === 768 ? true : false;

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <div className="category">
      <div className="promotion-title">
        <span className="best-seller">Danh mục sản phẩm</span>
        <span className="all-product">
          <a>
            Xem tất cả <Icon type="right" />
          </a>
        </span>
      </div>
      <div className="category-list">
        <Row>
          <Col span={2} className="icon-cate">
            <Icon type="left-circle" className="icon-category-left" />
          </Col>
          <Col span={20} xs={24} md={20} className="col-cate-item">
            <Row align="middle" style={{padding : "20px"}}>
              {categoryList.map((cate, index) => {
                if (index < 12) {
                  return (
                    <Col className="category" xs={12} md={6} key={index}>
                      <CateItem {...cate} />
                    </Col>
                  );
                }
              })}
            </Row>
          </Col>
          <Col span={2} className="icon-cate" >
            <Icon type="right-circle" className="icon-category" />
          </Col>
        </Row>
        <button className="all-category-mobile">
          <a>Xem tất cả</a>
        </button>
      </div>
    </div>
  );
};

export default Category;
