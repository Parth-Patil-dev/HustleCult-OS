import Card from "@/components/ui/Card";
import { FileText } from "lucide-react";

function DescriptionCard({ description }) {
  return (
    <Card className="h-full">
      <div className="mb-4 flex items-center gap-2">
        <FileText className="text-blue-400" size={20} />

        <h2 className="text-lg font-semibold text-white">
          Description
        </h2>
      </div>

      <p className="whitespace-pre-wrap leading-7 text-slate-300">
        {description || "No description added yet."}
      </p>
    </Card>
  );
}

export default DescriptionCard;