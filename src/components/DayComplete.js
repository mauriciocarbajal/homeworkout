import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import styles from './styles';

class DayComplete extends PureComponent {
  render() {
    const { day } = this.props;
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>{day} COMPLETE</h2>
      </div>
    );
  }
}

DayComplete.propTypes = {
  day: PropTypes.string.isRequired,
};

export default DayComplete;
