import { Month } from "./Month";

type Duration = {
  start: { monthIndex: Month; year: number };
  end?: { monthIndex: Month; year: number };
};

export { Duration };
