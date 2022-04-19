import React from 'react'

const Notification = ({ message }) => {
    const nameInfoStyle = {
        color: 'green',
        backgroundColor: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === '') {
        return null
    }

    return (
        <div style={nameInfoStyle}>
            {message}
        </div>
    )
}

export default Notification