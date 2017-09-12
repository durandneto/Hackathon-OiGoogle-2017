import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import Sessao1 from '.'

storiesOf('Organisms/Sessao1', module)
.add('Row Case', () => (
	<ThemeProvider theme = { ThemePink } >
		<Sessao1 />
	</ThemeProvider>
));