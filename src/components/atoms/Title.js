import React, { Component } from 'react'
import styled from 'styled-components'

const h2 = styled.h2`
font-family: SimplonRegular;
color: ${ props => props.theme.primary ? props.theme.primary : 'purple'}
display: block;
`

const Title = ({text, size, isUpperCase, isLowerCase}) => {
    if (isUpperCase) {
        text = text.toUpperCase();
    }
    
    if (isLowerCase) {
        text = text.toLowerCase();
    }

    switch(size) {
        case "x2":
            var styles = {fontSize: 28};
            break;
        case "x3":
            var styles = {fontSize: 38};
            break;
        case "x1":
        default:
            var styles = {fontSize: 18};

    }

    return (<h2 style={styles}>{text}</h2>);
}

export default Title