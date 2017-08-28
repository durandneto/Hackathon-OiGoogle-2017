import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import oiImg from '../../assets/images/oi-logo-purple-degrade-1.svg'
import TitleDescription from '../../components/molecules/TitleDescription'

import * as Actions from './../../actions'

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
color: ${ props => props.theme.primary ? props.theme.primary : 'purple'}
`

class Tech extends React.Component {
  _onClick(){
    console.log('click')
  }
  render() {
    return (
      <div>
        <ThemeProvider theme={{
          primary: 'pink'
        }}>
          <LogoCont>
          <TitleDescription Title2={'Tech with ThemeProvider Pink'} Description2={'Description of the Page Tech wifh theme'} />
            <img src={oiImg}/>
          </LogoCont>
        </ThemeProvider>

      <LogoCont>
        <TitleDescription Title2={'Tech with ThemeProvider Pink'} Description2={'Description of the Page Tech wifh theme'} />
        <img src={oiImg}/>
      </LogoCont>

        <ThemeProvider theme={{
          primary: 'red'
        }}>
          <LogoCont>
            <TitleDescription Title2={'Tech with ThemeProvider Pink'} Description2={'Description of the Page Tech wifh theme'} />
            <img src={oiImg}/>
          </LogoCont>
        </ThemeProvider>
    </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    User : state.User
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tech)
