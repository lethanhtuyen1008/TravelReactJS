import { all } from "redux-saga/effects";
import General from "./General/saga";
import Product from "../../modules/eCommerce/ToursList/redux/sagas";
import Cart from "modules/eCommerce/Cart/redux/sagas";
import Book from "../../modules/eCommerce/Booking/redux/sagas";
import Home from "modules/eCommerce/Home/redux/sagas";
import Category from "modules/eCommerce/Category/redux/sagas";
import Auth from "modules/Account/redux/sagas";
import Checkout from "modules/eCommerce/Checkout/redux/sagas";
import Ve from "../../modules/Admin/Ve/redux/sagas/index";
export default function* rootSaga() {
  yield all([
    General(),
    Product(),
    Home(),
    Book(),
    Cart(),
    Category(),
    Auth(),
    Checkout(),
    Ve()
  ]);
}
