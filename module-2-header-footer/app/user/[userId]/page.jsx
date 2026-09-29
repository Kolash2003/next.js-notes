import React from 'react'

const Users = async ({ params }) => {
    const { userId } = await params;
    return (
        <div>Users {userId}</div>
    )
}

export default Users