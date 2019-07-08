import React, { Component } from 'react'
import './App.css';
import apikey from './appid';
import Plot from './Components/Plot';

class App extends Component {
  state = {
    location: '',
    data: {}
  }

  fetchData = async (e) => {
    e.preventDefault();
    const { location } = this.state
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&APPID=${apikey}&units=metric`);
      this.setState({
        data: await response.json()
      });
    } catch(err) {
      throw new Error(err);
    }
  }

  changeLocation = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  render() {
    const { location } = this.state;
    const { list } = this.state.data;
    let currentTemp = "Specify a location"
    if(list) {
      currentTemp = list[0].main.temp;
    }
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label> I want to know the weather for  
            <input 
              placeholder="City, Country" 
              type="text" 
              value={location}
              onChange={this.changeLocation}
              />
          </label>
        </form>
        <p className="temp-wrapper">
          <span className="temp">{currentTemp}</span>
          <span className="temp-symbol">°C</span>
        </p>
        <Plot
          xData={[1, 2, 3, 4, 5]}
          yData={[1, 4, 9, 16, 25]}
          type='scatter' />
      </div>
    )
  }
}

export default App;
