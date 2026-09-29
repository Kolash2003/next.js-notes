"use client";
import { updateStatus } from '@/actions/contact';
import Form from 'next/form';
import React from 'react'

export const StatusButton = ({ id }) => {
    const action = updateStatus.bind(null, id);
    return (
        <Form action={action}>
            <button className="bg-green-500 text-white py-1 mt-2">
                Mark Resolved
            </button>
        </Form>
    )
}

// Thumb rule, when we want to pass extra data along with form data then use bind()
// bind will create a new function