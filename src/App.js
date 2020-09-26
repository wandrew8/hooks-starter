import React, { useRef, useEffect, useState } from 'react';
import Toggle from './Toggle';
import Modal from './components/Modal';
import Chart from './components/Chart';
import ToggleYear from './components/ToggleYear';
import useTitleInput from './hooks/useTitleInput';
import Card from './components/Card';
import year2019 from './data/data';
import year2018 from './data/data2018';
import year2017 from './data/data2017';
import year2016 from './data/data2016';


const App = () => {
  const [name, setName] = useTitleInput('');
  const [ year, setYear ] = useState(year2019);
  const ref = useRef();
  const data = {
    labels: [`${year[0].Country}`, `${year[1].Country}`, `${year[2].Country}`, `${year[3].Country}`, `${year[4].Country}`],
    datasets: [
      {
        label: 'Top Five happiest Countries',
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
        data: [`${year[0].Score}`, `${year[1].Score}`, `${year[2].Score}`, `${year[3].Score}`, `${year[4].Score}`]
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
      <Chart data={data}/>
      <Modal/>
      { year.map(country => {
        return (
          <Card country={country.Country} score={country.Score.toFixed(2)} ranking={country.Ranking} />
        )
      })}
    </div>
  );
};

const formSubmit = (value, setValue, ref) => {
  console.log(`email sent to ${value}!`)
  setValue('');
  ref.current.classList.add('hidden');
}

export default App;
