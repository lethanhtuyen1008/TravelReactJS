import { Route, Switch } from "react-router-dom";
import Booking from "../../../modules/eCommerce/Booking";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToursDetail } from "../../../modules/eCommerce/ToursList/redux/actions";
const Book = props => {
  const { id, id_lich } = props.match.params;
  const { productDetail } = useSelector(state => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursDetail(id));
  }, [id]);
  console.log(productDetail);
  const data = productDetail;
  return <Booking data={data} id_lich={id_lich} />;
};
export default Book;
