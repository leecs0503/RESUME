import resumeData from '../resume-kr.yaml';

import "./globals.css";
import Award from "./components/award";
import BasicInfo from "./components/basicInfo";
import Education from "./components/education";
import Experience from "./components/experience";
import Project from "./components/project";
import Skill from "./components/skill";

export default function Page() {
  return (
  <div className="max-w-screen-lg mx-auto p-4 md:p-8">
    <div className="mb-4">
      <BasicInfo
        name={resumeData.basicInfo.name}
        email={resumeData.basicInfo.email}
        sites={resumeData.basicInfo.sites}
        aboutMe={resumeData.basicInfo.aboutMe}
      />
    </div>
    <div className="mb-4">
      <Skill skills={resumeData.skills}/>
    </div>
    <div className="mb-4">
      <Experience experiences={resumeData.experience}/>
    </div>
    <div className="mb-4">
      <Project projects={resumeData.projects}/>
    </div>
    <div className="mb-4">
      <Award awards={resumeData.awards}/>
    </div>
    <div className="mb-4">
      <Education
        school={resumeData.education.school}
        degree={resumeData.education.degree}
        fieldOfStudy={resumeData.education.fieldOfStudy}
        startDate={resumeData.education.startDate}
        endDate={resumeData.education.endDate}
      />
    </div>
  </div>
  );
}
