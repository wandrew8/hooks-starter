import React from 'react';
import PropTypes from 'prop-types';


export default function Card({country, ranking, score}) {
    return (
        <div>
            {ranking} - {country} - {score}
        </div>
    )
}

Card.propTypes = {
    country: PropTypes.string,
    ranking: PropTypes.number,
    score: PropTypes.number
}