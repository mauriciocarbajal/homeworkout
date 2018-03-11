import React from 'react';
import { render } from 'react-dom';

import exercises from './exercises';

import App from './components/App';

render(
  <App exercises={exercises} />,
  document.getElementById('root')
);
