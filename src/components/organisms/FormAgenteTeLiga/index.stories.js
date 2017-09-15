import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import * as FormAgenteTeLiga from '.'

storiesOf('Organisms/FormAgenteTeLiga', module)
.add('Row Case', () => (
<div>
	 <FormAgenteTeLiga.Row 
	 padding
	 spaced
		Text={ ['Tem interesse?', 'Fale com um especialista'] }  
		TextTitle={ 'Nome' }  
		TextDescription={ 'Telefone' }
		/>  
	 <ThemeProvider theme={ ThemePink }>
		 <FormAgenteTeLiga.Row 
		 padding
		 spaced
		Text={ ['Tem interesse?', 'Fale com um especialista'] }  
		TextTitle={ 'Nome' }  
		TextDescription={ 'Telefone' }
		/>
	 </ThemeProvider>
 </div>

	))
.add('Column Case', () => (

<div>
	 <FormAgenteTeLiga.Column 
	 padding
		Text={ ['Tem interesse?', 'Fale com um especialista'] }  
		TextTitle={ 'Nome' }  
		TextDescription={ 'Telefone' }
		/>  

	 <ThemeProvider theme={ ThemePink }>
		 <FormAgenteTeLiga.Column 
		 padding
		Text={ ['Tem interesse?', 'Fale com um especialista'] }  
		TextTitle={ 'Nome' }  
		TextDescription={ 'Telefone' }
		/>
	 </ThemeProvider>

 </div>
	));