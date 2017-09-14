import React from 'react'
import styled from 'styled-components'

import TitleImage from  './../../molecules/TitleImg'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Line from  './../../atoms/line'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'


const Sessao3 = (props) => (
	<ContainerColumn { ...props }>
		<ContainerColumn>
			<IconTitleDescription
				size={2}
				img = {{
					 type: 'product-bandalarga'
				}}
				alignCenter
				Title2={['Tem muito mais com','a Banda Larga da Oi']}
				Description2={'Ao assinar a nossa internet, você também leva:'} />
		</ContainerColumn>
		<ContainerRow margin media>
			<IconTitleDescription
				size={5}
				margin2
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-modem'
				}}
				Title2={'Modem Grátis'}
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription
				size={5}
				margin2
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-cloud'
				}}
				Title2={'Modem Grátis'}
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription
				size={5}
				margin2
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-wifi'
				}}
				Title2={'Modem Grátis'}
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription
				size={5}
				margin2
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-antivirus'
				}}
				Title2={'Modem Grátis'}
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription
				size={5}
				margin2
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-certificate'
				}}
				Title2={'Modem Grátis'}
				Description2={'Conecte seus aparelhos dentro de casa'} />
		</ContainerRow>
		<Line margin />
	</ContainerColumn>
);

export default Sessao3
