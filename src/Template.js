import React from 'react'
import icon from './assets/images/favicon.ico'

export default class Template extends React.Component {
  render() {
    return(
      <html lang="pt-br">
        <head>
          <link rel="icon" href="/favicon.ico"/>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </head>
        <body>
            <div id='outlet'>
                  {this.props.children}
            </div>
            <script async src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}
