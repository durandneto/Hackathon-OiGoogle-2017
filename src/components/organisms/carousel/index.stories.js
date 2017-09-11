import React from 'react'
import { storiesOf } from '@storybook/react'

import Carousel  from '.'

storiesOf('Organisms/Carousel', module)
.add('Normal Case', () => (
	<Carousel />
));