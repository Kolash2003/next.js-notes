import React from 'react'

const DynamicPostIdPage = async ({ params }) => {
    const { postId } = await params; // here we have access of both userId and postId
    return (
        <div>DynamicPostIdPage {postId}</div>
    )
}

export default DynamicPostIdPage