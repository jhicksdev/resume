import React from "react";
import { createRoot } from "react-dom/client";
import { Resume } from "./Resume";
import data from "./data.json";

data.employmentHistory.employments.sort((a, b) => {
  const ae = a.duration.end;
  const be = b.duration.end;

  if (ae && be) {
    const at = new Date(ae.year, ae.monthIndex).getTime();
    const bt = new Date(be.year, be.monthIndex).getTime();
    return at + bt;
  }

  if (!ae) return -1;
  return 1;
});

data.education.schools.sort((a, b) => {
  const ae = a.duration.end;
  const be = b.duration.end;

  if (ae && be) {
    const at = new Date(ae.year, ae.monthIndex).getTime();
    const bt = new Date(be.year, be.monthIndex).getTime();
    return at + bt;
  }

  if (!ae) return -1;
  return 1;
});

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Resume {...data} />);
}
