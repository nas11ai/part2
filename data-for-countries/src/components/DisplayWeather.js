import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const DisplayWeather = ({ country }) => {
    const [weather, setWeather] = useState([])

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const latitude = country.latlng[0]
    const longitude = country.latlng[1]

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
            .then((response) => {
                setWeather(response.data)
            })
    }, [])

    console.log(weather)

    if (weather.length !== 0) {
        return (
            <div>
                <h1>Weather in {country.capital}</h1>
                <p>temperature: {weather.main.temp} Fahrenheit</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p>status: {weather.weather[0].main}</p>
                <p>wind: {weather.wind.speed} m/s</p>
            </div>
        )
    } else {
        return ''
    }
}

export default DisplayWeather