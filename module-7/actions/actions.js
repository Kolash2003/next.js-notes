"use server"

export async function createTodo(formData) {
    const title = formData.get('title')
    console.log("creating a todo", title)
}

export async function updateTodo(title, description, isCompleted) {
    const newData = {
        title,
        description,
        isCompleted
    }

    // db call

    return {
        success: true,
        message: "updated successfully"
    }
}

export async function submitUser(formData) {
    const userName = formData.get("username")
    const email = formData.get("email")

    console.log("Submitting user data", userName, email);

    // db logic



}
