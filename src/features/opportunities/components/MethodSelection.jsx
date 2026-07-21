import { Image, Link2, FileText, Keyboard } from "lucide-react";
import Card from "@/components/ui/Card";

const methods = [
  {
    id: "poster",
    title: "Upload Poster",
    description: "Extract information using AI from an event poster.",
    icon: Image,
  },
  {
    id: "website",
    title: "Paste Website",
    description: "Import details from a website URL.",
    icon: Link2,
  },
  {
    id: "pdf",
    title: "Upload PDF",
    description: "Extract information from a brochure or rulebook.",
    icon: FileText,
  },
  {
    id: "manual",
    title: "Manual Entry",
    description: "Create an opportunity from scratch.",
    icon: Keyboard,
  },
];

function MethodSelection({ onSelect }) {
  return (
    <>
      <p className="mb-6 text-slate-400">
        Choose how you would like to import an opportunity.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {methods.map((method) => {
          const Icon = method.icon;

          return (
            <Card
              key={method.id}
              onClick={() => onSelect(method.id)}
              className="cursor-pointer border-slate-800 bg-slate-900 transition-all duration-200 hover:border-blue-500 hover:scale-[1.02]"
            >
              <Icon
                size={32}
                className="mb-4 text-blue-400"
              />

              <h3 className="text-lg font-semibold text-white">
                {method.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {method.description}
              </p>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default MethodSelection;