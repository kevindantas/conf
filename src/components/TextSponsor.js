import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#f0f0f0',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    }
  }),
};

class TextSponsor extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="PATROCINADORES" subtitle='Utiliza React na sua empresa?'>
          <p>Informações sobre cotas de patrocínio e apoios: <br/>
          <a href="mailto:reactconfbr@gmail.com"><b>reactconfbr@gmail.com</b></a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextSponsor;
