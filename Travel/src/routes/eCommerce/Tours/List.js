import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Rate } from "antd";
import ToursList from "../../../modules/eCommerce/ToursList";
import axios from "axios";
import "./List.scss";
import {
  getToursList,
  getDiaDiem
} from "../../../modules/eCommerce/ToursList/redux/actions";

const ProductList = ({ match }) => {
  const id = match.params.id;
  const product = useSelector(state => state.ProductReducer.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursList());
    dispatch(getDiaDiem());
  });
  const data = product;
  return <ToursList data={data} id={id} />;
};

export default ProductList;
