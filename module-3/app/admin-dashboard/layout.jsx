import React from 'react'

const layout = ({
    children,
    analytics,
    team
}) => {
    return (
        <div>
            {children}
            {analytics}
            {team}
        </div>
    )
}

export default layout