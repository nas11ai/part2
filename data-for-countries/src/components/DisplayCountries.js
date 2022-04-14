import React from 'react'
import Country from './Country.js'
import TenCountry from './TenCountry'
import DisplayWeather from './DisplayWeather.js'

const DisplayCountries = ({ countryObj, newCountry, setNewCountry }) => {
    const countriesName = countryObj.map(country => country.name.common)
    const filteredCountryName = countriesName.filter(name => name.toLowerCase().includes(newCountry.toLowerCase()))
    const filteredCountry = countryObj.find(country => country.name.common === filteredCountryName[0])

    const showInfo = (countryName) => {
        setNewCountry(countryName);
    };

    if (newCountry === '') {
        return <p>please input the country name</p>
    } else {
        if (filteredCountryName.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (filteredCountryName.length > 1) {
            return (
                <TenCountry filteredCountryName={filteredCountryName} showInfo={showInfo} />
            )
        } else if (filteredCountryName.length === 1) {
            return (
                <div>
                    <Country country={filteredCountry} />
                    <DisplayWeather country={filteredCountry} />
                </div>
            )
        } else {
            return <p>No country matched with your filter</p>
        }
    }
}

export default DisplayCountries