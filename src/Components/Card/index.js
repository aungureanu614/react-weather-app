import React from 'react'
import './styles.scss'

const DayName = ({ day }) => <div className="day">{day}</div>

const DayImg = ({ icon }) => (
  <img className="weather-img" src={icon} alt="weather pic" />
)

const HighLow = ({ high, low }) => (
  <div className="high-low">
    <span className="high">{Math.round(high)}</span>
    <span className="low">{Math.round(low)}</span>
  </div>
)

const Card = ({ weatherData }) => {
  const { temp_max: high, temp_min: low } = weatherData.main
  const { icon } = weatherData.weather[0]
  const { day } = weatherData
  const iconImg = `http://openweathermap.org/img/w/${icon}.png`

  return (
    <div className="weather-card">
      <DayName day={day} />
      <DayImg icon={iconImg} />
      <HighLow high={high} low={low} />
    </div>
  )
}

export default Card
