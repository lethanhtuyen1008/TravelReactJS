import React from "react";
import { Row, Col } from "antd";
import "./product-detail.less";
import Slider from "react-slick";
import ProductItem from "../productList/productItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatestProduct = React.memo(props => {
  const { productList, title } = props;

  const optionsSlideImg = {
    dots: true,
    infinite: true,
    lazyload: true,
    initialSlide: 2,
    speed: 500,
    marginLeft: 10,
    marginRight: 10,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Row className="gx-background-white gx-p-3">
      <Col span={24}>
        <div className="relates-product">
          <div className="gx-page-title gx-border-bottom">
            <h2>{title}</h2>
          </div>
          <div className="relates-content gx-pt-4">
            <Slider {...optionsSlideImg}>
              {productList.map((product, index) => {
                if(index < 10){
                  return (
                    <ProductItem key={index} {...product} />
                  )
                }
              })}
            </Slider>
          </div>
        </div>
      </Col>
    </Row>
  );
});
export default RelatestProduct;
