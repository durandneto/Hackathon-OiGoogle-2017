import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import Sessao4 from '.'

storiesOf('Organisms/Sessao4', module)
.add('Row Case', () => (
	<Sessao4 spacedAround margin/>
));