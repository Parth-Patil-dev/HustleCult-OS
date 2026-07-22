import Card from "@/components/ui/Card";
import { History } from "lucide-react";


function TimelineCard({ activity = [] }) {
  return (
    <Card>

      <div className="mb-5 flex items-center gap-2">
        <History
          size={20}
          className="text-blue-400"
        />

        <h2 className="text-lg font-semibold text-white">
          Activity Timeline
        </h2>
      </div>

      {activity.length === 0 ? (
        <p className="text-slate-400">
          No activity yet.
        </p>
      ) : (
        <div className="space-y-4">
          {[...activity]
            .reverse()
            .map((item) => (
              <div
                key={item.id}
                className="border-l-2 border-blue-500 pl-4"
              >
                <p className="font-medium text-white">
                  {item.message}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {new Date(item.time).toLocaleString()}
                </p>
              </div>
            ))}
        </div>
      )}

    </Card>
  );
}

export default TimelineCard;