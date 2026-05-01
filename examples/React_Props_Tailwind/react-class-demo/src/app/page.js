"use client";

import { useState, useEffect } from "react";
import CounterDisplay from "./counterDisplay";
import CounterControls from "./counterControls";
import NameInput from "./NameInput";
import { AppProvider } from "./AppStateContext";
import NotesSection from "./NotesSection";

function HomePageContent() {
  const teacherName = "Dude in Jacket";
  const studentCount = 10;
  const hasManyStudents = studentCount > 5;

  const [clicks, setClicks] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  // Effect: update document title with click count
  useEffect(() => {
    document.title = `Clicks: ${clicks}`;
  }, [clicks]);

  // Effect: fetch simple message from Express
  useEffect(() => {
    async function loadMessage() {
      try {
        const res = await fetch("http://localhost:4000/api/message");
        const data = await res.json();
        setServerMessage(data.message);
      } catch (error) {
        console.error("Error fetching from Express API", error);
        setServerMessage("Could not reach Express API");
      }
    }

    loadMessage();
  }, []);

  function handleIncrement() {
    setClicks(clicks + 1);
  }

  function handleReset() {
    setClicks(0);
  }

  function handleStudentNameChange(newName) {
    setStudentName(newName);
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

        {/* Counter section */}
        <div className="mt-6 border-t border-slate-700 pt-4 space-y-3">
          <CounterDisplay clicks={clicks} />
          <CounterControls
            onIncrement={handleIncrement}
            onReset={handleReset}
          />
        </div>

        {/* Name input section */}
        <NameInput
          studentName={studentName}
          onStudentNameChange={handleStudentNameChange}
        />

        {/* Message from Express server */}
        <div className="mt-6 border-t border-slate-700 pt-4">
          <p className="text-sm text-slate-300">
            Message from Express:{" "}
            <span className="font-semibold text-emerald-300">
              {serverMessage || "Loading..."}
            </span>
          </p>
        </div>

        {/* Notes section powered by Context + Reducer + MongoDB */}
        <NotesSection />
      </div>
    </main>
  );
}

export default function HomePage() {
  return (
    <AppProvider>
      <HomePageContent />
    </AppProvider>
  );
}
