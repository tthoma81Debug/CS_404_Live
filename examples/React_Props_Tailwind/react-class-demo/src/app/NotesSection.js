"use client";

import { useEffect, useState } from "react";
import { useAppState, useAppDispatch } from "./AppStateContext";
import Link from "next/link";

export default function NotesSection() {
  const { notes, loadingNotes, notesError } = useAppState();
  const dispatch = useAppDispatch();

  const [newNoteText, setNewNoteText] = useState("");

  // Load notes from the Express + MongoDB API
  useEffect(() => {
    async function loadNotes() {
      dispatch({ type: "notes/load-start" });

      try {
        const res = await fetch("http://localhost:4000/api/notes");
        if (!res.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await res.json();
        dispatch({ type: "notes/load-success", notes: data });
      } catch (err) {
        console.error(err);
        dispatch({
          type: "notes/load-error",
          error: "Could not load notes from server",
        });
      }
    }

    loadNotes();
  }, [dispatch]);

  async function handleAddNote(event) {
    event.preventDefault();

    const text = newNoteText.trim();
    if (!text) return;

    try {
      const res = await fetch("http://localhost:4000/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        throw new Error("Failed to create note");
      }

      const created = await res.json();
      dispatch({ type: "notes/add", note: created });
      setNewNoteText("");
    } catch (err) {
      console.error(err);
      // In a real app, this might dispatch another error action.
      alert("Could not save note");
    }
  }

  return (
    <section className="mt-8 border-t border-slate-700 pt-4">
      <h2 className="text-xl font-semibold mb-3">Class Notes (MongoDB)</h2>

      {/* New note form */}
      <form onSubmit={handleAddNote} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          placeholder="Write a note and press Enter..."
          className="flex-1 px-3 py-2 rounded-md bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
        />
        <button
          type="submit"
          className="px-3 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-sm font-semibold"
        >
          Add
        </button>
      </form>

      {/* Loading / error states */}
      {loadingNotes && (
        <p className="text-sm text-slate-300 mb-2">Loading notes...</p>
      )}

      {notesError && (
        <p className="text-sm text-red-400 mb-2">{notesError}</p>
      )}

      {/* Notes list */}
      <ul className="space-y-2">
        {notes.map((note) => (
          <li
            key={note._id}
            className="p-3 rounded-md bg-slate-900 border border-slate-700 flex justify-between items-center"
          >
            <div>
              <p className="text-sm">{note.text}</p>
              {note.createdAt && (
                <p className="text-xs text-slate-400 mt-1">
                  {new Date(note.createdAt).toLocaleString()}
                </p>
              )}
            </div>

            {/* Link to a detail page for this note (handled by Next.js router) */}
            <Link
              href={`/note/${note._id}`}
              className="text-xs text-sky-300 hover:underline ml-3"
            >
              View
            </Link>
          </li>
        ))}

        {notes.length === 0 && !loadingNotes && !notesError && (
          <li className="text-sm text-slate-400">
            No notes yet. Add the first one above.
          </li>
        )}
      </ul>
    </section>
  );
}