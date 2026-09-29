import React from 'react'
import Form from 'next/form'
import { submitUser } from '@/actions/actions'

const FormsPage = () => {
    return (
        <div>
            <h1>Create user</h1>
            <Form action={submitUser}>
                <input type="text" name="username" placeholder="Enter username" />

                <input type="email" name="email" placeholder="Enter email" />

                <button type="submit">Create user</button>
            </Form>

            <h1>Search Form</h1>

            <Form action={"/search"}>
                <input type="text" name="query" placeholder="Enter search query" />

                <button type="submit">Search</button>
            </Form>
        </div>
    )
}

export default FormsPage