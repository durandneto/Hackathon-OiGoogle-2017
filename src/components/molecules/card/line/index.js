import React from 'react'
import styled from 'styled-components'

import Icon from  './../../../atoms/img'
import Line from  './../../../atoms/line'
import Container from  './../../../atoms/container/column'
import Row from  './../../../atoms/container/row'
import Description from  './../../../atoms/description'

const IconTitleDescription = (props) => (
	<Container> 
	<Row alignCenter> 
		<Icon margin={1} icon src={props.src} />
		<Description>
			{ props.description }
		</Description>
	</Row>
		<Line/>
	</Container>
);
			 		
export default IconTitleDescription
