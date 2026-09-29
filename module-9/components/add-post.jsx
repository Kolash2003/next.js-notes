"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function addPost(newPost) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res.json();
}

export default function AddPost() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
            alert("Post Added")
        },
        onError: () => {
            alert("Something went wrong")
        }

    })

    return (
        <button
            onClick={() => mutation.mutate({
                title: "New Post by suraj",
                body: "demo",
                userId: 1
            })}
            className="px-4 py-2 bg-amber-400 text-white rounded-md"
        >
            Add Post
        </button>
    )
}