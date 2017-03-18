import React, { PureComponent } from 'react';

import Globals from '../Globals';

export default class extends PureComponent {
  render() {
    const { label, pattern } = this.props;

    return (
      <div className='background'>
        <div className='cont'>
          <h2>{label}</h2>
        </div>

        <style jsx>{`
          .cont {
            text-align: center;
            text-transform: uppercase;
            border-radius: 3;
            padding: 8px 40px;
            color: ${Globals.colors.darken};
            font-weight: bold;
            cursor: pointer;
            border: 1px solid ${Globals.colors.primary};

            > h2 {
              margin: 0;
              letterSpacing: 2
            }

            background-color: ${Globals.colors.primary};
            transition: ${Globals.transitions.primary};

            :hover {
              background-color: 'transparent';
              color: ${Globals.colors.primary};
            }

            @media(max-width: 720px) {
              margin: '5px';
            }
          }

          .background: {
            padding: 10,
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            margin: 30px;
          }
        `}</style>
      </div>
    );
  }
}
