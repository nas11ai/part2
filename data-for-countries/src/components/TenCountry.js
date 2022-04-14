import React from 'react'

const TenCountry = ({ filteredCountryName, showInfo }) => {
    return (
        <div>
            <p>Countries List:</p>
            <ul>
                {
                    filteredCountryName.map(
                        country => <li key={country}>{country} <button onClick={() => showInfo(country)}>Show</button></li>
                    )
                }
            </ul>
        </div>
    )
}

export default TenCountry