import * as Types from "./constants";

export const booking = data => {
  return {
    type: Types.BOOKING,
    payload: data
  };
};

export const bookingsuccess = data => {
  return {
    type: Types.BOOKING_SUCCESS,
    payload: data
  };
};
