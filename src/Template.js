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
        </head>
        <body>
            <div id='outlet'>
                  {this.props.children}
            </div>
            <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}
