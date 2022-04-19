import React from 'react'

const Notification = ({ message, isErrorMessage }) => {
    const nameInfoStyle = {
        color: 'green',
        backgroundColor: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: 'red',
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

    return isErrorMessage ? <div style={errorStyle}>{message}</div> : <div style={nameInfoStyle}>{message}</div>
}

export default Notification