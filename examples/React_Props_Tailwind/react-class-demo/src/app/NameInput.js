export default function NameInput({ studentName, onStudentNameChange }) {
  function handleChange(event) {
    // Take the text from the input and pass it up to the parent
    onStudentNameChange(event.target.value);
  }

  return (
    <div className="mt-6 border-t border-slate-700 pt-4 space-y-2">
      <label className="block text-sm font-medium text-slate-200">
            Dude in Jacket:
      </label>

      <input
        type="text"
        value={studentName}
        onChange={handleChange}
        placeholder="Type your name..."
        className="w-full px-3 py-2 rounded-md bg-slate-900 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <p className="text-sm text-slate-300">
        Hello,{" "}
        <span className="font-semibold text-sky-300">
          {studentName || "mystery student"}
        </span>
        !
      </p>
    </div>
  );
}