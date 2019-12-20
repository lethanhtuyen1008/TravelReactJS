import React from "react";
import { APIIMG } from "../../../../../envAPI";
const Index = props => {
  return (
    <div>
      <img className="gx-rounded-lg" alt="..." src={APIIMG + props.data} />
    </div>
  );
};
export default Index;
