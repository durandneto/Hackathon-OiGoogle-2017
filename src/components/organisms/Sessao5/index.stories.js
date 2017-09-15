import React from 'react'
import { storiesOf } from '@storybook/react'

import Sessao5 from '.'

import oiBl from './../../../assets/images/icon-bl-section.png'

storiesOf('Organisms/Sessao5', module)
.add('Row Case', () => (
	<Sessao5 spacedAround margin alignCenter/>
));
