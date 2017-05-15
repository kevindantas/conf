import React, { PureComponent } from 'react';
import { css } from 'glamor';
import AnimatedBanner from './AnimatedBanner';

import Logo from './Logo';
import Pitch from './Pitch';
import Sponsor from './Sponsor';
import Topics from './Topics';
import Contact from './Contact';
import Meetup from './Meetup';
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
        {/*<ActionButton />*/}
        <AnimatedBanner />
        <Infos />
        <Pitch />
        <Topics />
        <Sponsor />
        <Meetup />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
