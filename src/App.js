import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'

import globalStyle from './components/styles/global-styles'
import styled, {ThemeProvider} from 'styled-components'
import colors from './components/styles/colors'
 

class App extends React.Component {
  render() {
    return(
      <ThemeProvider theme={colors}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)