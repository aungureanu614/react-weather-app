import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Plotly } from 'plotly';
var Plotly = require('plotly')('aungureanu', 'EqbdMrruEtiblI7ee76m');

class Plot extends Component {

  componentDidMount() {
    const { xData, yData, type } = this.props;

    Plotly.plot('plot', [{
      x: xData,
      y: yData,
      type: type
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
  }


  render() {
    return (
      <div id="plot">
        <div id="content"></div>
      </div>
    )
  }
}

// ReactDOM.render(
//   ,
//   document.getElementById('content')
// );

export default Plot;