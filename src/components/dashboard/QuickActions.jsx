import {
  Plus,
  FolderKanban,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

function QuickActions() {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-white">
        Quick Actions
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Jump into your most common tasks.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <Button>
          <Plus size={18} />
          <span className="ml-2">
            Opportunity
          </span>
        </Button>

        <Button variant="secondary">
          <FolderKanban size={18} />
          <span className="ml-2">
            Workspace
          </span>
        </Button>

        <Button variant="outline">
          <Sparkles size={18} />
          <span className="ml-2">
            Hustle AI
          </span>
        </Button>
      </div>
    </Card>
  );
}

export default QuickActions;