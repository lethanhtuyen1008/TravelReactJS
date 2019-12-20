import React from "react";
import { APIIMG } from "../../../../../envAPI";
const Index = props => {
  return (
    <li>
      <img
        alt="..."
        src={APIIMG + props.data}
        className="gx-rounded-lg gx-img-fluid"
      />
    </li>
  );
};
export default Index;
