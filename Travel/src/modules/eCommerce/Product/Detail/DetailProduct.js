import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Rate, Button, Input, Icon } from "antd";
import "./product-detail.less";
import Slider from "react-slick";
import CurrencyFormat from "react-currency-format";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const noImage = require("assets/images/notFound.png");
const Index = React.memo(props => {
  const [count, setCount] = useState(1),
    { productDetail } = props;

  const optionsSlideImg = {
    dots: true,
    infinite: true,
    speed: 500,
    marginLeft: 10,
    marginRight: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  /**
   * @function increase
   * @summary increase quantity
   */
  const increase = () => {
    const countCurrent = count + 1;
    setCount(countCurrent);
  };
  /**
   * @function decline
   * @summary desrease quantity
   */
  const decline = () => {
    let countCurrent = count - 1;
    if (countCurrent < 1) {
      countCurrent = 1;
    }
    setCount(countCurrent);
  };
  const onChangeQuantity = e => setCount(parseInt(e.target.value))
  /**
   * @function showSelectPriceToBuy
   * @param {data} product detail
   * @summary show popup select price to buy
   */
  const showSelectPriceToBuy = data => {
    props.getProductToBuy({ product: data, quantity: count });
    props.onShowConfirm(true);
  };

  const showDetail = (data, count) => {
    let result = null;
    if (data && Object.entries(data).length > 0) {
      result = (
        <>
          <Row className="gx-background-white gx-pt-4 gx-mb-4">
            <Col lg={10} md={10} sm={24} xs={24}>
              <div className="st-left-detail">
                <div className="gx-product-item gx-product-vertical">
                  <Slider {...optionsSlideImg}>
                    {/* {product.map((obj, index) => {
                      return ( */}
                    <div className="gx-product-image">
                      <div className="gx-grid-thumb-equal gx-grid-thumb-equal-custom">
                        <span className="gx-link gx-grid-thumb-cover gx-p-1">
                          <img
                            alt="Remy Sharp"
                            src={process.env.IMG_URL + data.image}
                            onError={e => (e.target.src = noImage)}
                          />
                        </span>
                      </div>
                    </div>
                    {/* );
                    })} */}
                  </Slider>
                </div>
              </div>
            </Col>
            <Col lg={14} md={14} sm={24}>
              <div className="right-product-detail">
                <div className="gx-page-title">
                  <h2>{data.title}</h2>
                </div>
                <div className="price">
                  <div className="ant-row-flex">
                    <h4 className="price-main">
                      <CurrencyFormat
                        value={data.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" VNĐ"}
                      />
                    </h4>
                    {/* <h5 className="gx-text-muted gx-px-2">
                      <del>
                        <CurrencyFormat
                          value={10000}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={" VNĐ"}
                        />
                      </del>
                    </h5> */}
                  </div>
                  <div className="ant-row-flexs">
                    <span>hoặc</span>
                    <h4 className="price-main">
                      <CurrencyFormat
                        value={data.ocPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" VNĐ + "}
                      />
                      <CurrencyFormat
                        value={data.ocPoint}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" OC"}
                      />
                    </h4>
                  </div>
                  {/* <div className="ant-row-flex">
                    <h5 className="gx-text-success">10% off</h5>
                  </div> */}
                </div>
                <div className="brand">
                  {/* <span className="gx-mr-2">
                    Sản phẩm của:{" "}
                    <span className="gx-text-primary">KNOW Shop</span>
                  </span> */}
                  <span className="gx-text-light-grey">SKU: {data.sku}</span>
                </div>
                <div className="rated gx-mt-2 gx-border-bottom gx-pb-2">
                  <Rate className="gx-font-size-18" disabled defaultValue={2} />
                  <a className="gx-font-size-12 gx-ml-1" href="#rated">
                    Xem đánh giá chi tiết
                  </a>
                </div>
                <div
                  className="product-info gx-mt-2 gx-border-bottom gx-pb-2"
                  dangerouslySetInnerHTML={{ __html: data.shortDescription }}
                />
                <div className="st-buy-product gx-mt-4">
                  <div className="st-quantity">
                    <Button onClick={decline}>
                      <Icon type="minus" />
                    </Button>
                    <Input value={count} onChange={e => onChangeQuantity(e)} />
                    <Button onClick={increase}>
                      <Icon type="plus" />
                    </Button>
                  </div>
                  <Button
                    onClick={() => showSelectPriceToBuy(data)}
                    className="add-to-cart gx-btn-red gx-ml-4"
                  >
                    <Icon type="shopping-cart" />
                    MUA HÀNG
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="gx-background-white gx-p-3 gx-mb-4">
            <Col span={24}>
              <div className="des-product">
                <div className="gx-page-title gx-border-bottom">
                  <h2>MÔ TẢ SẢN PHẨM</h2>
                </div>
                <div
                  className="des-content gx-pt-4"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </div>
            </Col>
          </Row>
        </>
      );
    }
    return result;
  };
  const showDetailMemo = useMemo(() => showDetail(productDetail, count), [
    productDetail,
    count
  ]);
  return showDetailMemo;
});
export default Index;
