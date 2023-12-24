import MarginWrapper from "@/common/MarginWrapper";
import React from "react";

const ProjectsScreen = () => {
  return (
    <>
      <MarginWrapper>
        <div
          className="project-wrapper bg-blue-200 py-10  h-[100vh]"
          id="projects"
        >
          <p className="text-white text-center min-[900px]:text-[50px] text-[30px] uppercase font-medium">
            Our Projects
          </p>

          <div className="projects-container">
            <div className="project-card bg-red-700 w-10 h-5transition-all duration-1000 ease-in-out hover:w-[50%] hover:h-[40px] ">
              <p>project one</p>
            </div>
          </div>
        </div>
      </MarginWrapper>
    </>
  );
};

export default ProjectsScreen;
