import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	${ props => props.alignCenter && '* {align-items: center; text-align: center;}'}
	${ props => props.alignRight && '* {align-items: flex-end;text-align: right;}'}`

 

// export default styled.div`
	// ${ props => props.alignCenter && '* {text-align: center;}'}
	// ${ props => props.alignCenter && 'img {position:relative;left: 49%;}'} 
	// ${ props => props.alignRight && '* {text-align: right;}'}
	// ${ props => props.alignRight && 'img {position:relative;left: 98%;}'}`

 