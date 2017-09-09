import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import Sessao2 from '.'

storiesOf('Organisms/Sessao2', module)
.add('Row Case', () => (
	<Sessao2 spacedAround/>
));