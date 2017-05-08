import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import Pitch from './Pitch';
import Eco from './Eco';
import Footer from './Footer';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  }),
};

class App extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Logo />
        <Footer />
        <Pitch />
        <Eco />
      </div>
    );
  }
}

export default App;
