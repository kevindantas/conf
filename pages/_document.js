import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document {

  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    const styles = flush();
    return { html, head, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon.ico/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon.ico/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon.ico/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon.ico/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon.ico/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon.ico/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon.ico/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon.ico/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon.ico/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon.ico/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon.ico/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon.ico/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico/favicon-16x16.png"/>
          <link rel="manifest" href="/static/favicon.ico/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/static/favicon.ico/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <link href="https://fonts.googleapis.com/css?family=Rajdhani:400,700" rel="stylesheet"/>
          <title>React Conf 2017 - Brazil</title>
          <style>{`
            body {
              margin: 0px;
              padding: 0px;
              font-family: Rajdhani, sans-serif;
              background-color: #161616;
            }
          `}</style>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}