import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { REPET_TIME, REST_TIME } from '../constants/global';
import styles from './styles';


class Exercise extends PureComponent {
  render() {
    const {
      currentSerie,
      updateSerie,
      exercise: {
        name,
        desc,
        series,
        repet,
      },
    } = this.props;

    const waitingTime = (repet * REPET_TIME) + REST_TIME;
    setTimeout(updateSerie, waitingTime);
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>{name}</h2>
        <h4>Serie {currentSerie} / {series}</h4>
        <p>{desc}</p>
        <p>{repet} repetitions</p>
      </div>
    );
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired,
  currentSerie: PropTypes.number.isRequired,
  updateSerie: PropTypes.func.isRequired,
};

export default Exercise;
