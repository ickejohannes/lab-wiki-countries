import React from 'react';
import { Link } from 'react-router-dom';
import countriesJSON from "../countries.json"

function CountriesList(props) {
    return (
        <div>
            {countriesJSON.map(country => {
                return <p key={country.name.common}><Link to={country.alpha3Code}>{country.name.common}</Link></p>
            })}
        </div>
    );
}

export default CountriesList;