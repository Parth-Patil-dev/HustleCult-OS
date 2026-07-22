import Card from "@/components/ui/Card";
import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

function TeamCard({ members }) {
  return (
    
    <Card>
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-2">
          <Users className="text-blue-400" size={20} />
          <h2 className="text-lg font-semibold text-white">
            Team Members
          </h2>
        </div>

        <Button size="sm">
          <Plus size={16} />
          Add
        </Button>

      </div>

      {members.length === 0 ? (
        <p className="text-slate-400">
          No members assigned yet.
        </p>
      ) : (
        <div className="space-y-3">
          {members.map((member) => (
            <div
              key={member}
              className="flex items-center gap-3 rounded-lg bg-slate-800 p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                {member[0].toUpperCase()}
              </div>

              <p className="text-white">
                {member}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}


export default TeamCard;