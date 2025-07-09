import { FaBriefcase, FaDownload, FaGraduationCap } from "react-icons/fa";
import {personalInfosLeft, personalInfosRight, counters, skills, experiences, diplomes} from "./data";

export default function About() {
  return (
    <div>
      <div className="title-section text-left text-sm-center">
        <h2>ABOUT <span className="text-purpleLight">ME</span>
        </h2>
        <span className="title-bg">Resume</span>
      </div>

      <div className="about">
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 col-xl-6">
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                  </div>
                  <div className="col-6">
                    <ul className="about-list list-unstyled open-sans-font">
                      {personalInfosLeft.map(({ label, value }, index) => (
                        <li key={index}>
                          <span className="title">{label} :{" "}</span>
                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="about-list list-unstyled open-sans-font">
                      {personalInfosRight.map(({ label, value }, index) => (
                        <li key={index}>
                          <span className="title">{label} :{" "}</span>
                          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="/CV.pdf" download="Asma's CV.pdf" className="button relative inline-flex items-center group">
                    <span className="relative z-[2] transition-all duration-300 ease-out text-gray dark:text-white group-hover:text-white">Download CV</span>
                    <span className="absolute right-[-1px] top-[-1px] bottom-0 w-[55px] h-[55px] flex items-center justify-center text-[19px] text-white bg-purpleLight rounded-full"><FaDownload/></span>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                <div className="row">
                  {counters.map(({ number, label, sublabel }, index) => (
                    <div className="col-6" key={index}>
                      <div className="box-stats with-margin">
                        <h3 className="font-op position-relative text-purpleLight">{number}</h3>
                        <p className="open-sans-font m-0 position-relative text-uppercase">
                          {label} <span className="d-block">{sublabel}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="separator" />
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills</h3>
              </div>
              {skills.map(({ nom, pourcentage }, index) => (
                <div key={index} className="col-6 col-md-3 mb-3 mb-sm-5">
                  <div className={`c100 p${pourcentage}`}>
                    <span>{pourcentage}%</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                  <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">{nom}</h6>
                </div>
              ))}
            </div>
            <hr className="separator mt-1" />
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&</span> Education </h3>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul>
                    {experiences.map(({ annee, poste, entreprise, description }, index) => (
                      <li key={index}>
                        <div className="flex items-center justify-center absolute left-0 right-0 w-10 h-10 bg-purpleLight leading-[40px] z-[1] rounded-full">
                          <FaBriefcase className="text-xl text-white" />
                        </div>
                        <span className="time open-sans-font text-uppercase">{annee}</span>
                        <h5 className="font-poppins text-uppercase">{poste}<span className="place open-sans-font">{entreprise}</span>
                        </h5>
                        <p className="open-sans-font" dangerouslySetInnerHTML={{ __html: description }}></p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <ul className="flex flex-col">
                    {diplomes.map(({ annee, diplome, etablissement, description }, index) => (
                      <li key={index}>
                        <div className="flex items-center justify-center absolute left-0 right-0 w-10 h-10 bg-purpleLight leading-[40px] z-[1] rounded-full">
                          <FaGraduationCap className="text-xl text-white" />
                        </div>
                        <span className="time open-sans-font text-uppercase">{annee}</span>
                        <h5 className="font-poppins text-uppercase">{diplome}<span className="place open-sans-font">{etablissement}</span>
                        </h5>
                        <p className="open-sans-font">{description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}