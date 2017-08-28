import React from 'react'
import Footer from './components/organisms/Footer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import globalStyle from './components/styles/global-styles.js'
import styled, {ThemeProvider} from 'styled-components'
import colors from './components/styles/colors.js'

const theme = {
	main: '#fff'
};

class App extends React.Component {
  render() {
    return(
      <ThemeProvider theme={colors}>
        <div>
            {this.props.children}
            <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    User : state.UserAdmin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)