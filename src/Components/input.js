import React, { Component } from 'react';
import Card from './card';
import appId from '../appid';

class InputForm extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
    }
  }

  formatData(nextFiveDays) {
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

  async getData(inputVal) {
    try {
      const weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&units=imperial&appid=${appId}`)
      const json = await weather.json()
      const nextFiveDays = [json.list[0], json.list[8], json.list[16], json.list[24], json.list[32]];
      const weatherData = this.formatData(nextFiveDays)
      this.setState({ 
        weatherData,
      })
    } catch(err) {
      throw new Error(err)
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputVal = document.getElementById('cityName').value;
    this.getData(inputVal)
  }

  handleClick(e) {
    e.preventDefault();
    e.target.value = '';
  }

  render() {
      return(
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input onClick={(e) => this.handleClick(e)} id="cityName" type="text"></input>
          <button>Search</button>
          {this.state.weatherData.map((data, index) => {
              return <Card key={index} weatherData={data} />
          })}
        </form>
      )
  }
}

export default InputForm;
