"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault(); // this does not reload the entire application

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false
      })
    })

    const data = await res.json();

    if (data.success) {
      setMessage('Todo created:' + data.data.title)
    } else {
      setMessage("Failed to create todo")
    }


  }
  return (
    <div>
      <h2> Create Todo </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {
        message && <p>{message}</p>
      }
    </div>
  );
}
