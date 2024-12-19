import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../constant/data";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "./Modal";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const handleOpenModal = () => {
      setIsModalOpen(true);
      setIsMenuOpen(false)//close the menu when modal opens
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

  

  return (
    <nav className="w-full fixed z-20 top-0 left-0  bg-amber-50">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <p className="text-lg xl:text-2xl">
            N<span className="text-orange-peel">B</span>
          </p>
        </Link>

        {/* desktop navigation menu */}
        <ul className="hidden xl:flex items-center gap-12">
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-md p-3 nav-link hover:border-transparent ${
                      isActive ? "border-orange-peel font-semibold" : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Link
          to="/"
          className="hidden lg:flex uppercase font-semibold bg-orange-peel border border-transparent
           hover:border-orange-peel hover:bg-transparent
           hover:text-orange-peel px-4 py-3 text-white rounded-lg
           transition duration-300 ease-in-out"
          onClick={handleOpenModal}
        >
          Book Now
        </Link>
        {isModalOpen && <Modal handleCloseModal={handleCloseModal}/>}
      
        {/* hamburger menu for mobile menu control */}
        <div
          className="xl:hidden block cursor-pointer "
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="nav-icons" />
          ) : (
            <FaBars className="nav-icons" />
          )}
        </div>

        {/* absolute positioning for mobile menu */}
        <div
          className={`xl:hidden absolute top-[52px] lg:top-[64px] right-0 w-[50%] shadow-md z-20 bg-white 
              flex flex-col px-8 pt-4 pb-8 transition-all duration-300 delay-150
              ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-x-5 pointer-events-none"
              } `}
        >
          <ul className="w-full flex flex-col items-end gap-5">
            {links.map(({ name, path }, index) => {
              return (
                <li key={index} className="w-full ">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-md block text-center ${
                        isActive ? "font-semibold text-orange-peel" : ""
                      } border-b-2 border-transparent hover:transition-all hover:font-semibold`
                    }
                    onClick={handleToggleMenu}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <Link
            to="/"
            className="bg-orange-peel border border-transparent
           hover:border-orange-peel hover:bg-transparent
           hover:text-orange-peel pl-1 py-3 text-white rounded-lg lg:hidden w-full mt-4 text-center"
           onClick={handleOpenModal}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
