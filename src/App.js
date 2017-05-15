import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from './utils/Globals';

import Body from './components/Body';

import Header from './components/Header';

import BackgroundPattern from './media/images/backgroundPattern.png';

css.global('*', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
});

css.global('html, body', {
  padding: 0,
  margin: 0,
  fontFamily: 'Rajdhani, sans-serif',
});

const styles = {
  container: css({
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
