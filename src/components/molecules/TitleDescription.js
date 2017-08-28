import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Title = styled.h2`
font-family: SimplonRegular;
color: ${ props => props.theme.primary ? props.theme.primary : 'purple'}
display: block;
`
const Description = styled.h3`
font-family: SimplonRegular;
color: ${ props => props.theme.primary ? props.theme.primary : 'green'}
`

const TitleDescription = ({Title2, Description2}) => (
 <Container>
   <Title>{ Title2 }</Title>
   <Description>{ Description2 }</Description>
 </Container>
);

export default TitleDescription;
