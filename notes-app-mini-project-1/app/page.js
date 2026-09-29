'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchNotes = async () => {
    try {
      const res = await fetch('/api/notes');
      const data = await res.json();
      console.log(data);
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  const handleEditClick = (note) => {
    setEditingId(note._id || note.id);
    setTitle(note.title);
    setContent(note.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteNote = async (id) => {
    if (!confirm("Are you sure you want to delete this note?")) return;

    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchNotes();
      } else {
        alert("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      alert("Failed to delete note");
    }
  };

  useEffect(() => {
    const initFetch = async () => {
      await fetchNotes();
    };
    initFetch();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please enter both title and content");
      return;
    }

    try {
      setIsLoading(true);

      if (editingId) {
        const res = await fetch(`/api/notes/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        });

        if (res.ok) {
          fetchNotes();
          alert("Note updated successfully");
          setTitle("");
          setContent("");
          setEditingId(null);
        } else {
          alert("Failed to update note");
        }
      } else {
        const res = await fetch('/api/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        });

        if (res.ok) {
          fetchNotes();
          alert("Note added successfully");
          setTitle("");
          setContent("");
        } else {
          alert("Failed to add note");
        }
      }
    } catch (error) {
      alert(editingId ? "Failed to update note" : "Failed to add note");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8 text-gray-100 font-sans selection:bg-yellow-500/30">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 text-center mt-10">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-semibold tracking-wide">
            Note App v1.0
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 mb-4 tracking-tight drop-shadow-lg">
            My Notes
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Create, read, update, and delete notes in a beautiful workspace.
          </p>
        </header>

        {/* Form Section */}
        <div className="relative group">
          {/* Subtle glowing effect behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative bg-gray-900 rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-800">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">

              {/* Title Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium text-gray-400 ml-1">
                  Note Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a descriptive title..."
                  className="w-full px-5 py-4 border border-gray-800 bg-gray-950/50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 placeholder:text-gray-600 transition-all text-lg shadow-inner"
                />
              </div>

              {/* Content Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-sm font-medium text-gray-400 ml-1">
                  Note Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your brilliant ideas here..."
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-800 bg-gray-950/50 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500/50 placeholder:text-gray-600 transition-all text-lg resize-y shadow-inner leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex flex-col md:flex-row justify-end gap-3 w-full">
                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setTitle("");
                      setContent("");
                    }}
                    className="w-full md:w-auto px-6 py-4 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto md:self-end bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-950 font-bold py-4 px-8 rounded-xl hover:from-yellow-400 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] text-lg"
                >
                  {editingId ? "Update Note" : "Add Note"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Notes List Section */}
        <div className="mt-16 space-y-6">
          <h2 className="text-3xl font-bold text-gray-100 border-b border-gray-800 pb-4 mb-8">
            Your Notes
          </h2>

          {notes.length === 0 ? (
            <div className="text-center py-16 bg-gray-900/30 rounded-3xl border border-gray-800/50 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4 text-yellow-500/50 shadow-inner">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-gray-400 text-lg">No notes yet. Start writing your brilliant ideas above!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
              {notes.map((note) => (
                <div
                  key={note._id || note.id}
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/40 transition-all group hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)] hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></div>

                  <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {note.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed whitespace-pre-wrap flex-grow">
                    {note.content}
                  </p>

                  <div className="mt-6 pt-5 border-t border-gray-800/50 flex justify-between items-center text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {note.createdAt ? new Date(note.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Just now'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNote(note._id || note.id);
                      }}
                      className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      title="Delete note"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(note);
                      }}
                      className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                      title="Edit note"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
