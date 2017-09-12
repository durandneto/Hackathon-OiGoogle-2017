import React from 'react'
import styled from 'styled-components'

import TitleImage from  './../../molecules/TitleImg'
import TitleDescription from  './../../molecules/TitleDescription'
import Line from  './../../atoms/line'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'

import oiImg from './../../../assets/images/bg-sessao-2.png'

 
const Sessao2 = (props) => (
	<ContainerColumn {...props} >
		<ContainerRow media >
			<ContainerColumn size2 margin >
				<TitleImage size={4} margin img = { oiImg } text = { ['Tudo pra você ficar','conectado, se divertir','e se informar'] }/> 
			 </ContainerColumn>
			 <ContainerColumn size2 margin padding>
			    <TitleDescription  margin size={3} line Title2={'Combos da Oi perfeitos pra você'} Description2={'Acesse e assista a tudo o que você e sua família mais gostam. Veja filmes, jogue, ouça músicas, converse com amigos e muito mais.'} />
			    <TitleDescription  margin size={3} line  Title2={'Comodidade até na hora de pagar'} Description2={'Com os Combos da Oi, você tem todos os produtos em uma conta só. E com a função de débito automático, além de ajudar o planeta, você deixa e se preocupar com os prazos de vencimento.'} />
			 </ContainerColumn>
		</ContainerRow>
		<Line margin />
	</ContainerColumn>
);

export default Sessao2
