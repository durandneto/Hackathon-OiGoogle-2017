import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column'
import ContainerRow from  './../../atoms/container/row'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Img from  './../../atoms/img'
import Line from  './../../atoms/line'

import oiImg from './../../../assets/images/bg-fixo.png'

let width = 500

if (typeof window !== 'undefined') {
	width = window.innerWidth;
  // we are in browser
  // your original but failing client code goes here (not the one above, but the one that actually fails)
} else if (typeof document !== 'undefined') {
	width = document.documentElement.clientWidth || document.body.clientWidth;
} else {
  // we are in static site generator / server
  // do not check for locale on the window object,
  // just require default locale
}


let contentSession;
if(width <= 500){
  contentSession = (<div></div>)
} else {
  contentSession = (<ContainerColumn alignCenter size2><Img src={oiImg}/></ContainerColumn>)
}

const Sessao4 = (props) => (
	<ContainerColumn {...props} >
		<ContainerRow container>
			 {
				 contentSession
			 }
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
