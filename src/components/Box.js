import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

const cont = css({
  borderTop: `3px solid ${Globals.colors.primary}`,
  textAlign: 'left',
  margin: '30px',
  textTransform: 'uppercase',
  '> h3, p': { color: Globals.colors.primary, margin: 0, letterSpacing: 2 },
  '> p': { color: Globals.colors.primary, letterSpacing: 2 },
  '> h2': { margin: 0, letterSpacing: 6 },
  '@media(max-width: 720px)': {
    margin: '5px',
  }
})

export default class Box extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className={cont}>
        {children}
      </div>
    );
  }
}
