import React from 'react'
import styled from 'styled-components'


import * as Title from  './../../atoms/title'
import Description from  './../../atoms/description'
import { Button } from  './../../atoms/button'
import Col from  './../../atoms/container/column'
import Row from  './../../atoms/container/row'


const BoxTagSEO = (props) => (
 <Row>
 	<Col round1 borderBlue = { props.borderBlue }  border = { props.border } padding margin05 >
 		<Row alignEnd>
  			<Description size = { -1 } >{ props.points }</Description>
 		</Row>
 		<Row alignCenter margin>
  			<Description size = { 6 } >{ props.text.name}</Description>
 		</Row>
 		<Row >
  			<Description >{ props.text.description}</Description>
 		</Row>
 		<Row spaced margin>
			<Button onClick = { props.okClick }>{ props.text.good }</Button>
			<Button primary onClick = { props.ruimClick }>{ props.text.bad }</Button>
 		</Row>
 	</Col>
 </Row>
);

export default BoxTagSEO;
