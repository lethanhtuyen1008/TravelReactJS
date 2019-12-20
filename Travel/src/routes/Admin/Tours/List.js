import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Rate } from "antd";
import ListTour from "../../../modules/Admin/Tours";
import axios from "axios";
import { getToursList } from "../../../modules/eCommerce/ToursList/redux/actions"; //../../../modules/eCommerce/ToursList/redux/actions

const ProductList = ({ match }) => {
  console.log(match);
  const product = useSelector(state => state.ProductReducer.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursList());
  });
  const data = product;
  return <ListTour data={data} />;
  //   return <div>danh sách</div>;
};

export default ProductList;
