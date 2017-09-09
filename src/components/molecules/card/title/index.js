import React from 'react'
import styled from 'styled-components'

import TitleDescription from  './../../../molecules/TitleDescription'

const CardTitle = (props) => (
	<TitleDescription 
	alignCenter
	size={5}
	margin
	Title2={props.title} 
	Description2={props.subTitle} />
);
			 		
export default CardTitle
