import { Link, useLocation } from "react-router-dom";
import { FaEnvelopeOpen, FaFolderOpen, FaHome, FaMoon, FaSun, FaUser } from "react-icons/fa";
import ThemeContext from "../ThemeContext";
import { useContext, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/about", icon: <FaUser />, label: "About" },
    { to: "/portfolio", icon: <FaFolderOpen />, label: "Portfolio" },
    { to: "/contact", icon: <FaEnvelopeOpen />, label: "Contact" },
  ];

  return (
    <>
      <header className="fixed right-[30px] top-1/2 -translate-y-1/2 z-40">
        <ul className="hidden md:flex flex-col gap-5">
          {navLinks.map(({ to, icon, label }, index) => (
            <li key={index} className={`group w-[50px] h-[50px] rounded-full bg-bgLight dark:bg-bgDark hover:bg-purpleLight flex items-center justify-center relative ${location.pathname === to ? "bg-purpleLight dark:bg-purpleLight" : "" }`}>
              <Link to={to} className="w-full h-full flex items-center justify-center relative group">
                <i className={`text-lg text-gray dark:text-white z-10 group-hover:text-white ${location.pathname === to ? "text-white" : ""}`}>{icon}</i>
                <span className="absolute right-full -mr-11 text-sm uppercase text-white bg-purpleLight pl-[20px] pr-11 py-[15px] rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                  {label}
                </span>
              </Link>
            </li>
          ))}
          <li className="group w-[50px] h-[50px] rounded-full bg-bgLight dark:bg-bgDark hover:bg-purpleLight flex items-center justify-center relative">
            <div onClick={toggleTheme} className="w-full h-full flex items-center justify-center cursor-pointer relative group">
              <i className="text-lg text-gray dark:text-white z-10 group-hover:text-white">
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </i>
              <span className="absolute right-full -mr-11 text-sm uppercase text-white bg-purpleLight pl-[20px] pr-11 py-[15px] rounded-full opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                Thème
              </span>
            </div>
          </li>
        </ul>
      </header>
      <div className="fixed md:hidden top-8 right-8 z-50">
        <div onClick={toggleMenu} className="bg-bgLight dark:bg-bgDark text-gray dark:text-white p-3 rounded-md flex flex-col items-center justify-center gap-[5px] cursor-pointer">
          <span className={`w-[23px] h-[2px] bg-gray dark:bg-white rounded origin-center transition-all duration-200 ease-in-out ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
          <span className={`w-[23px] h-[2px] bg-gray dark:bg-white rounded origin-center transition-all duration-200 ease-in-out ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-[23px] h-[2px] bg-gray dark:bg-white rounded origin-center transition-all duration-200 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed md:hidden inset-0 z-40 bg-bgLight dark:bg-bgDark flex flex-col">
          <ul className="flex flex-col items-start pt-8 my-5 mx-8 gap-6">
            {navLinks.map(({ to, icon, label }, index) => (
              <li key={index} className="pb-3 border-b w-full"> 
                <Link to={to} className="text-inherit no-underline">
                  <div onClick={closeMenu} className={`flex items-center gap-6 text-2xl uppercase no-underline ${location.pathname === to ? "text-purpleLight" : "text-gray dark:text-white hover:text-purpleLight"}`}>
                    <i className="text-2xl">{icon}</i>
                    {label}
                  </div>
                </Link>
              </li>
            ))}
            <li onClick={() => {toggleTheme(); closeMenu()}}> 
              <div onClick={closeMenu} className="flex items-center gap-6 text-2xl uppercase transition-colors text-gray dark:text-white hover:text-purpleLight">
                <i className="text-2xl">{theme === "dark" ? <FaSun /> : <FaMoon />}</i>
                Thème
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
