import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './../../actions'
import globalStyle from './../../components/styles/global-styles'

import HomePage  from './../../components/pages/Home'

const FooterLink = {
	sumary : [{
			text: 'Oi Total Solução Completa'
			, href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/sumario_completo.pdf'
		},{
			text: 'Oi Total Residencial'
			, href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/sumario_residencial.pdf'
		},{
			text: 'Oi Total Conectado'
			, href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/sumario_conectado.pdf'
		},{
			text: 'Oi Total TV + Fixo'
			, href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/sumario_oi-total_fixo.pdf'
		},{
			text: 'Oi Total Banda Larga'
			, href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/sumario_oi-total_bandalarga.pdf'
		}
	]
	, regulatory : [
		{
			text: 'Oi Total Solução Completa',
			href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/regulamento_completo.pdf'
		},
		{
			text: 'Oi Total Residencial',
			href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/regulamento_residencial.pdf'
		},
		{
			text: 'Oi Total Conectado',
			href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/regulamento_conectado.pdf'
		},
		{
			text: 'Oi Total TV + Fixo',
			href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/regulamento_oi-total_fixo.pdf'
		},
		{
			text: 'Oi Total Banda Larga',
			href: 'http://www.oi.com.br/ArquivosEstaticos/oi/oi-pra-voce/planos-servicos/combos/oi-total/planos/conheca-os-planos/pdf/regulamento_oi-total_bandalarga.pdf'
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
