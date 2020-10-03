import React, { useContext } from 'react';
import DoughnutChart from '../components/DoughnutChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import useShowData from '../hooks/useShowData';
import { ModeContext } from '../App';
import countryData from '../data/country-data';
import countryCodes from '../data/country-code';
import africa from '../assets/images/africa.png';
import asia from '../assets/images/asia.png';
import eurasia from '../assets/images/eurasia.png';
import europe from '../assets/images/europe.png';
import latinAmerica from '../assets/images/latinAmerica.png';
import middleEast from '../assets/images/middleEast.png';
import northAfrica from '../assets/images/northAfrica.png';
import northAmerica from '../assets/images/northAmerica.png';
import oceania from '../assets/images/oceania.png';
import unknown from '../assets/images/unknown.png';

export default function Card({country, ranking, score, data}) {
    const [ showData, setShowData ] = useShowData(false);
    const darkMode = useContext(ModeContext);
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    }
    const countryCode = getKeyByValue(countryCodes, country);
    const countryInfo = countryData.filter(count => {
        return count.Country === country;
    })


    const getImage = () => {
        const region = countryInfo[0] ? countryInfo[0].Region : "unknown";
        console.log(region)
        switch(region) {
            case "Africa":
              return africa;
            case "Asia":
              return asia;
            case "Eurasia":
              return eurasia;
            case "Europe":
              return europe;
            case "Eastern Europe":
              return europe;
            case "Latin America and Caribean":
              return latinAmerica;
            case "Northern Africa":
              return northAfrica;
            case "Middle East":
              return middleEast;
            case "North America":
              return northAmerica;
            case "Oceania":
              return oceania;
            case "unknown":
              return unknown;
            default:
              return europe;
          }
    }

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
    
    const numberFormatter = new Intl.NumberFormat();



    return (
        <div className="card">
            <div className="card-heading-container">
                <h2>{ranking} - {country} - {score}</h2>
                {countryCode && countryInfo[0] ? <img src={`https://www.countryflags.io/${countryCode}/flat/64.png`} /> : null }
            </div> 
            <div className="card-body-container">
                {countryInfo[0] ? <div>
                    <p>{`${countryInfo[0].Country ? countryInfo[0].Country : null} - ${countryInfo[0].Region ? countryInfo[0].Region : null}`}</p>
                    <p>Population: {numberFormatter.format(countryInfo[0].Population ? countryInfo[0].Population : 0)}</p>
                    <p>Area (square miles): {numberFormatter.format(countryInfo[0].Area ? countryInfo[0].Area : 0)}</p>
                    <p>GDP ($ per capita / year): {currencyFormatter.format(countryInfo[0].GDP ? countryInfo[0].GDP : 0)}</p>
                    <p>Climate: {countryInfo[0].Climate ? countryInfo[0].Climate : 'unknown'}</p>
                </div>
                :
                <div>
                <p>{country}</p>
                    <p>Population: unknown</p>
                    <p>Area (square miles): unknown</p>
                    <p>GDP ($ per capita / year): unknown</p>
                    <p>Climate: unknown</p>
                </div>}
                <div className="image-container">
                    <img className="region-image" src={getImage()} alt={country} />
                </div>
            </div>
            <div className="showMore">
                <hr/>
                <button className="showMoreButton" onClick={() => setShowData(!showData)}><FontAwesomeIcon icon={faAngleDown} className={showData ? "showData icon" : "hideData icon"}/></button>
            </div>
            {showData ? <DoughnutChart data={data} country={country} /> : null}
        </div>
    )
}
