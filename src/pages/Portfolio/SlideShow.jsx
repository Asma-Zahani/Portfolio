import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import {projects} from "../data";
import { useState, useEffect } from "react";

export default function SlideShow({ index, onClose }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(projects.find((p) => p.index === index));
  }, [index]);
 
  const handleNext = () => {
    const nextIndex = (project.index + 1) % projects.length;
    setProject(projects.find((p) => p.index === nextIndex));
  };

  const handlePrev = () => {
    const prevIndex = (project.index - 1 + projects.length) % projects.length;
    setProject(projects.find((p) => p.index === prevIndex));
  };

  if (!project) return null;

  return (
    // <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    //   <div className="relative p-4 w-full max-w-md max-h-full">
    //     <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center">
            <h3>{project.nom}</h3>
            <div className="row open-sans-font">
              <div className="col-12 col-sm-6 mb-2">
                <i className="fa fa-file-text-o pr-2"></i>
                <span className="project-label">Project </span>:{" "}
                <span className="ft-wt-600 uppercase">{project.type}</span>
              </div>
              <div className="col-12 col-sm-6 mb-2">
                <i className="fa fa-user-o pr-2"></i>
                <span className="project-label">Client </span>:{" "}
                <span className="ft-wt-600 uppercase">{project.client}</span>
              </div>
              <div className="col-12 col-sm-6 mb-2">
                <i className="fa fa-code pr-2"></i>
                <span className="project-label">Langages </span>:{" "}
                <span className="ft-wt-600 uppercase">{project.langages}</span>
              </div>
              <div className="col-12 col-sm-6 mb-2">
                <i className="fa fa-external-link pr-2"></i>
                <span className="project-label">Preview </span>:{" "}
                <a
                  href={`https://${project.preview}`}
                  className="ft-wt-600 uppercase"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.preview}
                </a>
              </div>
            </div>

            {project.mediaType === "image" && (
              <img src={project.path} alt="Portfolio" className="img-fluid mt-3" />
            )}
            {project.mediaType === "youtube" && (
              <div className="videocontainer mt-3">
                <iframe
                  className="youtube-video"
                  src={project.path}
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <nav className="modal-nav">
              <span onClick={handlePrev} className="icon nav-prev">
                <FaArrowLeft />
              </span>
              <span onClick={handleNext} className="icon nav-next">
                <FaArrowRight />
              </span>
              <span onClick={onClose} className="nav-close">
                <FaX />
              </span>
            </nav>
          </div>
    //     </div>
    //   </div>
    // </div>
  );
}