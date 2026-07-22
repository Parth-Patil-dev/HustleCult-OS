import {
  CalendarDays,
  Building2,
  Trophy,
} from "lucide-react";

import Card from "@/components/ui/Card";

function InfoCards({ opportunity }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">

      <Card>
        <div className="flex items-center gap-3">

          <Trophy className="text-blue-400" />

          <div>
            <p className="text-sm text-slate-400">
              Type
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              {opportunity.type}
            </h3>
          </div>

        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3">

          <Building2 className="text-emerald-400" />

          <div>
            <p className="text-sm text-slate-400">
              Organization
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              {opportunity.organization}
            </h3>
          </div>

        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3">

          <CalendarDays className="text-orange-400" />

          <div>
            <p className="text-sm text-slate-400">
              Deadline
            </p>

            <h3 className="mt-1 text-lg font-semibold text-white">
              {opportunity.deadline}
            </h3>
          </div>

        </div>
      </Card>

    </div>
  );
}

export default InfoCards;