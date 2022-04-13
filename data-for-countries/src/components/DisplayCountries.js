import React from 'react'
import Country from './Country.js'

const DisplayCountries = ({ countryObj, newCountry }) => {
    const countriesName = countryObj.map(country => country.name.common)
    const filteredCountryName = countriesName.filter(name => name.toLowerCase().includes(newCountry.toLowerCase()))
    if (newCountry === '') {
        return <p>please input the country name</p>
    } else {
        if (filteredCountryName.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (filteredCountryName.length > 1) {
            return (
                <div>
                    <p>Countries List:</p>
                    <ul>
                        {filteredCountryName.map(country => <li key={country}>{country}</li>)}
                    </ul>
                </div>
            )
        } else if (filteredCountryName.length === 1) {
            const filteredCountry = countryObj.find(country => country.name.common === filteredCountryName[0])
            return (
                <Country country={filteredCountry} />
            )
        }
    }
}

export default DisplayCountries