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
          <> 
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
                          <p className="flex items-center gap-3"><FaEye/>Preview: <span className="text-purpleLight underline cursor-pointer">{selectedProject.preview}</span></p>
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
            <div className="p-4 md:p-5 text-center">
              <h3>{selectedProject.nom}</h3>
              <div className="row open-sans-font">
                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-file-text-o pr-2"></i>
                  <span className="project-label">Project </span>:{" "}
                  <span className="ft-wt-600 uppercase">{selectedProject.type}</span>
                </div>
                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-user-o pr-2"></i>
                  <span className="project-label">Client </span>:{" "}
                  <span className="ft-wt-600 uppercase">{selectedProject.client}</span>
                </div>
                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-code pr-2"></i>
                  <span className="project-label">Langages </span>:{" "}
                  <span className="ft-wt-600 uppercase">{selectedProject.langages}</span>
                </div>
                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-external-link pr-2"></i>
                  <span className="project-label">Preview </span>:{" "}
                  <a
                    href={`https://${selectedProject.preview}`}
                    className="ft-wt-600 uppercase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject.preview}
                  </a>
                </div>
              </div>
  
              {selectedProject.mediaType === "image" && (
                <img src={selectedProject.path} alt="Portfolio" className="img-fluid mt-3" />
              )}
              {selectedProject.mediaType === "youtube" && (
                <div className="videocontainer mt-3">
                  <iframe
                    className="youtube-video"
                    src={selectedProject.path}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
  
              <nav className="modal-nav">
                {/* <span onClick={handlePrev} className="icon nav-prev">
                  <FaArrowLeft />
                </span>
                <span onClick={handleNext} className="icon nav-next">
                  <FaArrowRight />
                </span> */}
                <span onClick={() => setSelectedProject(null)} className="nav-close">
                  <FaX />
                </span>
              </nav>
            </div>
          </>
        )}
      </div>
  )
}