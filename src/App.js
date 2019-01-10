import React, { Component } from 'react';
import './App.css';
import Card from './Components/card';
import appId from './appid';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      weatherData: []
    }
  }

  getData(nextFiveDays) {
    const days = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat'
    }
    return nextFiveDays.map((day) => {
      const dt = new Date(day.dt_txt);
      const dayOfWeek = dt.getDay();
      const { main, weather } = day
      return { day: days[dayOfWeek], main, weather }
    })
  }

  async componentDidMount() {
    try {
      const weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Los Angeles&units=imperial&appid=${appId}`)
      const json = await weather.json()
      const nextFiveDays = [json.list[0], json.list[8], json.list[16], json.list[24], json.list[32]];
      const weatherData = this.getData(nextFiveDays)
      this.setState({ weatherData })
      console.log(this.state)
    } catch(err) {
      throw new Error(err)
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.weatherData.map((data, i)=> {
          return <Card key={i} day={data.day} high={data.main.temp_max} low={data.main.temp_min} icon={data.weather[0].icon}/>
        })} 
      </div>
    );
  }
}

export default App;
