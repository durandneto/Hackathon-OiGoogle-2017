import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import BreadCrumb from '.'

storiesOf('Organisms/BreadCrumb', module)
.add('Normal Case', () => (
	<BreadCrumb margin />
));