import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries.js'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
  }, [])

  const handleCountryChange = (event) => setNewCountry(event.target.value)

  return (
    <div>
      <div>find countries <input value={newCountry} onChange={handleCountryChange} /></div>
      <div>
        <DisplayCountries countryObj={countries} newCountry={newCountry} />
      </div>
    </div>
  )
}

export default App;
