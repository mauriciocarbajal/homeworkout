import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Exercise from './Exercise';
import DayComplete from './DayComplete';

const getTrainingDay = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  if (currentDay >= 1 && currentDay <= 2) {
    return 'monday';
  } else if (currentDay >= 3 && currentDay <= 4) {
    return 'wednesday';
  }
  return 'friday';
};


class App extends PureComponent {
  constructor(props) {
    super(props);

    const { exercises } = props;

    const currentList = [
      ...exercises[getTrainingDay()],
      ...exercises.post,
    ];

    this.state = {
      currentList,
      index: 0,
      last: currentList.length - 1,
      currentSerie: 1,
    };

    this.updateExercise = this.updateExercise.bind(this);
    this.updateSerie = this.updateSerie.bind(this);
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
    } else {
      this.setState({
        currentSerie: currentSerie + 1,
      });
    }
  }

  render() {
    const {
      currentList,
      index,
      last,
      currentSerie,
    } = this.state;

    if (index > last) {
      return (
        <DayComplete day={getTrainingDay()} />
      );
    }

    return (
      <Exercise
        exercise={currentList[index]}
        currentSerie={currentSerie}
        updateSerie={this.updateSerie}
        moveNext={this.updateExercise}
      />
    );
  }
}

App.propTypes = {
  exercises: PropTypes.object.isRequired,
};

export default App;
