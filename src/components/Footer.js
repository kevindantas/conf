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

        

        <Item title="#REACTCONFBR" subtitle='REACT BRASIL'>
        </Item>
        <Item>
          <p>Branding: <a {...styles.link} href='https://informatica.sp.senai.br'>Escola SENAI Informática</a></p>
          <p>Criado com: <a {...styles.link} href='https://github.com/facebookincubator/create-react-app/'>create-react-app</a></p>
          <p>React Confs no mundo: <a {...styles.link} href='https://facebook.gihtub.io/react/community/conferences.html'>Conferences React</a></p>
        </Item>

      </div>
    );
  }
}

export default Footer;
