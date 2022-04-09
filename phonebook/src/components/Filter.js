import React from 'react'

const Filter = ({ nameFilter, handleNameFilterChange }) => {
    return (
        <form>
            <div>
                filter shown with <input value={nameFilter} onChange={handleNameFilterChange} />
            </div>
        </form>
    )
}

export default Filter