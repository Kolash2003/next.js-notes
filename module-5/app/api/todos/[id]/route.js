export async function POST(request, { params }) {
    const data = await request.json();

    const updatedTodo = { id: params.id, ...data }
    // assuming that we are updating the data into the database

    return Response.json({
        success: true,
        message: "Todo updated successfully",
        data: updatedTodo
    })
}

export async function PATCH(request, { params }) {
    const data = await request.json();

    const updatedTodo = { id: params.id, ...data }
    // assuming that we are updating the data into the database

    return Response.json({
        success: true,
        message: "Todo updated successfully",
        data: updatedTodo
    })
}

export async function DELETE(request, { params }) {
    const data = await request.json();

    const id = params.id;
    // assuming that we are deleting the data into the database

    return Response.json({
        success: true,
        message: "Todo deleted successfully",
        data: id
    })
}
