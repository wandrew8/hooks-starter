import React, { useRef, useEffect, useState } from 'react';
import Toggle from './Toggle';
import Modal from './components/Modal';
import Chart from './components/Chart';
import ToggleYear from './components/ToggleYear';
import useTitleInput from './hooks/useTitleInput';
import Pagination from './components/Pagination';
import Card from './components/Card';
import year2019 from './data/data';
import year2018 from './data/data2018';
import year2017 from './data/data2017';
import year2016 from './data/data2016';


const App = () => {
  const [name, setName] = useTitleInput('');
  const [ year, setYear ] = useState(year2019);
  const [ chartLength, setChartLength ] = useState(5);
  const [ page, setPage ] = useState(1);
  const [ itemsPerPage, setItemsPerpage ] = useState(5);
  const totalPages = Math.ceil(year.length / itemsPerPage);
  const ref = useRef();
  console.log(totalPages)

  const getData = (dataSource, length, data) => {
    const array = [];
    for(let i = 0; i < length; i++) {
      array.push(dataSource[i][data]);
    }
    return array;
  }

  const getLabel = () => {
    if(chartLength === 5) {
      return 'Top Five Happiest Countries';
    } else if (chartLength === 10) {
      return 'Top Ten Happiest Countries';
    } else if (chartLength === 25) {
      return 'Top 25 Happiest Countries';
    } else {
      return 'All Countries';
    }
  }

  

  const data = {
    labels: getData(year, chartLength, 'Country'),
    datasets: [
      {
        label: getLabel(),
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: getData(year, chartLength, 'Score')
      }
    ]
  };

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmit(name, setName, ref);
        }}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name..." />
        <button type="submit">Submit</button>
      </form>
      <p>Welcome{name ? `, ${name}!` : '!'}</p>
      <Toggle />
      <ToggleYear year={year} setYear={setYear}/>
      <Chart data={data} chartLength={chartLength} setChartLength={setChartLength} />
      <Modal/>
      { year.filter((country, i) => {
        return i >= (page - 1) * itemsPerPage && i < page * itemsPerPage; 
      }).map(country => {
        const doughnutData = {
          labels: [
            'GDP (per capita)',
            'Social Support',
            'Healthy Life Expectancy',
            'Freedom to make life choices',
            'Generosity',
            'Perceptions of corruption'
          ],
          datasets: [{
            data: [country.GDP, country.SocialSupport, country.HealthExpect, country.FreedomChoice, country.Generosity, country.PerceptionCorruption],
            hoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            hoverBorderColor: '#fff',
            backgroundColor: [
            '#fd79a8',
            '#fab1a0',
            '#ffeaa7',
            '#81ecec',
            '#74b9ff',
            '#a29bfe'
            ],
            hoverBackgroundColor: [
            'rgba(253, 121, 168, 0.8)',
            'rgba(250, 177, 160,0.8)',
            'rgba(255, 234, 167,0.8)',
            'rgba(129, 236, 236,0.8)',
            'rgba(116, 185, 255,0.8)',
            'rgba(162, 155, 254,0.8)'
            ]
          }]
        };
        return (
          <Card key={country.Rating} country={country.Country} score={country.Score.toFixed(2)} ranking={country.Ranking} data={doughnutData} />
        )
      })}
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
};

const formSubmit = (value, setValue, ref) => {
  console.log(`email sent to ${value}!`)
  setValue('');
  ref.current.classList.add('hidden');
}

export default App;
