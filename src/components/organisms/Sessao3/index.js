import React from 'react'
import styled from 'styled-components'

import TitleImage from  './../../molecules/TitleImg'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Line from  './../../atoms/line'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'

const Wrapper = styled.div`
	margin: 0 auto;
	${props => props.maxWidth && 'max-width: 1280px'}
`;

const Sessao3 = (props) => (
	<Wrapper maxWidth>
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
					size={6}
					margin
					size4
					isUpperCase
					alignCenter
					img = {{
						type: 'feat-modem'
						, height: '75px'
					}}
					Title2={'Modem Grátis'}
					Description2={'Conecte seus aparelhos dentro de casa'} />
				<IconTitleDescription
					size={6}
					margin
					size4
					isUpperCase
					alignCenter
					img = {{
						type: 'feat-cloud'
						, height: '75px'
					}}
					Title2={'Oi Cloud'}
					Description2={'Até 50 giga de espaço na nuvem.'} />
				<IconTitleDescription
					size={6}
					margin
					size4
					isUpperCase
					alignCenter
					img = {{
						type: 'feat-wifi'
						, height: '75px'
					}}
					Title2={'Oi WiFi: fora de casa'}
					Description2={'Mais de 2 milhões de pontos pelo Brasil.'} />
				<IconTitleDescription
					size={6}
					margin
					size4
					isUpperCase
					alignCenter
					img = {{
						type: 'feat-antivirus'
						, height: '75px'
					}}
					Title2={'Antivírus'}
					Description2={'Proteção pro seu computador e tablet'} />
				<IconTitleDescription
					size={6}
					margin
					size4
					isUpperCase
					alignCenter
					img = {{
						type: 'feat-certificate'
						, height: '75px'
					}}
					Title2={'Oi Educa'}
					Description2={'Reforço do ensino infantil ao vestibular'} />
			</ContainerRow>
			<Line margin />
		</ContainerColumn>
	</Wrapper>
);

export default Sessao3
