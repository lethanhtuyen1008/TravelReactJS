import React from 'react';
import { Row, Col, Icon, Button } from "antd";
import ProductItem from './productItem';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [{
        id: 1,
        imgUrl: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/gai-xinh-thai-lan-Nene.jpg'
      },
      {
        id: 2,
        imgUrl: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/gai-xinh-thai-lan-Nene.jpg'
      },
      {
        id: 3,
        imgUrl: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/gai-xinh-thai-lan-Nene.jpg'
      },
      {
        id: 4,
        imgUrl: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/gai-xinh-thai-lan-Nene.jpg'
      },
      {
        id: 5,
        imgUrl: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/gai-xinh-thai-lan-Nene.jpg'
      },
      {
        id: 6,
        imgUrl: 'https://thuthuatnhanh.com/wp-content/uploads/2018/07/gai-xinh-thai-lan-Nene.jpg'
      }
      ]
    }
  }

  isIpad = screen.width === 768 ? true : false;

  render() {
    return (
      <div>
        <div className='promotion-title'>
          <span className='best-seller'>Bán chạy nhất</span>
          <span className='all-product'>
            <a>Xem tất cả <Icon type="right" /></a>
          </span>
        </div>
        <div className="promotion-list">
          <button className="arrow-icon arrow-left"><Icon type="left-circle" /></button>
          <button className="arrow-icon arrow-right"><Icon type="right-circle" /></button>
          <Row>
            {
              this.state.product.map((prod, idx) => {
                return (
                  <Col xs={12} md={this.isIpad ? 8 : 4} key={idx}>
                    <ProductItem {...prod} />
                  </Col>
                )}
            }
          </Row>
          <button className='all-product-mobile'>
            <a>Xem tất cả</a>
          </button>
        </div>
      </div>
    )
  }
}

export default ProductList;
