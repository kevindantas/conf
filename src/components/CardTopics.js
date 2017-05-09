import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Card from './Card';
import Text from './Text';

const styles = {
  containerText: css({
    alignSelf: 'flex-end',
    background: '#FFFFFF',
    width: '100vw',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    }
  }),
  container: css({
    // alignSelf: 'flex',
    background: '#FFFFFF',
    // columnWidth: '320px',
    // columnGap: '15px',

    width: '100%',
    margin: '20px auto',
  }),
};

class ItemTopics extends PureComponent {
  render() {
    return (
      <div {...styles.containerText}>
        <Text title="Tópicos" subtitle={Globals.topics.title}>
        <p>{Globals.topics.text}</p>
          <div {...styles.container}>
            <Card title="REACT NATIVE">
                <h4>sibelius</h4>
              <p>28+</p>
            </Card>
            <Card title="REACT + REDUX">
                <h4>Kirmayrtomaz</h4>
              <p>25+</p>
            </Card>
            <Card title="CASES DE SUCESSO">
                <h4>phelippepuhle</h4>
              <p>17+</p>
            </Card>
            <Card title="FIBER">
                <h4>sibelius</h4>
              <p>15+</p>
            </Card>
            <Card title="SERVER SIDE RENDERING">
                <h4>dleitee</h4>
              <p>13+</p>
            </Card>
            <Card title="RELAY">
                <h4>sibelius</h4>
              <p>13+</p>
            </Card>
            <Card title="GraphQL + Apollo">
                <h4>sebas5384</h4>
              <p>9+</p>
            </Card>
            <Card title="REACT NATIVE + FIREBASE">
                <h4>rodrigooler</h4>
              <p>8+</p>
            </Card>
            <Card title="BEST PRATICES FOR REUSABLE UI COMPONENTS">
                <h4>rodrigooler</h4>
              <p>11+</p>
            </Card>
            <Card title="TDD + REACT">
                <h4>she-dev</h4>
              <p>10+</p>
            </Card>
            <Card title="PWA + REDUX">
                <h4>danvitoriano</h4>
              <p>10+</p>
            </Card>
            <Card title="PWA + REACT">
                <h4>fdaciuk</h4>
              <p>12+</p>
            </Card>
            <Card title="REACT NATIVE OFFLINE FIRST">
                <h4>soutot</h4>
              <p>8+</p>
            </Card>
            <Card title="RELAY SUBSCRIPTIONS">
                <h4>sibelius</h4>
              <p>9+</p>
            </Card>
            <Card title="PUSH NOTIFICATION + REACT NATIVE">
                <h4>felipedaraujo</h4>
              <p>9+</p>
            </Card>
          </div>    
        </Text>
      </div>
      
    );
  }
}

export default ItemTopics;
