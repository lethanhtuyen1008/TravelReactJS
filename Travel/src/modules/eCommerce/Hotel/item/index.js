import React from "react";
import { Button } from "antd";

const Index = props => {
  return (
    <div className={`gx-product-row even`}>
      <div className="gx-product-col gx-product-thumb ">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img
              alt="Special Edition Party Spas"
              src="https://cdn.wallpapersafari.com/65/60/Cu4Uzk.jpg"
            />
          </span>
        </div>
      </div>
      <div className="gx-product-col gx-product-content">
        <h2>helo man</h2>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <Button type="primary">hello</Button>
      </div>
    </div>
  );
};
export default Index;
