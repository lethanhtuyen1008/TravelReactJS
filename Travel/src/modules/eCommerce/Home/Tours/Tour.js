import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Select, Badge, Col, Button } from "antd";
const Index = props => {      
  const data = props.data;
  const [gia, setGia] = useState(0);
  const showrating = n => {
    const result = [];
    for (var i = 1; i <= n; i++) {
      result.push(<i className="icon-star" key={i}></i>);
    }
    for (var j = 1; j <= 5 - n; j++) {
      result.push(<i className="icon-star-o icon-star" key={j}></i>);
    }
    return result;
  };
  var a = JSON.parse(JSON.stringify(data.giave));
  var b = JSON.parse(JSON.stringify(data.hinh));
  const showImage = () => {
    var img = "";
    b.map((item, index) => {
      if (index < 1) img = item.url;
    });
    return "https://evening-refuge-27360.herokuapp.com/api/images/" + img;
  };
  const showGia = () => {
    var x = 0;
    a.map((it, index) => {
      x = it.gia;
    });
    return x;
  };
  return (
    <Col md={6} sm={12} xs={24} className="col-tour-item img-wrapper">
      {/* {JSON.parse(JSON.stringify(data.hinh)).map((it, index) => {
        return <p>{it.url}</p>;
      })} */}
      <div className="gx-product-item gx-product-vertical tour-item inner-img">
        <div className="gx-product-image">
          {/*<img src={"/imageTours/tours/" + data.image} className="image-tour" />*/}
          <img src={showImage()} className="image-tour" />
        </div>
        <div className="gx-product-body">
          <div
            className="gx-product-name til pad-bot"
            style={{ display: "flex" }}
          >
            <div>{data.ten}</div>
          </div>

          <div className="ais-RatingMenu-link pad-bot">
            <p className="rate">
              {showrating(data.rate)}
              <span className="rat">{data.rate} Rating</span>
            </p>
          </div>
          <div className="gx-mb-3 pad-bot">số chỗ trống {data.socho}</div>
          <div className="gx-product-price pad-bot gx-border-bottom">
            {data.songay} ngày {data.songay - 1} đêm
          </div>
          <div className="pad-top" style={{ display: "flex" }}>
            <div>{showGia()} vnd</div>
            <div className="div-btn">
              <Link to={"tours/detail/" + data._id}>
                <Button type="danger" className="btn-view">
                  <p className="">Xem chi tiết</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Index;
