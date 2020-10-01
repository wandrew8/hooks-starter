import React, { useContext } from 'react';
import DoughnutChart from '../components/DoughnutChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import useShowData from '../hooks/useShowData';
import { ModeContext } from '../App';
import countryData from '../data/country';
import countryCodes from '../data/country-code';

export default function Card({country, ranking, score, data}) {
    const [ showData, setShowData ] = useShowData(false);
    const darkMode = useContext(ModeContext);

    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    }

    const countryCode = getKeyByValue(countryCodes, country)

    return (
        <div>
            <h2>{ranking} - {country} - {score}</h2>
            {countryData[country] && <div>
                <img src={`https://www.countryflags.io/${countryCode}/flat/64.png`} />
                <p>{countryData[country].description}</p>
                <img className="countryPhoto" src={countryData[country].photo} />
            </div>} 
            <div className="showMore">
                <hr/>
                <button className="showMoreButton" onClick={() => setShowData(!showData)}><FontAwesomeIcon icon={faAngleDown} className={showData ? "showData icon" : "hideData icon"}/></button>
            </div>
            {showData ? <DoughnutChart data={data} country={country} /> : null}
        </div>
    )
}
