export function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-yellow-500 text-sm">
      {Array.from({ length: full }).map((_, i) => (
        <span key={i}>★</span>
      ))}
      {half && <span>★</span>}
      <span className="ml-2 text-gray-400 text-xs">{value.toFixed(1)}</span>
    </div>
  );
}
