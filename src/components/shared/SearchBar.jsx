import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search opportunities..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-10 pr-4 text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;