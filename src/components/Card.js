import React from 'react';
import DoughnutChart from '../components/DoughnutChart';
import useShowData from '../hooks/useShowData';

export default function Card({country, ranking, score, data}) {
    const [ showData, setShowData ] = useShowData(false);
    return (
        <div>
            <p>{ranking} - {country} - {score}</p>
            <button onClick={() => setShowData(!showData)}>{showData ? 'Hide Less' : 'Show More'}</button>
            {showData ? <DoughnutChart data={data} country={country} /> : null}
        </div>
    )
}
