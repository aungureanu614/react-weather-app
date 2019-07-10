import React, { Component } from 'react';
import Plotly from 'plotly.js-dist';

class Plot extends Component {
  drawPlot = () => {
    const { xData, yData, type, onPlotClick } = this.props;
    Plotly.newPlot('plot', [{
      x: xData,
      y: yData,
      type
    }], {
        margin: {
          t: 0, r: 0, l: 30
        },
        xaxis: {
          gridcolor: 'transparent'
        }
      }, {
        displayModeBar: false
      });

    document.getElementById('plot').on(
      'plotly_click', onPlotClick);
  }

  componentDidMount() {
    this.drawPlot();
  }

  componentDidUpdate() {
    this.drawPlot();
  }

  render() {
    //TODO: don't re-render component unless x or y change
    console.log('RENDER PLOT');
    return (
      <div id="plot"></div>
    );
  }
}

export default Plot;