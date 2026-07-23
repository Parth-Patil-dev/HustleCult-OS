import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNotifications } from "@/context/NotificationContext";
const OpportunityContext = createContext();

export function OpportunityProvider({ children }) {
const { addNotification } = useNotifications();
  const [opportunities, setOpportunities] = useState(() => {
    const saved = localStorage.getItem("opportunities");

    return saved ? JSON.parse(saved) : [];
  });
  const [editingOpportunity, setEditingOpportunity] = useState(null);


  useEffect(() => {
    localStorage.setItem(
      "opportunities",
      JSON.stringify(opportunities)
    );
  }, [opportunities]);


  function addOpportunity(opportunity) {
    console.log("addOpportunity called", opportunity);

    const newOpportunity = {
  id: Date.now(),
  createdAt: new Date().toISOString(),
  notes: [],
  attachments: [],
  comments: [],
  tasks: [],
  priority: "Medium",
activity: [
    {
 id: crypto.randomUUID(),
 text,
 completed:false,
 assignedTo:null,
 dueDate:null,
 priority:"Medium",
 createdAt:new Date().toISOString(),
},
  ],

  ...opportunity,
};


    setOpportunities((prev) => [
      ...prev,
      newOpportunity
    ]);


    toast.success("Opportunity added 🚀");
    addNotification({
  title: "New Opportunity Added",
  message: `${newOpportunity.title} was added`,
  type: "opportunity",
});
  }



  function editOpportunity(id, updatedData) {

    setOpportunities((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
  ...item,
  ...updatedData,

  activity: [
    ...(item.activity || []),

    {
      id: crypto.randomUUID(),
      type: "edited",
      message: "Opportunity updated",
      time: new Date().toISOString(),
    },
  ],
}
          : item
      )
    );


    toast.success("Opportunity updated");
  }



  function deleteOpportunity(id) {

    setOpportunities((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );


    toast.success("Opportunity removed");
  }



  function updateStage(id, stage) {

    setOpportunities((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
  ...item,
  stage,

  activity: [
    ...(item.activity || []),

    {
      id: crypto.randomUUID(),
      type: "stage",
      message: `Moved to ${stage}`,
      time: new Date().toISOString(),
    },
  ],
}
          : item
      )
    );

  }
  function addNote(id, text) {
  setOpportunities((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,

            notes: [
              ...(item.notes || []),
              {
                id: crypto.randomUUID(),
                text,
                createdAt: new Date().toISOString(),
              },
            ],

            activity: [
              ...(item.activity || []),
              {
                id: crypto.randomUUID(),
                type: "note",
                message: "Added a note",
                time: new Date().toISOString(),
              },
            ],
          }
        : item
    )
  );

  toast.success("Note added");
}
function addAttachment(id, file) {
  setOpportunities((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,

            attachments: [
              ...(item.attachments || []),

              {
                id: crypto.randomUUID(),
                name: file.name,
                size: file.size,
                type: file.type,
                uploadedAt: new Date().toISOString(),
              },
            ],

            activity: [
              ...(item.activity || []),

              {
                id: crypto.randomUUID(),
                type: "attachment",
                message: `Uploaded ${file.name}`,
                time: new Date().toISOString(),
              },
            ],
          }
        : item
    )
  );

  toast.success("Attachment added");
}
function deleteAttachment(opportunityId, attachmentId) {
  setOpportunities((prev) =>
    prev.map((item) => {
      if (item.id !== opportunityId) return item;

      const removedAttachment = item.attachments.find(
        (attachment) => attachment.id === attachmentId
      );

      return {
        ...item,

        attachments: item.attachments.filter(
          (attachment) => attachment.id !== attachmentId
        ),

        activity: [
          ...(item.activity || []),

          {
            id: crypto.randomUUID(),
            type: "attachment",
            message: `Deleted ${removedAttachment.name}`,
            time: new Date().toISOString(),
          },
        ],
      };
    })
  );

  toast.success("Attachment removed");
}
function addTask(id, text) {
  setOpportunities((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,

            tasks: [
              ...(item.tasks || []),

              {
                id: crypto.randomUUID(),
                text,
                completed: false,
              },
            ],

            activity: [
              ...(item.activity || []),

              {
                id: crypto.randomUUID(),
                type: "task",
                message: `Added task: ${text}`,
                time: new Date().toISOString(),
              },
            ],
          }
        : item
    )
  );

  toast.success("Task added");
}
function toggleTask(opportunityId, taskId) {
  setOpportunities((prev) =>
    prev.map((item) => {
      if (item.id !== opportunityId) return item;

      const updatedTasks = item.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

      const toggledTask = updatedTasks.find(
        (task) => task.id === taskId
      );
      if (toggledTask.completed) {
  toast.success("Task completed 🎉");
}

      return {
        ...item,

        tasks: updatedTasks,

        activity: [
          ...(item.activity || []),

          {
            id: crypto.randomUUID(),
            type: "task",
            message: toggledTask.completed
              ? `Completed task: ${toggledTask.text}`
              : `Reopened task: ${toggledTask.text}`,
            time: new Date().toISOString(),
          },
        ],
      };
    })
  );
}
function deleteTask(opportunityId, taskId) {
  setOpportunities((prev) =>
    prev.map((item) => {
      if (item.id !== opportunityId) return item;

      const removedTask = item.tasks.find(
        (task) => task.id === taskId
      );

      return {
        ...item,

        tasks: item.tasks.filter(
          (task) => task.id !== taskId
        ),

        activity: [
          ...(item.activity || []),

          {
            id: crypto.randomUUID(),
            type: "task",
            message: `Deleted task: ${removedTask.text}`,
            time: new Date().toISOString(),
          },
        ],
      };
    })
  );

  toast.success("Task deleted");
}
function addComment(opportunityId, comment) {
  setOpportunities((prev) =>
    prev.map((item) => {
      if (item.id !== opportunityId) return item;

      const newComment = {
        id: crypto.randomUUID(),
        author: comment.author,
        text: comment.text,
        time: new Date().toISOString(),
      };

      return {
        ...item,

        comments: [
          ...(item.comments || []),
          newComment,
        ],

        activity: [
          ...(item.activity || []),

          {
            id: crypto.randomUUID(),
            type: "comment",
            message: `${comment.author} commented`,
            time: new Date().toISOString(),
          },
        ],
      };
    })
  );

  toast.success("Comment added");
}



  return (
    <OpportunityContext.Provider
      value={{
  opportunities,
  addOpportunity,
  editOpportunity,
  deleteOpportunity,
  updateStage,
  addNote,
  editingOpportunity,
  addAttachment,
  deleteAttachment,
  addTask,
  toggleTask,
  addComment,
  deleteTask,
  setEditingOpportunity,
}}
    >
      {children}
    </OpportunityContext.Provider>
  );
}



export function useOpportunities() {

  const context = useContext(
    OpportunityContext
  );


  if (!context) {
    throw new Error(
      "useOpportunities must be used inside OpportunityProvider"
    );
  }


  return context;
}