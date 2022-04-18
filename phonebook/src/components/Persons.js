import React from 'react'

const Persons = ({ filteredNameList, handleDelete }) => {
    return (
        <ul>
            {filteredNameList.map(
                item => <li key={item.name}>{item.name} {item.number} <button onClick={() => handleDelete(item.id)}>Delete</button></li>
            )}
        </ul>
    )
}

export default Persons