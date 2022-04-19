import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState('')
  const [isErrorMessage, setIsErrorMessage] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (existingPerson && existingPerson.number === newNumber) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    } else if (existingPerson && existingPerson.number !== newNumber) {
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one ?`)) {
        const changedPerson = { ...existingPerson, number: newNumber }
        personService.update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(
              person => person.id === existingPerson.id ? returnedPerson : person
            ))
          }).catch(error => {
            setIsErrorMessage(true)
            setMessage(
              `${changedPerson.name} is already removed from server`
            )
            setTimeout(() => setMessage(''), 5000)
            setPersons(persons.filter(person => person.id !== changedPerson.id))
          })
        setNewName('')
        setNewNumber('')
        setIsErrorMessage(false)
      }
    } else {
      const newNameObj = {
        name: newName,
        number: newNumber
      }
      personService
        .create(newNameObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setIsErrorMessage(false)
          setMessage(`Added ${newName}`)
          setTimeout(() => setMessage(''), 5000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => alert(error.message))
    }
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you sure to delete this contact ?')) {
      personService
        .remove(id)
        .then(returnedPerson => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => alert(error.message))
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleNameFilterChange = (event) => setNameFilter(event.target.value)

  const filteredNameList = persons.filter((person) => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isErrorMessage={isErrorMessage} />
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <h2>add a new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons filteredNameList={filteredNameList} handleDelete={handleDelete} />
    </div>
  )
}

export default App