import React from 'react'

export async function generateMetadata({ params }) {
    const { userId } = await params;

    return {
        title: `User-${userId}`,
        description: `Profile page of the user ${userId}`,
    }
}

const UserIdPage = async ({ params }) => {
    const { userId } = await params;
    return (
        <div>{userId}</div>
    )
}

export default UserIdPage