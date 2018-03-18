import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './styles';


class Exercise extends PureComponent {
  render() {
    const {
      currentSerie,
      exercise: {
        name,
        desc,
        series,
        repet,
      },
    } = this.props;

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
};

export default Exercise;
