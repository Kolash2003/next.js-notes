import React from 'react'

const layout = ({ childen }) => {
    return (
        <div>
            <h1>Header</h1>
            {childen}
            <h1>Footer</h1>
        </div>
    )
}

export default layout
