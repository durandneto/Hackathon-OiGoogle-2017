import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './../../actions'
import globalStyle from './../../components/styles/global-styles'

import HomePage  from './../../components/pages/Home'

const FooterLink = {
	sumary : [
		{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		}
	]
	, regulatory : [
		{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		},{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		},{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		},{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		}
	]
}
class Home extends React.Component {

	render() {
		return (
		 	<HomePage FooterLink = { FooterLink }/> 
		)
	}
}


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export { Home }
export default connect(mapStateToProps, mapDispatchToProps)(Home)
