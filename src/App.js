import React, { Component } from 'react'
import './App.css';
import apikey from './appid';
import Plot from './Components/Plot';
import { connect } from 'react-redux';
import { changeLocation, getData, getDates, getTemps, notFound, getSelected } from './actions'

class App extends Component {
  state = {
    // selected: {},
  }

  fetchData = async (e) => {
    e.preventDefault();
    const { location } = this.props;

    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&APPID=${apikey}&units=metric`);
      const data = await response.json();
      if(data.cod === '404') {
        this.props.dispatch(notFound('City not found, please try again'))
      } else {
        const dates = [];
        const temps = [];
        data.list.forEach((item) => {
          dates.push(item.dt_txt);
          temps.push(item.main.temp);
        });
        this.props.dispatch(getData(data));
        this.props.dispatch(getDates(dates));
        this.props.dispatch(getTemps(temps));
      }
    } catch(err) {
      throw new Error(err);
    }
  }

  changeLocation = (e) => {
    this.props.dispatch(changeLocation(e.target.value));
  }

  onPlotClick = (data) => {
    if(data.points) {
      const { x, y } = data.points[0];
      const selected = {
        date: x,
        temp: y
      }
      this.props.dispatch(getSelected(selected))
    }
  }

  render() {
    const { temp, date } = this.props.selected;
    const { list } = this.props.data;
    const { location, dates, temps, notFound } = this.props;
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
        {
          list ? (
            <div className="wrapper">
              <p className="temp-wrapper">
                <span className="temp">
                  {temp ? temp : currentTemp}
                </span>
                <span className="temp-symbol">°C</span>
                <span className="temp-date">
                  {temp && date}
                </span>
              </p>
              <h2>Forecast</h2>
              <Plot
                xData={dates}
                yData={temps}
                onPlotClick={this.onPlotClick}
                type="scatter"
              />
            </div>
          ) : <div className="not-found-text">{notFound}</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    data: state.data, 
    dates: state.dates,
    temps: state.temps, 
    selected: state.selected,
    notFound: state.notFound
  }
}

export default connect(mapStateToProps)(App);
