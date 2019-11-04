import React, { Component } from "react";
import axios from 'axios';



class App extends Component {
  apiCall = axios.get("https://fantasy.premierleague.com/drf/element-summary/176");

  render() {
    return <h1>Hello, world</h1>
  }
}

export default App;
