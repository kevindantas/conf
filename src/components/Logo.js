import React, { Component } from 'react';
import { MorphReplace } from 'react-svg-morph';

import logoPaths from '../utils/logoPaths';

class Logo extends Component {
  state = {
    logoNumber: 0,
  };

  componentDidMount() {
    this.animateIcon();
  };

  animateIcon = () => {
    setInterval(() => {
      this.setState(({ logoNumber }) => ({
        logoNumber: logoNumber === (logoPaths.length - 1) ? 0 : logoNumber + 1,
      }));
    }, 3000);
  };

  renderLogo = () => logoPaths[this.state.logoNumber];

  render() {
    return (
      <MorphReplace duration={500} width={320} height={320}>
        {this.renderLogo()}
      </MorphReplace>
    );
  }
}

export default Logo;
