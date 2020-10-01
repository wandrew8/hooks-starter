import React, { useContext } from 'react';
import DoughnutChart from '../components/DoughnutChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import useShowData from '../hooks/useShowData';
import { ModeContext } from '../App';
import countryData from '../data/country-data';
import countryCodes from '../data/country-code';

export default function Card({country, ranking, score, data}) {
    const [ showData, setShowData ] = useShowData(false);
    const darkMode = useContext(ModeContext);

    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    }

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
    
    const numberFormatter = new Intl.NumberFormat();


    const countryCode = getKeyByValue(countryCodes, country);
    const countryInfo = countryData.filter(count => {
        return count.Country === country;
    })
    console.log(countryInfo)

    return (
        <div>
            <h2>{ranking} - {country} - {score}</h2>
            <div>
                <img src={`https://www.countryflags.io/${countryCode}/flat/64.png`} />
            </div> 
            {countryInfo[0] && <div>
                <p>{`${countryInfo[0].Country} - ${countryInfo[0].Region}`}</p>
                <p>Population: {numberFormatter.format(countryInfo[0].Population)}</p>
                <p>Area (square miles): {numberFormatter.format(countryInfo[0].Area)}</p>
                <p>GDP ($ per capita / year): {currencyFormatter.format(countryInfo[0].GDP)}</p>
                <p>Climate: {countryInfo[0].Climate}</p>
            </div>}
            <div className="showMore">
                <hr/>
                <button className="showMoreButton" onClick={() => setShowData(!showData)}><FontAwesomeIcon icon={faAngleDown} className={showData ? "showData icon" : "hideData icon"}/></button>
            </div>
            {showData ? <DoughnutChart data={data} country={country} /> : null}
        </div>
    )
}
