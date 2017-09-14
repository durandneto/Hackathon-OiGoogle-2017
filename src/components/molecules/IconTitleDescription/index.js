import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Img from  './../../atoms/img'
import Row from  './../../atoms/container/row'
import Column from  './../../atoms/container/column'
import Description from  './../../atoms/description'
import Container from  './../../atoms/container/column'
import TitleDescription from './../../molecules/TitleDescription'
import Icon from './../../atoms/icons'

const IconTitleDescription = (props) => (
 <Container {...props} >
 	<Column {...props}>
	 	<Row>
		 	{
		 		Array.isArray(props.img.src) ?
			 		props.img.src.map( ( icon, index ) => {
			 			return <Img key={ index }  normal={props.img.normal} thumb={props.img.thumb}  icon={props.img.icon}   margin={props.img.margin} src={icon} />
			 		})
			 	: props.img.src ?
				 	<Img thumb={props.img.thumb}  icon={props.img.icon}  normal={props.img.normal}  margin={props.img.margin}  src={props.img.src} />
				: <Icon type={props.img.type} color={props.img.color} margin={props.img.color} width={props.img.width} height={props.img.height}/>
		 	}
		</Row>
	</Column>
	<Column>
		<TitleDescription {...props}  />
  	</Column>
 </Container>
);

export default IconTitleDescription
