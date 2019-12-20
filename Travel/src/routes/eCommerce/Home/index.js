import React, { useEffect, useMemo } from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getSlideList } from "modules/eCommerce/Home/redux/actions";
import { getProductList } from "modules/eCommerce/Product/redux/actions";
import Banner from "../../../modules/eCommerce/Home/slider/banner";
import ListTours from "../../../modules/eCommerce/Home/Tours";
import SliderItem from "modules/eCommerce/Home/slider/sliderItem";
import BannerSlide from "../../../modules/eCommerce/Home/slider/bannerSlide";
import BannerMidle from "../../../modules/eCommerce/Home/slider/bannerMidle";
import { getToursList } from "../../../modules/eCommerce/ToursList/redux/actions";
import ToursList from "../../../modules/eCommerce/ToursList";
import Hotels from "../../../modules/eCommerce/Home/Hotels";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = React.memo(props => {
  const slideList = [
    {
      name: " Lê Thanh Tuyên",
      image: ""
    },
    {
      name: " Lê Thanh Tuyên",
      image: ""
    },
    {
      name: " Lê Thanh Tuyên",
      image: ""
    },
    {
      name: " Lê Thanh Tuyên",
      image: ""
    }
  ];
  const showSlide = data => {
    let result = null;
    result = (
      <div className="slider-wrapper">
        <Row>
          <Col className="first-slide-col" span={24}>
            <SliderItem height="596px" slide={data.name} />
          </Col>
        </Row>
      </div>
    );
    return result;
  };
  const product = useSelector(state => state.ProductReducer.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursList());
  });
  const data = product;
  return (
    <div style={{ background: "white" }}>
      <SliderItem />
      <Banner />
      <ListTours data={data} />
      <BannerMidle />
      {/* <BannerSlide /> */}
      <Hotels />
      {/* End Slide */}
    </div>
  );
});

export default Index;
