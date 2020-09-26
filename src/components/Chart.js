import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

export default class Chart extends Component {
    render() {
    const { data } = this.props;
    return (
      <div>
        <h2>Bar Example</h2>
        <Bar ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}