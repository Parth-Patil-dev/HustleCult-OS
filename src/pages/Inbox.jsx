import PageHeader from "@/components/shared/PageHeader";
import InboxList from "@/features/inbox/components/InboxList";

function Inbox() {
  return (
    <>
      <PageHeader
        title="Inbox"
        description="Review imported opportunities before approving them."
      />

      <InboxList />
    </>
  );
}

export default Inbox;