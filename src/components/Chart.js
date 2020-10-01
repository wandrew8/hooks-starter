import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

export default class Chart extends Component {
    render() {
    const { data, chartLength, setChartLength } = this.props;
    return (
      <div>
        <h2>The World's Happiest Countries</h2>
        <form onChange={(e) => setChartLength(e.target.value)}>
            <label for="top5">Top 5 Countries</label>
            <input checked={chartLength == 5} type="radio" id="top5" name="chartLength" value={5}/>
            <label for="top10">Top 10 Countries</label>
            <input type="radio" id="top10" name="chartLength" value={10}/>
            <label for="top25">Top 25 Countries</label>
            <input type="radio" id="top25" name="chartLength" value={25}/>
            <label for="all">All Countries</label>
            <input type="radio" id="all" name="chartLength" value={155}/>
        </form>
        <Bar ref="chart" data={data} />
      </div>
    );
  }
}