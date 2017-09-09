import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import * as TitleInput from '.'

storiesOf('Organisms/FormAgenteTeLiga', module)
.add('Row Case', () => (
<div>
	 <TitleInput.Row 
	 padding
	 spaced
		Text={ ['Tem interesse?', 'Fale com um especialista'] }  
		TextTitle={ 'Nome' }  
		TextDescription={ 'Telefone' }
		/>  
	 <ThemeProvider theme={ ThemePink }>
		 <TitleInput.Row 
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
	 <TitleInput.Column 
	 padding
		Text={ ['Tem interesse?', 'Fale com um especialista'] }  
		TextTitle={ 'Nome' }  
		TextDescription={ 'Telefone' }
		/>  
	 <ThemeProvider theme={ ThemePink }>
		 <TitleInput.Column 
		 padding
		Text={ ['Tem interesse?', 'Fale com um especialista'] }  
		TextTitle={ 'Nome' }  
		TextDescription={ 'Telefone' }
		/>
	 </ThemeProvider>
 </div>
	));