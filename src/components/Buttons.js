import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Button from './Button';
import Pattern1 from '../media/images/btn1Pattern.png';
import Pattern2 from '../media/images/btn1Pattern.png';

const cont = css({
  textAlign: 'center',
  margin: '30px',
  '> h2': { margin: 0, letterSpacing: 6 },
  '@media(max-width: 720px)': {
    margin: '5px',
  }
})

export default class Buttons extends PureComponent {
  render() {
    return (
      <div className={cont}>
        <Button label="Early Birds" pattern={Pattern1}/>
        <Button label="Newsletter" pattern={Pattern2}/>
      </div>
    );
  }
}
