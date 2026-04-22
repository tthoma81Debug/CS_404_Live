"use client"; // Make this a Client Component so we can later use hooks

export default function HomePage() {
  const teacherName = "Dude in Jacket";
  const studentCount = 10;

  // Very simple JavaScript logic inside a component:
  const hasManyStudents = studentCount > 5;

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
      </div>
    </main>
  );
}