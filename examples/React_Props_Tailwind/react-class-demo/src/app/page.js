"use client";

import { useState } from "react";

export default function HomePage() {
  const teacherName = "Dude in Jacket";
  const studentCount = 10;
  const hasManyStudents = studentCount > 5;

  // React state:
  const [clicks, setClicks] = useState(0);

  function handleButtonClick() {
    // Update state
    setClicks(clicks + 1);
    // (Optionally, can show setClicks(prev => prev + 1) later.)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to React Class
        </h1>

        <p className="mb-2">
          Teacher: <span className="font-semibold">{teacherName}</span>
        </p>

        <p className="mb-2">
          Students today:{" "}
          <span className="font-semibold text-sky-300">{studentCount}</span>
        </p>

        <p className="mt-4 text-sm text-slate-300">
          {hasManyStudents
            ? "We have a big group today!"
            : "Small, focused group today."}
        </p>

        {/* State + event handler demo */}
        <div className="mt-6 border-t border-slate-700 pt-4">
          <p className="mb-2">
            Button clicks:{" "}
            <span className="font-mono text-sky-300">{clicks}</span>
          </p>

          <button
            onClick={handleButtonClick}
            className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold"
          >
            Click me
          </button>
        </div>
      </div>
    </main>
  );
}