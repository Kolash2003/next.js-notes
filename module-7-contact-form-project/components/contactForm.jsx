"use client";
import Form from "next/form";

const ContactForm = ({ action }) => {
    return (
        <Form action={action} className="space-y-4 flex flex-col">
            <input
                name="name"
                placeholder="Name"
                className="border p-2"

            />
            <input
                name="email"
                placeholder="Email"
                className="border p-2"

            />
            <textarea
                name="message"
                placeholder="Message"
                className="border p-2"

            />
            <button type="submit" className="bg-green-500 text-white px-4 py-12">
                Send Message
            </button>
        </Form>
    )
}

export default ContactForm