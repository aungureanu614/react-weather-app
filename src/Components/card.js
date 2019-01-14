import React from 'react';

const Card = ({day, high, low, icon}) => {
  const iconImg = `http://openweathermap.org/img/w/${icon}.png`;
  return <div className="weather-card">
    <DayName day={day}/>
    <DayImg icon={iconImg}/>
    <HighLow high={high} low={low}/>
  </div>
}

const DayName = ({day}) => (
  <div className="day">{day}</div>
)

const DayImg = ({icon}) => (
  <img className="weather-img" src={icon} alt="weather pic"></img>
)

const HighLow = ({high, low}) => (
  <span className="high-low">
    <span className="high">{Math.round(high)}</span>
    <span className="low">{Math.round(low)}</span>
  </span>
)

export default Card;