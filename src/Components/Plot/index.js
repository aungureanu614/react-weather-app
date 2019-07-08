import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Plot from 'react-plotly.js';

class Plotly extends Component {

  render() {
    const { xData, yData, type } = this.props;
    return (
      <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: type,
          }]}
        layout={{ title: 'Plot', xaxis: { gridcolor: 'transparent' }, margin: { t: 0, r: 0, l: 30} }}
      />
    )
  }
}

export default Plotly;