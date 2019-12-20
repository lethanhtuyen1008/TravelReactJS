import React, { useEffect, useState } from "react";
import Ve from "../../../modules/Admin/Ve";
import { useSelector, useDispatch } from "react-redux";
import { getListVe } from "../../../modules/eCommerce/ToursList/redux/actions";
const index = () => {
  const giave = useSelector(state => state.ProductReducer.listGiaVe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListVe());
  });
  const data = giave;
  //console.log(data);
  return <Ve data={data} />;
};
export default index;
