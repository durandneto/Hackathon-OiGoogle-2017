import React from 'react'
import styled from 'styled-components'

import TitleImage from  './../../molecules/TitleImg'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Line from  './../../atoms/line'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'

import oiImg from './../../../assets/images/bg-sessao-2.png'
import oiImg3 from './../../../assets/images/icon-bl-section.png'
import oiImg2 from './../../../assets/images/feat01.png'

 

const Sessao3 = (props) => (
	<ContainerColumn margin>
		<ContainerColumn>
			<IconTitleDescription 
				size={2} 
				img = {{
					 src: oiImg3
				}}
				alignCenter
				Title2={['Tem muito mais com','a Banda Larga da Oi']}
				Description2={'Ao assinar a nossa internet, você também leva:'} />
		</ContainerColumn>
		<ContainerRow margin>
			<IconTitleDescription  
				size={5} 
				isUpperCase
				alignCenter 
				img = {{
					
					 src: oiImg2
					, margin: 2
				}}
				Title2={'Modem Grátis'} 
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription  
				size={5} 
				isUpperCase
				alignCenter 
				img = {{
					
					 src: oiImg2
					, margin: 2
				}}
				Title2={'Modem Grátis'} 
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription  
				size={5} 
				isUpperCase
				alignCenter 
				img = {{
					
					 src: oiImg2
					, margin: 2
				}}
				Title2={'Modem Grátis'} 
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription  
				size={5} 
				isUpperCase
				alignCenter 
				img = {{
					
					 src: oiImg2
					, margin: 2
				}}
				Title2={'Modem Grátis'} 
				Description2={'Conecte seus aparelhos dentro de casa'} />
			<IconTitleDescription  
				size={5} 
				isUpperCase
				alignCenter 
				img = {{
					
					 src: oiImg2
					, margin: 2
				}}
				Title2={'Modem Grátis'} 
				Description2={'Conecte seus aparelhos dentro de casa'} />
		</ContainerRow>
		<Line margin />
	</ContainerColumn>
);

export default Sessao3
