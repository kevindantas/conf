import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    textAlign: 'left',
    textTransform: 'uppercase',
    background: '#FFFFFF',
    display: 'inline-block',
    columnBreakInside: 'avoid',
    border: '2px solid #fcfcfc',
    boxShadow: '0 1px 2px rgba(34, 25, 25, 0.4)',
    borderTop: `3px solid ${Globals.colors.primary}`,
    margin: '0 10px 15px',
    padding: '5px 10px',
    '> h3': {
      color: Globals.colors.primary,
      margin: 0,
      // lineHeight: '1'
      // letterSpacing: 2,
    },
    '> h2': {
      margin: 0,
      // lineHeight: '1'
      // letterSpacing: 6,
    },
    '> h4': {
      color: Globals.colors.gray,
      margin: 0,
      // lineHeight: '1'
      // letterSpacing: 6,
    },
    '> p': {
      color: Globals.colors.darken,
      // lineHeight: '1',
      margin: 0,
      // letterSpacing: 2,
    },
  }),
};

class Card extends PureComponent {
  render() {
    const { title, subtitle, children } = this.props;

    return (
      <div {...styles.container}>
        <h3>{title}</h3>
        <h2>{subtitle}</h2>

        {children}
      </div>
    );
  }
}

export default Card;
