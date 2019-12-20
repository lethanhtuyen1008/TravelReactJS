import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { getToursDetail } from "../../../modules/eCommerce/ToursList/redux/actions";
import { onAddToCart } from "modules/eCommerce/Cart/redux/actions";
import DetailProduct from "modules/eCommerce/Product/Detail/DetailProduct";
import RelatestProduct from "modules/eCommerce/Product/Detail/RelatestProduct";
import ConfirmBuy from "modules/eCommerce/Product/ConfirmBuy";
import DetailTour from "../../../modules/eCommerce/ToursList/TourDetail";

const Detail = props => {
  const { id } = props.match.params;
  const { productDetail } = useSelector(state => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursDetail(id));
  }, [id]);
  const data = productDetail;
  return <DetailTour data={data} />;
};

export default Detail;
