import React from "react";
import { APIIMG } from "../../../../../envAPI";
const Index = props => {
  return (
    <div style={{padding :  "5px"}}>
      <img
        className="gx-rounded-lg"
        alt="..."
        src={APIIMG + props.data}
        style={{ height: "200px", width: "500px" }}
      />
    </div>
  );
};
export default Index;
