import React, {PureComponent} from 'react';

import Globals from '../Globals';

export default class extends PureComponent {
  render() {
    return (
      <div className='header'>
        <h1 className='title'>
          React
          <span className='titleSpan'>Conf</span>
        </h1>

        <div className='hrContainer'>
          <hr className='hr'/>
        </div>

        <h5 className='subtitle'>
          {Globals.location.country}
          {Globals.date.year}
        </h5>

        <style jsx>{`
          .header {
            align-self: flex-start;
            justify-content: flex-start;
            margin: 30;
            text-align: left;
          }

          .title {
            color: ${Globals.colors.white};
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 4;
            font-weight: bold;
          }

          .titleSpan {
            color: ${Globals.colors.primary};
          }

          .hrContainer {
            width: 25;
          }

          .hr {
            border-color: ${Globals.colors.primary};
          }

          .subtitle {
            color: ${Globals.colors.primary};
            text-transform: uppercase;
            font-size: 17;
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}
