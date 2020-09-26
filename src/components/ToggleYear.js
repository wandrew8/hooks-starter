import React from 'react';
import year2019 from '../data/data';
import year2018 from '../data/data2018';
import year2017 from '../data/data2017';
import year2016 from '../data/data2016';

export default function ToggleYear({year, setYear}) {
    const changeYear = year => {
        setYear(year)
    }
    return(
        <div className="toggle-year-container">
            <ul className="toggle-year">
                <li className={year === year2019 ? "selected" : null} onClick={() => changeYear(year2019)}>2019</li>
                <li className={year === year2018 ? "selected" : null} onClick={() => changeYear(year2018)}>2018</li>
                <li className={year === year2017 ? "selected" : null} onClick={() => changeYear(year2017)}>2017</li>
                <li className={year === year2016 ? "selected" : null} onClick={() => changeYear(year2016)}>2016</li>
            </ul>
        </div>
    )
}