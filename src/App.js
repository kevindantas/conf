import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from './utils/Globals';

import Body from './components/Body';

import Header from './components/Header';

import BackgroundPattern from './media/images/backgroundPattern.png';

css.global('html, body', {
  padding: 0,
  margin: 0,
  fontFamily: 'Rajdhani, sans-serif',
  background: Globals.colors.background,
});

const styles = {
  container: css({
    background: `#555555 url(${BackgroundPattern})`,
    color: 'white',
    // height: '100vh',
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
};

class App extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
