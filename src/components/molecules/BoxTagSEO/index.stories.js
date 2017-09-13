import React from 'react'
import { storiesOf } from '@storybook/react'
import { action, decorateAction } from '@storybook/addon-actions';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);



import Row from './../../atoms/container/row'
import Col from './../../atoms/container/column'
import BoxTagSEO from '.'

const Text = {
	text: {
		good: 'Bom'
		, bad: 'Ruim'
		, name: 'Cq'
		, description: 'Quality'
	}
	, points: '+ 3'
}

storiesOf('Molecules/BoxTagSEO', module)
.add('Single Case', () => (
	<BoxTagSEO
	 { ...Text } border

	 okClick = { firstArgAction('button-OK') }
	 ruimClick = { firstArgAction('button-RUIM') }

	 />
))
.add('Multiples Case', () => (
	<Col>
		<Row>
			<BoxTagSEO
			 { ...Text } borderBlue

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 /><BoxTagSEO
			 { ...Text } borderBlue

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 /><BoxTagSEO
			 { ...Text } borderBlue

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 /><BoxTagSEO
			 { ...Text } borderBlue

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 /><BoxTagSEO
			 { ...Text } borderBlue

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 />
		</Row>
		<Row>
			<BoxTagSEO
			 { ...Text } border

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 /><BoxTagSEO
			 { ...Text } border

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 /><BoxTagSEO
			 { ...Text } border

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 /><BoxTagSEO
			 { ...Text } border

			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 />
		</Row>
		<Row>
			 <BoxTagSEO
			 { ...Text } borderGreen
			 okClick = { firstArgAction('button-OK') }
			 ruimClick = { firstArgAction('button-RUIM') }

			 />
		</Row>
	</Col>
));