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

    const percentage = 100 * (restedMS / REST_TIME_MS);

    return (
      <div>
        <div style={styles.container}>
          <h2 style={styles.title}>WELL DONE! REST</h2>
        </div>
        <CircularProgressbar
          percentage={percentage}
          styles={{
            width: '200px',
            height: '200px',
            path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
          }}
        />
      </div>
    );
  }
}

Rest.propTypes = {
  updateSerie: PropTypes.func.isRequired,
};

export default Rest;
