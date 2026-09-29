"use server";
import { prisma } from "@/lib/db";

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    if (!title) return;

    const data = await prisma.post.create({
        data: {
            title,
            content
        }
    });

    return data;
}

export async function getAllPosts() {
    const allPosts = await prisma.post.findMany({
        orderBy: {
            updateAt: "desc"
        }
    });
    return allPosts;
}

export async function getPostById(id: string) {
    const postById = await prisma.post.findUnique({
        where: {
            id
        }
    });

    return postById;
}

export async function deletePostById(id: string) {
    const deletedPost = await prisma.post.delete({
        where: {
            id
        }
    });

    return deletedPost;
}

export async function updatePostById(FormData: FormData, id: string) {
    const title = FormData.get("title") as string;
    const content = FormData.get("content") as string;

    if (!title) return;

    const data = await prisma.post.update({
        where: {
            id
        },
        data: {
            title,
            content
        }
    });

    return data;
}