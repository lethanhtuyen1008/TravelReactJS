import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getDiaDiem,getToursList } from "../../../../modules/eCommerce/ToursList/redux/actions"; //../../../modules/eCommerce/ToursList/redux/actions
const Index = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursList());
    dispatch(getDiaDiem());
  });
  const listDD = useSelector(state => state.ProductReducer.listDiaDiem);
  const showDD = () => {
    var a = [];
    JSON.parse(JSON.stringify(props.data)).map((item, index) => {
      a.push(<Input value={item.tenDD} />);
    });
    return a;
  };
  return <div>{showDD()}</div>;
};
export default Index;
