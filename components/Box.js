import React, { PureComponent } from 'react';

import Globals from '../utils/Globals';

export default class extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className='cont'>
        { children }

        <style jsx>{`
          .cont {
            border-top: 3px solid ${Globals.colors.primary};
            text-align: left;
            margin: 30px;
            text-transform: uppercase;
            @media(max-width: 720px) {
              margin: 5px;
            }
          }
        `}</style>
      </div>
    );
  }
}
