import React, { PureComponent } from 'react';

import Globals from '../Globals';

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
            > h3, p {
              color: ${Globals.colors.primary};
              margin: 0;
              letter-spacing: 2;
            }
            > p {
              color: ${Globals.colors.primary};
              letter-spacing: 2;
            }
            > h2 {
              margin: 0;
              letter-spacing: 6;
            }
            @media(max-width: 720px) {
              margin: 5px;
            }
          }
        `}</style>
      </div>
    );
  }
}
