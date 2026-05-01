"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NoteDetailPage({ params }) {
  const { id } = params; // comes from the [id] segment in the URL

  const [note, setNote] = useState(null);
  const [status, setStatus] = useState("loading"); // "loading" | "error" | "done"

  useEffect(() => {
    async function loadNote() {
      try {
        const res = await fetch(`http://localhost:4000/api/notes/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch note");
        }
        const data = await res.json();
        setNote(data);
        setStatus("done");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }

    loadNote();
  }, [id]);

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p className="text-slate-200">Loading note...</p>
      </main>
    );
  }

  if (status === "error" || !note) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-lg p-6 text-center">
          <p className="text-red-400 mb-4">Could not load this note.</p>
          <Link
            href="/"
            className="text-sm text-sky-300 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Note Detail</h1>

        <p className="mb-3 text-sm">{note.text}</p>

        {note.createdAt && (
          <p className="text-xs text-slate-400 mb-6">
            Created at: {new Date(note.createdAt).toLocaleString()}
          </p>
        )}

        <Link
          href="/"
          className="text-sm text-sky-300 hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}