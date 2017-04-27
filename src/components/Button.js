import React, { PureComponent } from 'react';
import { css, style } from 'glamor';

import Globals from '../utils/Globals';

const buttonStyle = css({
  borderRadius: 3,
  minHeight: 36,
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

  state = { 
    label: '',
    iterator: 0,
  };

  static defaultProps = {
    glitchInterval: 65,
  }

  componentDidMount() {
    const { label } = this.props;
    this.setState({
      label,
      originalLabel: label
    });
  }


  /**
   * Glitch the text with random characters
   * 
   * @param {Object} e Event triggered
   */
  glitchText(e) {
    // Random string to glitch
    let randomString = 'cmVhY3Rjb25mYnIgMjAxNw';
    // To a random char from randomString
    let randomIndex = Math.floor(Math.random() * (randomString.length-1));
    
    const { glitchInterval } = this.props;

    this.setState((state) => {
      const { label, originalLabel, iterator } = state;

      // If the function was triggered by a event
      if(e) {
        setTimeout(this.glitchText.bind(this), glitchInterval);
        // Clean the label before start to glitch
        return { label: '' };
      }

      if(label !== originalLabel && label.length < originalLabel.length + 1) {
          let newLabel = label;

          // Remove the last glitched char
          if(newLabel.length > 1) {
            newLabel = newLabel.slice(0, -1)
          }

          // Concat newLabel with a new glitch char
          newLabel += originalLabel[iterator] + randomString[randomIndex];
          
          // Call the glitchText() until the label equal originalLabel
          setTimeout(this.glitchText.bind(this), glitchInterval);
          return {
            label: newLabel,
            iterator: iterator + 1,
          }
      }

      return {
        label: originalLabel,
        iterator: 0,
      };
    });
  }


  render() {
    const { href } = this.props;
    const { label } = this.state;

    return (
      <a className={buttonStyle} href={href} onMouseEnter={(e) => this.glitchText(e)}>
        { label }
      </a>
    );
  }
}
