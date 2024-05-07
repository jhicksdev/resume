import React from "react";
import { createRoot } from "react-dom/client";
import { Resume } from "./Resume";
import data from "./data.json";

data.employmentHistory.employments.sort((a, b) => {
  return new Date(b.duration.end.year, b.duration.end.monthIndex).getTime() - new Date(a.duration.end.year, a.duration.end.monthIndex).getTime();
});

data.education.schools.sort((a, b) => {
  if (a.duration.end && b.duration.end) return new Date(b.duration.end.year, b.duration.end.monthIndex).getTime() - new Date(a.duration.end.year, a.duration.end.monthIndex).getTime();
  if (!a.duration.end) return -1;
  return 1;
});

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Resume {...data} />);
}
