import React, { Component } from 'react'
import Card from './Components/Card/index'
import Search from './Components/Search/index'
import './App.scss'
import appId from './appid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: [],
      display: '',
    }
  }

  formatData = nextFiveDays => {
    const days = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
    }

    return nextFiveDays.map(day => {
      const dt = new Date(day.dt_txt)
      const dayOfWeek = dt.getDay()
      const { main, weather } = day
      return { day: days[dayOfWeek], main, weather }
    })
  }

  getData = async inputVal => {
    try {
      const weather = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&units=imperial&appid=${appId}`
      )
      if (weather.status !== 200) {
        return this.setState(prevState => {
          return {
            ...prevState,
            display: 'Please type a valid city name or zip',
          }
        })
      }
      const json = await weather.json()
      const nextFiveDays = [
        json.list[0],
        json.list[8],
        json.list[16],
        json.list[24],
        json.list[32],
      ]
      const weatherData = this.formatData(nextFiveDays)
      this.setState(prevState => {
        return { ...prevState, weatherData }
      })
      return weatherData
    } catch (err) {
      throw new Error(err)
    }
  }

  submitCity = async e => {
    e.preventDefault()
    const inputVal = e.currentTarget.children[0].value
    const weatherData = await this.getData(inputVal)
    if (weatherData) {
      return this.setState(prevState => {
        return { ...prevState, display: inputVal }
      })
    }

    return this.setState(prevState => {
      return { ...prevState, weatherData: [] }
    })
  }

  render() {
    const { display } = this.state
    return (
      <div className="app-container">
        <h2 className="app-container--title">Weekly Weather</h2>
        <div className="app-container--body">
          <Search submitForm={this.submitCity} />
          <div className="display-city">{display}</div>
          <div className="weather-card-container">
            {this.state.weatherData.map((data, index) => {
              return <Card key={index} weatherData={data} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App
