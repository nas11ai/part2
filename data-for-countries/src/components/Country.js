import React from 'react'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(lang => <li key={country.name.common + ' ' + lang}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} />
        </div>
    )
}

export default Country