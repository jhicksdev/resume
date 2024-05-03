import React from "react";
import { Profile, ProfileData } from "./Profile";
import { EmploymentHistory, EmploymentHistoryData } from "./EmploymentHistory";
import { Education, EducationData } from "./Education";
import Skills from "./Skills";

type ResumeData = {
  profileData: ProfileData;
  skillTexts: string[];
  employmentHistoryData: EmploymentHistoryData;
  educationData: EducationData;
};

function Resume(data: ResumeData) {
  const { profileData, skillTexts, employmentHistoryData, educationData } = data;
  return (
    <div className="resume">
      <Profile {...profileData} />
      <Skills texts={skillTexts} />
      <EmploymentHistory {...employmentHistoryData} />
      <Education {...educationData} />
    </div>
  );
}

export { Resume, ResumeData };
