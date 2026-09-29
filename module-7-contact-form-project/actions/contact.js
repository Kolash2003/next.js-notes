"use server";
import { connectDB } from "@/lib/db";
import Contact from "@/lib/models/contact";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createContact(formData) {
    try {
        await connectDB();

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        await Contact.create({
            name,
            email,
            message
        })

        // console.log(`contact added successfully: ${name}, ${email}, ${message}`);

    } catch (error) {
        console.log(error);
        return;
    }

    redirect("/dashboard");
}

export async function updateStatus(id) {
    try {
        await connectDB();
        await Contact.findByIdAndUpdate(id, {
            status: "resolved"
        })
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard");
}