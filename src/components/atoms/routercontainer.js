import React, { Component } from 'react'
import styled from 'styled-components'

class RouterContainer extends React.Component {
    
  render() {
    const RouterBox = styled.div`
        min-width: 200px;
        display: flex;
        justify-content: space-around;
      }
      `
    return ( 
      <RouterBox>
          {this.props.children} 
      </RouterBox>
    )
  }
}


export default RouterContainer