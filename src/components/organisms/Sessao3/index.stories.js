import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import Sessao3 from '.'

storiesOf('Organisms/Sessao3', module)
.add('Row Case', () => (
	<Sessao3 spacedAround margin/>
));