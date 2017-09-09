import React, { Component } from 'react'
import styled from 'styled-components'
import Container from './../column'

export default Container.extend`
	${ props => props.reverse && 'flex-direction: row-reverse;'}
	flex-direction: row;`