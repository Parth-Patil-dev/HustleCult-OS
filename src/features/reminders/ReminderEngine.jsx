import { useEffect } from "react";
import { useOpportunities } from "@/context/OpportunityContext";
import { useEvents } from "@/context/EventContext";
import { useNotifications } from "@/context/NotificationContext";


function ReminderEngine() {

  const {
    opportunities,
  } = useOpportunities();


  const {
    events,
  } = useEvents();


  const {
    addNotification,
    notifications,
  } = useNotifications();



  useEffect(() => {

    const today = new Date();


    opportunities.forEach((opp) => {

  if (!opp.deadline) return;


      const deadline = new Date(
        opp.deadline
      );


      const diff =
        Math.ceil(
          (deadline - today) /
          (1000 * 60 * 60 * 24)
        );


      if (diff === 1) {

        const exists =
          notifications.some(
            (n) =>
              n.message.includes(
                opp.title
              ) &&
              n.type === "deadline"
          );


        if (!exists) {

          addNotification({
            title:
              "Deadline Tomorrow ⚠️",

            message:
              `${opp.title} deadline is tomorrow`,

            type:
              "deadline",
          });

        }

      }

    });



  }, [
  opportunities,
  notifications,
  addNotification,
]);



  return null;
}


export default ReminderEngine;