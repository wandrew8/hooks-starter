import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class Chart extends Component {
    render() {
    const { data, country } = this.props;
    return (
      <div>
        <h2>{country}</h2>
        <Doughnut ref="chart" data={data}/>
      </div>
    );
  }
}