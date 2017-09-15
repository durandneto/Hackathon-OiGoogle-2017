import React, { Component } from 'react'
import Slider from 'react-slick'
import Img from './../../atoms/img'

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {
          this.props.images.map( (item, index ) => {
            return <div key = { index } >{ <Img src = { item.src } /> }</div>
          })
        }
      </Slider>
    );
  }
}

export default SimpleSlider