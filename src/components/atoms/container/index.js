import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.div`
	${ props => props.alignCenter && '* {text-align: center}'  }
	${ props => props.alignRight && '* {text-align: right}'  }
`