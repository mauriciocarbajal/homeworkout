import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { REST_TIME_MS, PROGRESS_UPDATE_TIME } from '../constants/global';
import styles from './styles';

class Rest extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      restedMS: 0,
    };

    this.updateTime = this.updateTime.bind(this);

    setTimeout(this.updateTime, PROGRESS_UPDATE_TIME);
  }

  updateTime() {
    const { restedMS } = this.state;
    const updatedTime = restedMS + PROGRESS_UPDATE_TIME;
    this.setState({
      restedMS: updatedTime,
    });

    if (updatedTime >= REST_TIME_MS) {
      const {
        updateSerie,
      } = this.props;
      updateSerie();
    } else {
      setTimeout(this.updateTime, PROGRESS_UPDATE_TIME);
    }
  }

  render() {
    const { restedMS } = this.state;

    const percentage = Math.round(100 * (restedMS / REST_TIME_MS));

    return (
      <div>
        <div style={styles.container}>
          <h2 style={styles.title}>Bien hecho! Descansa</h2>
        </div>
        <div style={{ width: 120, height: 120, margin: 'auto' }}>
          <CircularProgressbar
            percentage={percentage}
            styles={{
              path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
            }}
          />
        </div>
      </div>
    );
  }
}

Rest.propTypes = {
  updateSerie: PropTypes.func.isRequired,
};

export default Rest;
