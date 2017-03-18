import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Item from './Item';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    }
  }),
};

class Footer extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Item title="DATA" subtitle={Globals.date.full}>
          <p>10:00am - 17:00pm</p>
        </Item>

        <Item title="LOCAL" subtitle={Globals.location.locale}>
          <p>10:00am - 17:00pm</p>
        </Item>
      </div>
    );
  }
}

export default Footer;
