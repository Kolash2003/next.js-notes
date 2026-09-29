"use server";


import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface userData {
    name: string;
    email: string;
    password: string;
}

export async function createUser(data: userData) {
    await db.insert(users).values({
        name: data.name,
        email: data.email,
        password: data.password
    });
}


export async function getUsers() {
    return await db.select().from(users);

}

export async function getUserById(id: number) {
    return await db.select().from(users).where(eq(users.id, id))
}

export async function updateUserById(id: number, data: Partial<userData>) {
    await db.update(users).set({
        name: data.name,
        email: data.email,
        password: data.password,
        updatedAt: new Date()
    }).where(eq(users.id, id));
}


export async function deleteUserById(id: number) {
    await db.delete(users).where(eq(users.id, id));
}