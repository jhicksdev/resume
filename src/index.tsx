import React from "react";
import { createRoot } from "react-dom/client";
import { Resume } from "./Resume";
import data from "./data.json";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Resume {...data} />);
}
