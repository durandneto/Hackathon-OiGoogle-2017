import React from 'react'
import styled from 'styled-components'
import oiImg from '../../assets/images/oi-logo-purple-degrade-1.svg'

const LogoCont = styled.div`
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-flex-direction: row;
-ms-flex-direction: row;
flex-direction: row;
-webkit-flex-wrap: nowrap;
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-content: stretch;
-ms-flex-line-pack: stretch;
align-content: stretch;
-webkit-align-items: flex-start;
-ms-flex-align: start;
align-items: flex-start;
`

const Title = styled.h1`
font-family: SimplonRegular;
`

export default class Contact extends React.Component {
  render() {
    return (
      <LogoCont>
        <Title>Contato</Title>
        <img src={oiImg}/>
      </LogoCont>
    )
  }
}
