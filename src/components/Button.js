import React, { PureComponent } from 'react';
import { css, style } from 'glamor';

import Globals from '../utils/Globals';

const cont = css({
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: 3,
  padding: '8px 40px',
  color: Globals.colors.darken,
  fontWeight: 'bold',
  cursor: 'pointer',
  border: `1px solid ${Globals.colors.primary}`,
  '> h2': { margin: 0, letterSpacing: 2 },
  backgroundColor: Globals.colors.primary,
  transition: Globals.transitions.primary,

  ':hover' : {
    backgroundColor: 'transparent',
    color: Globals.colors.primary,
  },

  '@media(max-width: 720px)': {
    margin: '5px',
  },
})

const background = css({
  padding: 10,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  margin: '30px',
})

export default class Button extends PureComponent {
  render() {
    const { label, pattern } = this.props;

    return (
      <div className={background} {...style({ ':hover' : { backgroundImage: `url('${pattern}')`}  })}>
        <div className={cont}>
          <h2>{label}</h2>
        </div>
      </div>
    );
  }
}
