import React from 'react'
import {Link} from 'react-router'
import styled, {ThemeProvider} from 'styled-components'
import RouterFrame from '../molecules/routerframe'

const StyleFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 50px;
`

const Footercontent = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #8f25e5;
  height: 50px;
`

const Copyright = styled.div`
color: white;
display: flex;
align-items: center;
`


export default class Footer extends React.Component {
  render() {
    return (
      <StyleFooter>
        <Footercontent>
           <RouterFrame/>
        </Footercontent>
      </StyleFooter>
    )
  }
}
