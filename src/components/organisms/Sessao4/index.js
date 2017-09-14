import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column'
import ContainerRow from  './../../atoms/container/row'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Img from  './../../atoms/img'
import Line from  './../../atoms/line'

import oiImg from './../../../assets/images/bg-fixo.png'



const Sessao4 = (props) => (
	<ContainerColumn {...props} >
		<ContainerRow container>
			<ContainerColumn alignCenter size2>
				<Img src={oiImg}/>
			 </ContainerColumn>
			 <ContainerColumn size2 padding>
			    <IconTitleDescription
				size={2}
				img = {{
					 type: 'product-fixo'
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
		<Line noMargin/>
	</ContainerColumn>
);

export default Sessao4
