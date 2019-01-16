import React, { Component } from 'react'
import Card from './Components/Card/index'
import Search from './Components/Search/index'
import './App.css'
import appId from './appid'

class App extends Component {
  constructor(props) {
    super(props)
    this.submitCity = this.submitCity.bind(this)
    this.state = {
      weatherData: [],
      searchTerm: '',
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
      6: 'Sat',
    }

    return nextFiveDays.map(day => {
      const dt = new Date(day.dt_txt)
      const dayOfWeek = dt.getDay()
      const { main, weather } = day
      return { day: days[dayOfWeek], main, weather }
    })
  }

  async getData(inputVal) {
    try {
      const weather = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&units=imperial&appid=${appId}`
      )
      const json = await weather.json()
      const nextFiveDays = [
        json.list[0],
        json.list[8],
        json.list[16],
        json.list[24],
        json.list[32],
      ]
      const weatherData = this.formatData(nextFiveDays)
      this.setState({ weatherData })
    } catch (err) {
      throw new Error(err)
    }
  }

  submitCity(e) {
    e.preventDefault()
    const inputVal = e.currentTarget.children[0].value
    this.setState({
      weatherData: this.state.weatherData,
      searchTerm: inputVal,
    })
    this.getData(inputVal)
  }

  render() {
    const { searchTerm } = this.state
    return (
      <div>
        <Search onSubmit={this.submitCity} />
        <div>{searchTerm}</div>
        {this.state.weatherData.map((data, index) => {
          return <Card key={index} weatherData={data} />
        })}
      </div>
    )
  }
}

export default App
