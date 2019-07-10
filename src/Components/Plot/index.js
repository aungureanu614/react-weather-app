import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Plotly extends Component {

  render() {
    const { xData, yData, type, onPlotClick } = this.props;
    return (
      <Plot
        data={
          [{
            x: xData,
            y: yData,
            type: type,
          }]
        }
        layout={
          {
            title: 'Plot', 
            xaxis: { gridcolor: 'transparent' }, 
            yaxis: { title: '°Celsius' }, 
            margin: { t: 0, r: 50, l: 50} 
          }
        }
        onClick={onPlotClick}
      />
    )
  }
}

export default Plotly;