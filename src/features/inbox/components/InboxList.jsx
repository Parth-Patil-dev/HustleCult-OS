import InboxCard from "./InboxCard";
import { inboxItems } from "@/data/inbox";

function InboxList() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {inboxItems.map((item) => (
        <InboxCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default InboxList;