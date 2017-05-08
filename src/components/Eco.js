import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#f0f0f0',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    }
  }),
};

class Eco extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="REACT" subtitle={Globals.eco.title}>
          <p>{Globals.eco.item1}</p>
          <p>{Globals.eco.item2}</p>
          <p>{Globals.eco.item3}</p>
          <p>{Globals.eco.item4}</p>
          <p>{Globals.eco.item5}</p>
        </Text>
      </div>
    );
  }
}

export default Eco;
