"use server";
import { connectDB } from "@/lib/db";
import Todo from "@/models/todo";
import { todoActionSchema } from "@/schemas/todo-schema";
import { json } from "zod";

export async function addTodo(data) {
    await connectDB();
    const validatedFields = todoActionSchema.safeParse(data);

    if (!validatedFields.success) {
        return { errors: 'Invalid data format' }
    }

    try {
        const newTodo = await Todo.create(validatedFields.data);
        return JSON.parse(JSON.stringify(newTodo));
    } catch (error) {
        return { errors: 'Failed to create todo' };
    }
}

export async function getTodo(data) {
    await connectDB();

    try {
        const data = await Todo.find({}).sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.error("Error fetching todos:", error);
        return {
            errors: 'Failed to fetch todo'
        }
    }
}

export async function markTodoCompleted(data) {
    await connectDB();
    const { id, isCompleted } = data;

    try {
        const updatedData = await Todo.findByIdAndUpdate(id, {
            isCompleted: isCompleted
        }, { new: true });
        return JSON.parse(JSON.stringify(updatedData));
    } catch (error) {
        console.error("Error updating the todo:", error);
        return {
            errors: 'Failed to update todo'
        }
    }

}

export async function deleteTodo(data) {
    await connectDB();
    const { id } = data;
    try {
        const deleteData = await Todo.findByIdAndDelete(id);
        return JSON.parse(JSON.stringify(deleteData));
    } catch (error) {
        console.error("Error deleting the todo:", error);
        return {
            errors: 'Failed to delete todo'
        }
    }
}