import { useState } from "react";
import HoverDir from "./HoverDir";
import {projects} from "./data";
import { FaX } from "react-icons/fa6";
import { FaFileAlt, FaUser, FaCode, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div>
        <div className="portfolio">
          <div className="title-section text-left text-sm-center">
            <h2>my <span className="text-purpleLight">portfolio</span>
            </h2>
            <span className="title-bg">works</span>
          </div>
          <div className="main-content text-center">
            <div id="grid-gallery" className="container grid-gallery">
              <div className="grid-wrap">
                <ul className="row grid gridlist">
                  {projects.map((project) => (
                    <li key={project.index} onClick={() => setSelectedProject(project)} data-modal-target="popup-modal" data-modal-toggle="popup-modal">
                      <HoverDir overlay={project.nom}>
                        <figure>
                          <img src={project.path} alt="Portolio Image" />
                        </figure>
                      </HoverDir>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {selectedProject && (
          <div className="fixed inset-0 z-40 bg-black/60"> 
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative w-[90%] max-w-2xl p-6 bg-borderLight dark:bg-borderDark rounded-xl shadow-lg z-50">
                  <div className="popup p-2 text-center">
                    <h3 className="text-purpleLight">{selectedProject.nom}</h3>
                    <div className="text-sm -space-y-1 -mb-2">
                      <div className="grid grid-cols-2 text-start">
                        <p className="flex items-center gap-3"><FaFileAlt/> Project: {selectedProject.type}</p>
                        <p className="flex items-center gap-3"><FaUser/>Client: {selectedProject.client}</p>
                      </div>
                      <div className="grid grid-cols-2 text-start">
                        <p className="flex items-center gap-3"><FaCode/>Langages: {selectedProject.langages}</p>
                        <p className="flex items-center gap-3"><FaEye/>Preview: {selectedProject.preview ? <a href={"https://" + selectedProject.preview} target="_blank" className="cursor-pointer" rel="noopener noreferrer">{selectedProject.preview}</a> : "No Preview" }</p>
                      </div>
                    </div>
                    {selectedProject.mediaType === "image" && (
                      <img src={selectedProject.path} alt="Portfolio" className="max-w-full h-auto rounded-md mt-3" />
                    )}
                  </div>
              </div>
            </div>
            <nav className="z-50">
              <span onClick={() => setSelectedProject(null)} className="absolute right-2 top-4 p-4 cursor-pointer">
                <span className="block w-[45px] h-[4px] bg-[#acacac] rounded origin-center rotate-45"></span>
                <span className="block w-[45px] h-[4px] bg-[#acacac] rounded origin-center -rotate-45 -translate-y-[4px]"></span>
              </span>
            </nav>
          </div>
        )}
      </div>
  )
}