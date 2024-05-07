import React from "react";
import { Profile } from "./Profile";
import { EmploymentHistory, EmploymentHistoryData } from "./EmploymentHistory";
import { Education, EducationData } from "./Education";
import Skills from "./Skills";

type Resume = {
  profile: Profile;
  skills: string[];
  employmentHistory: EmploymentHistoryData;
  education: EducationData;
};

function Resume(data: Resume) {
  const { education, profile, employmentHistory, skills } = data;
  return (
    <div className="resume">
      <Profile {...profile} />
      <Skills texts={skills} />
      <EmploymentHistory {...employmentHistory} />
      <Education {...education} />
    </div>
  );
}

export { Resume };
