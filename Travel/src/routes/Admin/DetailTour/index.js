import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Detail from "../../../modules/Admin/Tours/Detail";
import { getToursDetail } from "../../../modules/eCommerce/ToursList/redux/actions";
import asyncComponent from "utils/asyncComponent";

const index = props => {
  const { id } = props.match.params;
  const { productDetail } = useSelector(state => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursDetail(id));
  }, [id]);
  const data = productDetail;
  return <Detail data={data} />;
};

export default index;
