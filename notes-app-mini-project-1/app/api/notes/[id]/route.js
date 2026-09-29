import { connectDB } from "@/lib/db";
import { Note } from "@/lib/models/note";

export async function DELETE(req, { params }) {
    await connectDB();
    const { id } = await params;

    await Note.findByIdAndDelete(id);

    return Response.json({
        success: true,
        message: "Note deleted successfully",
        statusCode: 200
    })

}

export async function PUT(req, { params }) {
    await connectDB();
    const { id } = await params;
    const { title, content } = await req.json();

    await Note.findByIdAndUpdate(id, {
        title: title,
        content: content
    });

    return Response.json({
        success: true,
        message: "Note updated successfully",
        statusCode: 200
    })
}