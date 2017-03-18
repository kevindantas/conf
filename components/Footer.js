import React, { PureComponent } from 'react';
import Globals from '../utils/Globals';

import Box from './Box';

export default class extends PureComponent {
  render(){
    return(
      <div className='footer'>
        <Box>
          <h3>DATA</h3>
          <h2>{Globals.date.full}</h2>
          <p>10:00am - 17:00pm</p>
        </Box>
        <Box>
          <h3>LOCAL</h3>
          <h2>{Globals.location.city}</h2>
          <p>{Globals.location.locale}</p>
        </Box>

        <style jsx>{`
          .footer {
            align-self: flex-end;
            display: flex;
            @media(max-width: 720px) {
              align-self: auto;
            }
          }

          h3, p {
            color: ${Globals.colors.primary};
            margin: 0px;
            letter-spacing: 2px;
          }

          p {
            color: ${Globals.colors.primary};
            letter-spacing: 2px;
          }

          h2 {
            margin: 0px;
            letter-spacing: 6px;
          }
        `}
        </style>
      </div>
    );
  }
}