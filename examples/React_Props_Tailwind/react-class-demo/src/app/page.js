"use client";

import { useState } from "react";
import CounterDisplay from "./counterDisplay";
import CounterControls from "./counterControls";

export default function HomePage() {
  const teacherName = "Dude in Jacket";
  const studentCount = 10;
  const hasManyStudents = studentCount > 5;

  const [clicks, setClicks] = useState(0);

  function handleIncrement() {
    setClicks(clicks + 1);
  }

  function handleReset() {
    setClicks(0);
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

        {/* Children using props */}
        <div className="mt-6 border-t border-slate-700 pt-4 space-y-3">
          {/* Props down: clicks */}
          <CounterDisplay clicks={clicks} />

          {/* Props down: callback functions */}
          <CounterControls
            onIncrement={handleIncrement}
            onReset={handleReset}
          />
        </div>
      </div>
    </main>
  );
}