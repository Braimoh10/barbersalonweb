import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/hero_image.jpg";
import Modal from "./Modal";

const MainHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

  return (
    <>
    <section
      className="relative w-full bg-cover bg-center h-[70vh] md:h-full flex flex-col items-start"
      style={{ backgroundImage: `url(${Image}) ` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container flex flex-col justify-center h-full relative px-8 py-6 pb-6  md:px-16 md:py-32 lg:px-32 lg:pb-32 lg:pt-40">
        <article className="max-w-xl flex flex-col space-y-11 items-start">
          <div>
            <h1 className="text-white text-3xl lg:text-6xl mb-4">
              Welcome,
              <br />
              <span className="block pt-2">to Nelly Saloon!</span>
            </h1>
            <p className="text-white text-sm lg:text-lg tracking-wide max-w-80 md:max-w-2xl">
              Step into a world where style meets tradition! At Nelly saloon, we
              believe that every haircut is an opportunity to express your
              individuality
            </p>
          </div>
          <Link to="/" onClick={handleOpenModal} className="uppercase bg-orange-peel border border-transparent
           hover:translate-y-0 delay-150 hover:scale-110 transition duration-300 ease-in-out 
           px-8 py-4 text-white font-semibold rounded-lg ">
            Book Now
          </Link>
         
        </article>
      </div>
    </section>
     {isModalOpen && <Modal handleCloseModal={handleCloseModal} />}
     </>
  );
};
export default MainHeader;
