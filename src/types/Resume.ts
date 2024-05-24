import type { Education } from "./Education";
import type { EmploymentHistory } from "./EmploymentHistory";
import type { Profile } from "./Profile";

export type Resume = {
  profile: Profile;
  skills: string[];
  employmentHistory: EmploymentHistory;
  education: Education;
};
