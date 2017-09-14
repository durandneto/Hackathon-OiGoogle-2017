import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column'
import ContainerRow from  './../../atoms/container/row'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Img from  './../../atoms/img'
import Line from  './../../atoms/line'

import oiImg from './../../../assets/images/bg-fixo.png'
import oiImg3 from './../../../assets/images/icon-fixo-section.png'

 

const Sessao2 = (props) => (
	<ContainerColumn margin>
		<ContainerRow  {...props} spacedAround media>
			<ContainerColumn margin>
				<Img src = { oiImg } /> 
			 </ContainerColumn>
			 <ContainerColumn  margin padding>
			    <IconTitleDescription 
				size={2} 
				img = {{
					 src: oiImg3
				}}
				alignLeft
				Title2={[
						'Fale o quanto quiser'
						, 'em ligações pra fixos'
						, 'e celulares Oi de'
						, 'todo o Brasil'
						]}
				Description2={'Além do fixo ilimitado pra Oi, você tem ainda uma franquia de minutos pra outras operadoras. E se já tiver fixo de outra operadora, é só falar com nossos atendentes pra trazer seu número pra Oi.'} />
			 </ContainerColumn>
		</ContainerRow>
		<Line margin/>
	</ContainerColumn>
);

export default Sessao2
