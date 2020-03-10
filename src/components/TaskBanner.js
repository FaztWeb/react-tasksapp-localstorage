import React from "react";

export const TaskBanner = props => (
  <h4 className="bg-primary text-white text-center p-4">
    {props.userName}'s Tasks App ({props.taskItems.filter(t => !t.done).length}{" "}
    tasks to do)
  </h4>
);
