import React from 'react'

const Persons = ({ filteredNameList }) => {
    return (
        <ul>
            {filteredNameList.map(item => <li key={item.name}>{item.name} {item.number}</li>)}
        </ul>
    )
}

export default Persons