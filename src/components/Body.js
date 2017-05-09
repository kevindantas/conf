import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import TextPitch from './TextPitch';
import TextSponsor from './TextSponsor';
import CardTopics from './CardTopics';
import TextContact from './TextContact';
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
        <CardTopics />
        <TextSponsor />
        <TextContact />
      </div>
    );
  }
}

export default App;
