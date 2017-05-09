import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Item from './Item';

const styles = {
  container: css({
    alignSelf: 'center',
    // background: '#333333',
    // width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'flex-end',
      display:'block',
      width:'80%',
      margin:'0 auto'
    }
  }),

  link: css({
    color: '#ffffff',
  }),
};

class Footer extends PureComponent {
  render() {
    return (
      <div {...styles.container}>

        <Item title="Organização" subtitle="REACT BRASIL">
        </Item>

        <Item title="Criado com" subtitle="">
          <p><a {...styles.link} href='https://github.com/facebookincubator/create-react-app/'>create-react-app</a></p>
        </Item>

        <Item title="Outras Confs no mundo" subtitle="">
          <p><a {...styles.link} href='https://facebook.github.io/react/community/conferences.html'>Outras conferências Facebook</a></p>
        </Item>
      </div>
    );
  }
}

export default Footer;
