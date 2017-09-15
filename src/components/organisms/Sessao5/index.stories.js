import React from 'react'
import { storiesOf } from '@storybook/react'

import Sessao5 from '.'

storiesOf('Organisms/Sessao5', module)
.add('Row Case', () => (
	<Sessao5 spacedAround margin alignCenter/>
));