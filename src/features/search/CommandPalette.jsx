
import { useOpportunities } from "@/context/OpportunityContext";
import { useNavigate } from "react-router-dom";
import { buildSearchIndex } from "@/utils/searchIndex";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Zap,
  FolderKanban,
  CalendarDays,
  BarChart3,
} from "lucide-react";

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { opportunities } = useOpportunities();
  const navigate = useNavigate();
  const inputRef = useRef(null);
const [query, setQuery] = useState("");
const [selectedIndex, setSelectedIndex] = useState(0);
const searchItems = useMemo(
  () => buildSearchIndex(opportunities),
  [opportunities]
);

const filtered = searchItems.filter((item) => {
  const q = query.toLowerCase();

  return (
    item.title?.toLowerCase().includes(q) ||
    item.subtitle?.toLowerCase().includes(q) ||
    item.type?.toLowerCase().includes(q)
  );
});
function closePalette() {
  setOpen(false);
  setQuery("");
  setSelectedIndex(0);
}
  useEffect(() => {
    function handleKeyDown(e) {
      if (!open && !(e.ctrlKey && e.key === "k")) {
  return;
}
        if (e.key === "ArrowDown") {
  setSelectedIndex((prev) =>
    Math.min(
      prev + 1,
      filtered.length - 1
    )
  );
}


if (e.key === "ArrowUp") {
  setSelectedIndex((prev) =>
    Math.max(
      prev - 1,
      0
    )
  );
}


if (e.key === "Enter" && filtered[selectedIndex]) {

  const item = filtered[selectedIndex];

if (item.route) {
  navigate(item.route);
}

closePalette();

}
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        closePalette();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [filtered, selectedIndex, navigate]);
  useEffect(() => {
  if (open) {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }
}, [open]);

  if (!open) return null;
function getIcon(type, title) {
  if (type === "Action") {
    if (title.includes("Dashboard")) return <Zap size={18} />;
    if (title.includes("Opportunities")) return <FolderKanban size={18} />;
    if (title.includes("Calendar")) return <CalendarDays size={18} />;
    if (title.includes("Analytics")) return <BarChart3 size={18} />;

    return <Zap size={18} />;
  }

  return null;
}
  return (
    <div
  className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-24 backdrop-blur-sm"
  onClick={closePalette}
>

      <div
  onClick={(e) => e.stopPropagation()}
  className="w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"
>

        <input
  ref={inputRef}
  value={query}
  onChange={(e) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  }}
  placeholder="Search opportunities, tasks, notes or actions..."
  className="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-white outline-none"
/>
<div className="mt-2 flex justify-between text-xs text-slate-500">
  <span>↑↓ Navigate • Enter Open • Esc Close</span>

  <span className="rounded border border-slate-700 px-2 py-1">
    Ctrl + K
  </span>
</div>
<div className="mt-5 max-h-[55vh] space-y-2 overflow-y-auto pr-2">

  {filtered.map((item, index) => (

    <div
  key={item.id}
  onClick={() => {
  if (item.route) {
    navigate(item.route);
  }

  closePalette();
}}
  className={`cursor-pointer rounded-lg p-4 transition ${
 selectedIndex === index
  ? "border border-blue-500 bg-blue-500/15"
    : "bg-slate-800 hover:bg-slate-700"
}`}
>

      <div className="flex items-start gap-3">

  <div className="mt-1 text-blue-400">
    
    {getIcon(item.type, item.title)}
  </div>

  <div className="flex-1">

    <h3 className="font-semibold text-white">
      {item.title}
    </h3>

    <div className="mt-1 flex items-center justify-between text-sm">
      <span className="text-slate-400">
        {item.subtitle}
      </span>

      <span className="rounded bg-slate-700 px-2 py-0.5 text-xs text-slate-300">
        {item.type}
      </span>
    </div>

  </div>

</div>

    </div>

  ))}
  {filtered.length === 0 && (
  <div className="rounded-lg border border-dashed border-slate-700 py-10 text-center">
    <p className="text-slate-400">
      No results found
    </p>

    <p className="mt-2 text-sm text-slate-500">
      Try another search term.
    </p>
  </div>
)}

</div>

      </div>

    </div>
  );
}

export default CommandPalette;