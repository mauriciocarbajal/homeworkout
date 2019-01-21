import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Exercise from './Exercise';
import Rest from './Rest';
import DayComplete from './DayComplete';

import { getTrainingDay } from '../utils/dates';

class App extends PureComponent {
  constructor(props) {
    super(props);

    const { exercises } = props;

    const currentList = [
      ...exercises[getTrainingDay()],
      ...exercises.post,
    ];

    this.state = {
      resting: false,
      currentList,
      index: 0,
      last: currentList.length - 1,
      currentSerie: 1,
    };

    this.updateSerie = this.updateSerie.bind(this);
    this.updateExercise = this.updateExercise.bind(this);
    this.rest = this.rest.bind(this);
  }

  updateExercise() {
    const {
      index,
      last,
    } = this.state;
    if (index <= last) {
      this.setState({
        index: index + 1,
        currentSerie: 1,
      });
    }
  }

  updateSerie() {
    const {
      currentList,
      index,
      currentSerie,
    } = this.state;

    if (currentSerie === currentList[index].series) {
      this.updateExercise();
      this.setState({
        resting: false,
      });
    } else {
      this.setState({
        resting: false,
        currentSerie: currentSerie + 1,
      });
    }
  }

  rest() {
    this.setState({
      resting: true,
    });
  }

  render() {
    const {
      resting,
      currentList,
      index,
      last,
      currentSerie,
    } = this.state;

    if (resting) {
      return (
        <Rest updateSerie={this.updateSerie} />
      );
    }

    if (index > last) {
      return (
        <DayComplete day={getTrainingDay()} />
      );
    }

    return (
      <div>
        <Exercise
          exercise={currentList[index]}
          currentSerie={currentSerie}
          updateSerie={this.updateSerie}
          moveNext={this.updateExercise}
        />
        <button onClick={this.rest}>Hecho</button>
      </div>
    );
  }
}

App.propTypes = {
  exercises: PropTypes.object.isRequired,
};

export default App;
