export default function CounterDisplay({ clicks }) {
  const isEven = clicks % 2 === 0;

  return (
    <div className="mb-3">
      <p className="mb-1">
        Button clicks:{" "}
        <span className="font-mono text-sky-300">{clicks}</span>
      </p>
      <p className="text-sm text-slate-300">
        This number is {isEven ? "even" : "odd"}.
      </p>
    </div>
  );
}