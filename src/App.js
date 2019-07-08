import React, { Component } from 'react'
import './App.css';
import apikey from './appid';
import Plot from './Components/Plot';

class App extends Component {
  state = {
    location: '',
    data: {},
    dates: [],
    temps: []
  }

  fetchData = async (e) => {
    e.preventDefault();
    const { location } = this.state
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&APPID=${apikey}&units=metric`);
      const data = await response.json();
      console.log(data)
      const dates = [];
      const temps = [];
      data.list.forEach((el) => {
        dates.push(el.dt_txt);
        temps.push(el.main.temp);
      })
      this.setState({
        data,
        dates,
        temps
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
    const { location, dates, temps } = this.state;
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
        {dates.length !== 0 &&
          <div className="plot-data"> 
          <Plot
            xData={dates}
            yData={temps}
            type='scatter' />
          </div>
        }
      </div>
    )
  }
}

export default App;
