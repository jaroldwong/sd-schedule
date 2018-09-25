import React, { Component } from 'react';

import Navbar from './components/Navbar';
import CalendarGrid from './components/CalendarGrid';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CalendarGrid />
      </div>
    );
  }
}

export default App;
