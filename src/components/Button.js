import React, { PureComponent } from 'react';
import { css, style } from 'glamor';

import Globals from '../utils/Globals';

const buttonStyle = css({
  borderRadius: 3,
  padding: '14px 80px',
  margin: 16,
  color: Globals.colors.darken,
  fontSize: 28,
  fontWeight: 600,
  fontFamily: 'Rajdhani, sans-serif',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: 1,
  cursor: 'pointer',
  border: `1px solid ${Globals.colors.primary}`,
  backgroundColor: Globals.colors.primary,
  transition: Globals.transitions.primary,
});

export default class Button extends PureComponent {

  state = { active: false }

  toggleActive = () => {

    this.setState(prevState => ({
      active: !prevState.active
    }));

  }

  render() {
    const { label, href } = this.props;
    const { active } = this.state;

    return (
      <a className={buttonStyle} href={href}>
        { label }
      </a>
    );
  }
}
