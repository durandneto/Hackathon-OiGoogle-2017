import React from 'react'
import styled from 'styled-components'

import * as Title from  './../../atoms/title'
import Description from  './../../atoms/description'
import Col from  './../../atoms/container/column'
import Row from  './../../atoms/container/row'


const BoxTagSEO = (props) => (
 <Row>
 	<Col round1 borderBlue padding >
 		<Row alignEnd>
 			<Col alignEnd>
  				<Description size = { -2 } >-3</Description>
  				<Description >Hq</Description>
 			</Col>
 		</Row>
 	</Col>
 </Row>
);

export default BoxTagSEO;
