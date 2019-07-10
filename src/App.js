import React, { Component } from 'react'
import './App.css';
import apikey from './appid';
import Plot from './Components/Plot';
import { connect } from 'react-redux';
import { changeLocation, getSelectedDate, getSelectedTemp, fetchData } from './actions'

class App extends Component {

  fetchData = async (e) => {
    e.preventDefault();
    const { location } = this.props;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&APPID=${apikey}&units=metric`;
    this.props.dispatch(fetchData(url));
  }

  changeLocation = (e) => {
    this.props.dispatch(changeLocation(e.target.value));
  }

  onPlotClick = (data) => {
    if(data.points) {
      const { x: date, y: temp } = data.points[0];
      this.props.dispatch(getSelectedTemp(temp));
      this.props.dispatch(getSelectedDate(date));
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
  return state;
}

export default connect(mapStateToProps)(App);
