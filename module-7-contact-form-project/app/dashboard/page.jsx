import { connectDB } from "@/lib/db";
import React from 'react'
import Contact from "@/lib/models/contact"
import { StatusButton } from "@/components/statusButton";

const DashboardPage = async () => {
    await connectDB();

    const contacts = await Contact.find();
    return (
        <div className="p-10">
            <h1 className="text-2xl mb-6">Contact Messages</h1>
            {
                contacts.map((contact) => (
                    <div key={contact._id} className="border p-4 mb-4">
                        <h3 className="text-xl font-semibold">{contact.name}</h3>
                        <p className="text-gray-600">{contact.email}</p>
                        <p className="mt-2">{contact.message}</p>
                        {
                            contact.status === "resolved" ? <p className="text-green-500">resolved</p> : <StatusButton id={contact._id.toString()} />
                        }

                    </div>
                ))
            }
        </div>
    )
}

export default DashboardPage