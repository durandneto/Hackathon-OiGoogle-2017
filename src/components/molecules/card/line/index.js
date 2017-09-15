import React from 'react'
import styled from 'styled-components'

import Icon from  './../../../atoms/icons'
import Img from  './../../../atoms/img'
import Line from  './../../../atoms/line'
import Container from  './../../../atoms/container/column'
import Row from  './../../../atoms/container/row'
import Description from  './../../../atoms/description'

const IconTitleDescription = (props) => (
	<Container>
	<Row alignCenter>
	{
		props.src && <Img margin={1} icon src={props.src} />
	}

	{
		props.icon && <Icon type={props.icon} height={'1.5em'} color={'#c72177'} />
	}
		<Description>
			{ props.description }
		</Description>
	</Row>
		<Line/>
	</Container>
);

export default IconTitleDescription
