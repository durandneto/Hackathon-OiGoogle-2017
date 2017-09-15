import React from 'react'
import styled from 'styled-components'

import Col from  './../../../atoms/container/column'
import Row from  './../../../atoms/container/row'
import Description from  './../../../atoms/description'

const Price = (props) => (
	<Row alignCenter> 
		<Col alignCenter>
			<Col alignLeft>
				{ props.preffix && <Description 
										className={props.classpreffix}
										color={props.colorText}
										isUpperCase
										size={-2}>{props.preffix}</Description>}
				{ props.monetary && <Description
										className={props.classmonetary}
										color={props.colorValue}
										fontWeight={props.weightValue}
										size={2}>{props.monetary}</Description>}
			</Col>
		</Col>
		<Col alignCenter >
			<Description
			className={props.classvalue} 
			color={props.colorValue}
			fontWeight={props.weightValue}
			size={7}>{props.value}</Description>
		</Col>
		<Col>
			<Row><Description
					className={props.classcents}
					color={props.colorValue}
					fontWeight={props.weightValue}>, {props.cents}</Description></Row> 
			<Row><Description
					className={props.classsuffix}
					color={props.colorValue}>/{props.suffix}</Description></Row>
		</Col>
	</Row>
);
			 		
export default Price
