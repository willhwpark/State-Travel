import React, { Component } from 'react';
import StateList from './components/StateList';
import { states } from './states';
import SearchBox from './components/SearchBox';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      states: states,
      searchfield: ""
    }

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { states, searchfield } = this.state;
    const filteredTests = states.filter(states => {
      return states.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div>
        <div clasName="state-header">
          <h1>State in United States of America</h1>
        </div>
        <SearchBox searchChange={this.onSearchChange} />
        <StateList states={filteredTests} />
      </div>
    )
  }
}

export default App;