import React from 'react'
import RouterLink from '../atoms/routerlink'
import RouterContainer from '../atoms/routercontainer'
import styled from 'styled-components'

export default class RouterFrame extends React.Component {
  render() {
    return (
      <RouterContainer>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tech">Tech</RouterLink>
        <RouterLink to="/contact">Contato</RouterLink>
      </RouterContainer>
    )
  }
}
