import React, { Component } from 'react'
import {Link} from 'react-router'
import styled from 'styled-components'

const RouterLink = styled(Link)`
      display: flex;
      align-items: center;
      color: ${props => props.theme.main || 'red'};
      &:hover {
        color: #faa916;
        text-decoration: none
      }
`
export default RouterLink