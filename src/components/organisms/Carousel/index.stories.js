import React from 'react'
import { storiesOf } from '@storybook/react'

import Carousel  from '.'

import img1 from './../../../assets/images/tvch01.png'
import img2 from './../../../assets/images/tvch02.png'

const settings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
	slidesToShow: 1,
	lazyLoad: true,
	dots: false,
	arrows: false,
	responsive: [ { breakpoint: 500, settings: { slidesToShow: 1, } }, { breakpoint: 800, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: 'unslick' } ]
};

storiesOf('Organisms/Carousel', module)
.add('Normal Case', () => (
	<Carousel
		{...settings}
      images={[
        {'src': img1},
        {'src': img2}
      ]}
	/>

));
