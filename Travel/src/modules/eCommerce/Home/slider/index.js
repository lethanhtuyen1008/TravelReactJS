import React from 'react';
import { Row, Col } from 'antd';
import SliderItem from './sliderItem';
import './slider.scss';

class Slider extends React.Component {
  render() {
    return (
      <div className='slider-wrapper'>
        <Row>
          <SliderItem />
        </Row>
      </div>
    )
  }
}

export default Slider;
