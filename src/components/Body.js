import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import TextPitch from './TextPitch';
import TextEco from './TextEco';
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
        <TextPitch />
        <TextEco />
      </div>
    );
  }
}

export default App;
