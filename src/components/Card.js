import React from 'react';
import DoughnutChart from '../components/DoughnutChart';
import useShowData from '../hooks/useShowData';
import countryData from '../data/country';

export default function Card({country, ranking, score, data}) {
    const [ showData, setShowData ] = useShowData(false);
    return (
        <div>
            
            <h2>{ranking} - {country} - {score}</h2>
            {countryData[country] && <div>
                <img src={countryData[country].flag} />
                <p>{countryData[country].description}</p>
                <img className="countryPhoto" src={countryData[country].photo} />
            </div>} 
            <button onClick={() => setShowData(!showData)}>{showData ? 'Hide Less' : 'Show More'}</button>
            {showData ? <DoughnutChart data={data} country={country} /> : null}
        </div>
    )
}
