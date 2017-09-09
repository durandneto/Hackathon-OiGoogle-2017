import React from 'react'
import styled from 'styled-components'

import Col from  './../../../atoms/container/column'
import Row from  './../../../atoms/container/row'
import Description from  './../../../atoms/description'

const Price = (props) => (
	<Row alignCenter> 
		<Col alignCenter>
			<Col alignLeft>
				{ props.preffix && <Description isUpperCase  size={-2}>{props.preffix}</Description>}
				{ props.monetary && <Description size={2}>{props.monetary}</Description>}
			</Col>
		</Col>
		<Col alignCenter ><Description size={7}>{props.value}</Description></Col>
		<Col  >
			<Row><Description>, {props.cents}</Description></Row> 
			<Row><Description>/{props.suffix}</Description></Row>
		</Col>
	</Row>
);
			 		
export default Price
