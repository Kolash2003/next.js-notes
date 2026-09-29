"use client";
import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();

}

export default function PostList() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        // queryFn: () => fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
        // either we can do what is being done above or we can define a function and pass the function to the queryFn
        queryFn: fetchPosts
    })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {data.map((post) => {
                return <p key={post.id}>{post.title}</p>
            })}
        </div>
    )
}