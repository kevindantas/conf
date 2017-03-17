import React from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  header: css({
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    margin: 30,
    textAlign: 'left',
  }),
  title: css({
    color: Globals.colors.white,
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: 4,
    fontWeight: 'bold',
  }),
  titleSpan: css({
    color: Globals.colors.primary,
  }),
  hrContainer: css({
    width: 25,
  }),
  hr: css({
    borderColor: Globals.colors.primary,
  }),
  subtitle: css({
    color: Globals.colors.primary,
    textTransform: 'uppercase',
    fontSize: 17,
    margin: 0,
  }),
};

const Title = () => (
  <div {...styles.header}>
    <h1 {...styles.title}>
      React
      <span {...styles.titleSpan}>Conf</span>
    </h1>

    <div {...styles.hrContainer}>
      <hr {...styles.hr} />
    </div>

    <h5 {...styles.subtitle}>{Globals.location} {Globals.year}</h5>
  </div>
);

export default Title;
