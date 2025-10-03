import image from "../assets/DesktopPhoto.jpg"
import imageMobile from "../assets/MobilePhoto.jpg"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router"

export default function Home() {
  return (
    <div>
      <div className="h-[100vh]">
        <div className="w-full flex items-center min-h-full p-0">
          <div className="hidden lg:block bg-purpleLight fixed w-full h-[200%] -left-[83%] -top-[50%] -rotate-[15deg]"></div>
          <div className="flex flex-wrap items-center w-full h-screen md:mx-auto">
            <img src={image} className="img hidden lg:block lg:fixed lg:w-1/3"/>
            <div className="home-details w-full lg:w-8/12 lg:ml-auto sm:text-center lg:text-left p-0">
              <div className="max-w-[550px] mx-auto">
                <img src={imageMobile} className="block lg:hidden mx-auto mb-6 rounded-full w-68 h-68 border border-gray dark:border-borderDark"/>
                <h1 style={{ fontWeight: 700 }} className="relative pl-18 text-purpleLight uppercase font-poppins before:content-[''] before:absolute before:left-0 before:top-[29px] before:h-[4px] before:w-[40px] before:rounded-[10px] before:bg-purpleLight max-[1200px]:pl-0 max-[1200px]:before:hidden">
                  I'm Asma ZAHANI. <span className="pt-1 block text-gray dark:text-white">web developer</span>
                </h1>
                <p className="mt-[15px] mb-[28px] text-[16px] leading-[35px] max-lg:mt-[10px] max-lg:mb-[23px] max-lg:text-[15px] max-lg:leading-[30px] max-md:text-[14px] max-md:leading-[28px] font-open-sans-font">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                <Link to={'/about'} className="button relative inline-flex items-center group">
                  <span className="relative z-[2] transition-all duration-300 ease-out text-gray dark:text-white group-hover:text-white">more about me</span>
                  <span className="absolute right-[-1px] top-[-1px] bottom-0 w-[55px] h-[55px] flex items-center justify-center text-[19px] text-white bg-purpleLight rounded-full"><FaArrowRight/></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}