import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import TextPitch from './TextPitch';
import TextSponsor from './TextSponsor';
import Topics from './Topics';
import TextContact from './TextContact';
import TextMeetup from './TextMeetup';
import Footer from './Footer';
import Infos from './Infos';

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
        <Infos />
        <TextPitch />
        <Topics />
        <TextSponsor />
        <TextMeetup />
        <TextContact />
        <Footer />
      </div>
    );
  }
}

export default App;
