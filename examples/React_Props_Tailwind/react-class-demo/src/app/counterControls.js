export default function CounterControls({ onIncrement, onReset }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onIncrement}
        className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold"
      >
        +1
      </button>

      <button
        onClick={onReset}
        className="px-3 py-2 rounded-md border border-slate-500 text-slate-200 text-sm"
      >
        Reset
      </button>
    </div>
  );
}