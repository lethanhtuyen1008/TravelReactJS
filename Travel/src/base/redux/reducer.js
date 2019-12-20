import { combineReducers } from "redux";
import HomeReducer from "modules/eCommerce/Home/redux/reducers";
import GeneralReducer from "./General/GeneralReducer";
import ProductReducer from "modules/eCommerce/ToursList/redux/reducers";
import CategoryReducer from "modules/eCommerce/Category/redux/reducers";
import CartReducer from "modules/eCommerce/Cart/redux/reducers";
import AuthReducer from "modules/Account/redux/reducers";
import CheckOutReducer from "modules/eCommerce/Checkout/redux/reducers";
import BookingReducer from "../../modules/eCommerce/Booking/redux/reducers";
import GiaVeReducer from "../../modules/Admin/Ve/redux/reducers";

const rootReducer = combineReducers({
  GeneralReducer,
  HomeReducer,
  ProductReducer,
  CartReducer,
  CategoryReducer,
  CheckOutReducer,
  AuthReducer,
  BookingReducer,
  GiaVeReducer
});
export default rootReducer;
