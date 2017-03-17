import React, { Component } from 'react';
import { css } from 'glamor';
import Logo from './Logo';
import Globals from './utils/Globals';
import Pattern from './media/images/pattern.png';
import './App.css';

import Box from './Box';
import Buttons from './Buttons';
import Header from './components/Header';

css.global('html, body', { padding: 0 });

const cont = css({
  background: `#161616 url(${Pattern})`,
  color: 'white',
  height: '100vh',
  width: '100%',
  minWidth: '100vw',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const hr =css({
  borderTop: `3px solid ${Globals.colors.primary}`,
  width: 25,
  height: 1,
})

const logo = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

const footer = css({
  alignSelf: 'flex-end',
  display: 'flex',
  '@media(max-width: 720px)': {
    alignSelf: 'auto',
  }
})

const btns = css({
  alignSelf: 'flex-end',
  display: 'flex',
  '@media(max-width: 720px)': {
    alignSelf: 'auto',
  }
})

class App extends Component {
  render() {
    return (
      <div className={cont}>
        <Header />

        <div className={logo}>
          <Logo/>
          <Buttons className={btns}/>
        </div>

        <div className={footer}>
          <Box>
            <h3>DATA</h3>
            <h2>05.10.2017</h2>
            <p>10:00am - 17:00pm</p>
          </Box>
          <Box>
            <h3>LOCAL</h3>
            <h2>São Paulo</h2>
            <p>Expo Center</p>
          </Box>
        </div>
      </div>
    );
  }
}

export default App;
