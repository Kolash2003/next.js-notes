export async function POST(request) {
    // 1. Parse the json body from the client
    const body = await request.json();

    const { title, completed } = body;

    // You can do database logic here

    return Response.json({
        success: true,
        message: "Todo created successfully",
        data: {
            title,
            completed
        }
    })
}
