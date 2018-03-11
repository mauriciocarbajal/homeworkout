import React, { PureComponent } from 'react';

class App extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <p>PureComponent</p>
    );
  }
}

export default App;
