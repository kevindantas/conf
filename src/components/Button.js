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
   * @param {String} originalText Reference for the final value after the animation
   * @returns {String}
   */
  glitchText() {
    let { label, originalLabel } = this.state;
    // Random string to glitch
    let randomString = 'cmVhY3Rjb25mYnIgMjAxNw';
    // To a random char from randomString
    let randomIndex = Math.floor(Math.random() * (randomString.length-1));
    
    if(label !== originalLabel && label.length < originalLabel.length + 1) {
      this.setState((state) => {

        let newLabel = state.label;

        if(newLabel.length > 1) {
          newLabel = newLabel.slice(0, -1)
        }
        newLabel += originalLabel[state.iterator] + randomString[randomIndex];

        return {
          label: newLabel,
          iterator: state.iterator+1,
        }
      });

      // Call the glitchText() until the label equal originalLabel
      setTimeout(this.glitchText.bind(this), 60);
    } else {
      this.setState((state) => ({
        label: state.label.slice(0, -1),
        iterator: 0,
      }))
    }
  }


  /**
   * Handle mouse enter event on the buttonStyle
   * 
   * @param {Object} e - Triggered event 
   */
  _onMouseEnter = (e) => {

    this.setState({
      label: ''
    });
    this.glitchText();
  }


  render() {
    const { href } = this.props;
    const { label } = this.state;

    return (
      <a className={buttonStyle} href={href} onMouseEnter={this._onMouseEnter}>
        { label }
      </a>
    );
  }
}
