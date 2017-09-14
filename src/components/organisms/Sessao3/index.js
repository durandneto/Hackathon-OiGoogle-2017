import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column'
import ContainerRow from  './../../atoms/container/row'
import TitleImage from  './../../molecules/TitleImg'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Line from  './../../atoms/line'

const Sessao3 = (props) => (
	<ContainerColumn {...props} >
		<ContainerRow container>
			<ContainerColumn sizeFull margin>
				<IconTitleDescription
					size={2}
					img = {{
						type: 'product-bandalarga'
					}}
					alignCenter
					Title2={['Tem muito mais com','a Banda Larga da Oi']}
					Description2={'Ao assinar a nossa internet, você também leva:'} />
			</ContainerColumn>
		</ContainerRow>
		<ContainerRow marginBottom container spaced>
			<IconTitleDescription
				size={6}
				margin05
				size4
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-modem'
					, height: '70px'
					, margin: '2em'
				}}
				Title2={'Modem Grátis'}
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription
				size={6}
				margin05
				size4
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-cloud'
					, height: '70px'
					, margin: '2em'
				}}
				Title2={'Oi Cloud'}
				Description2={'Até 50 giga de espaço na nuvem.'} />
			<IconTitleDescription
				size={6}
				margin05
				size4
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-wifi'
					, height: '70px'
					, margin: '2em'
				}}
				Title2={'Oi WiFi: fora de casa'}
				Description2={'Mais de 2 milhões de pontos pelo Brasil.'} />
			<IconTitleDescription
				size={6}
				margin05
				size4
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-antivirus'
					, height: '70px'
					, margin: '2em'
				}}
				Title2={'Antivírus'}
				Description2={'Proteção pro seu computador e tablet'} />
			<IconTitleDescription
				size={6}
				margin05
				size4
				isUpperCase
				alignCenter
				img = {{
					type: 'feat-certificate'
					, height: '70px'
					, margin: '2em'
				}}
				Title2={'Oi Educa'}
				Description2={'Reforço do ensino infantil ao vestibular'} />
		</ContainerRow>
		<Line noMargin />
	</ContainerColumn>
);

export default Sessao3
