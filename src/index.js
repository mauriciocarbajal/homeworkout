import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import exercises from './exercises';

import App from './components/App';

render(
  <MuiThemeProvider>
    <App exercises={exercises} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
