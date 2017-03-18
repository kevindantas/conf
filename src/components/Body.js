import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import ActionButton from './ActionButton';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }),
};

class App extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Logo />

        <ActionButton />
      </div>
    );
  }
}

export default App;
