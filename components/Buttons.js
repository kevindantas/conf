import React, { PureComponent } from 'react';

import Button from './Button';

export default class extends PureComponent {
  render() {
    return (
      <div className='cont'>
        <Button label="Early Birds" pattern='/static/media/images/btn1Pattern'/>
        <Button label="Newsletter" pattern='/static/media/images/btn1Pattern'/>
        <style jsx>{`
            .cont {
              text-align: center;
              margin: 30px;
              > h2: {
                margin: 0;
                letterSpacing: 6;
              }
              @media(max-width: 720px): {
                margin: 5px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
