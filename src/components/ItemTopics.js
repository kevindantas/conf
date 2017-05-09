import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Item from './Item';
import Text from './Text';

const styles = {
  containerText: css({
    alignSelf: 'flex-end',
    background: '#FFFFFF',
    width: '100vw',
    display: 'block',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    }
  }),
  container: css({
    // alignSelf: 'flex',
    background: '#FFFFFF',
    display: 'block',
    '@media(max-width: 720px)': {
      alignSelf: 'flex',
      display:'block',
      width:'80%',
      margin:'0 auto'
    }
  }),
};

class ItemTopics extends PureComponent {
  render() {
    return (
      <div {...styles.containerText}>
        <Text title="Tópicos" subtitle={Globals.topics.title}>
        <p>{Globals.topics.text}</p>
          <div {...styles.container}>
            <Item title="REACT NATIVE">
                <h4>sibelius</h4>
              <p>28+</p>
            </Item>
            <Item title="REACT + REDUX">
                <h4>kimayrtomaz</h4>
              <p>25+</p>
            </Item>
            <Item title="CASES DE SUCESSO">
                <h4>phelippepuhle</h4>
              <p>17+</p>
            </Item>
            <Item title="FIBER">
                <h4>sibelius</h4>
              <p>15+</p>
            </Item>
          </div>    
        </Text>
      </div>
      
    );
  }
}

export default ItemTopics;
