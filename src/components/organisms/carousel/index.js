import React from 'react'
import Slider from 'react-slick'

//import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
//import 'react-responsive-carousel/lib/styles/carousel.min.css'
import tvch01 from './../../../assets/images/tvch01.png'
import tvch02 from './../../../assets/images/tvch02.png'
import tvch03 from './../../../assets/images/tvch03.png'
import tvch04 from './../../../assets/images/tvch04.png'
import Img from  './../../atoms/img'

const settings = {
	dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
	lazyLoad: true,
	slidesToShow: 3,
	dots: false,
	arrows: false
};

const Carousel = (props) => (
	<Slider {...settings}>
		<div>
			<Img src = { tvch01 } />
		</div>
		<div>
			<Img src = { tvch02 } />
		</div>
		<div>
			<Img src = { tvch03 } />
		</div>
		<div>
			<Img src = { tvch04 } />
		</div>
	</Slider>
);

export default Carousel
