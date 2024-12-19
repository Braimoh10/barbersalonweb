import { Link } from "react-router-dom";
import { workHours } from "../constant/data";
import SectionImage from '../assets/images/image2.jpg'

const TeamsSection = () => {
  return (
    <section className="relative px-2 lg:px-32 py-6 bg-cover bg-center
    " style={{backgroundImage: `url(${SectionImage})`}}>
     <div className="absolute bg-black inset-0 opacity-50"></div>
     <div className="relative max-container flex flex-col justify-center items-center lg:flex-row lg:items-start">
        <article className="w-full lg:w-2/4 p-4 flex flex-col space-y-3 items-start">
          <h3 className="text-2xl font-semibold text-white">Team of Professionals Waiting for You</h3>
          <p className="text-white leading-8">
            At [Salon Name], we pride ourselves on our skilled and passionate
            team of barbers. Each member brings a unique set of skills and years
            of experience to ensure you receive the best grooming services
            possible.
          </p>
          <Link to="/about" className="uppercase bg-orange-peel border border-transparent
           hover:translate-y-0 delay-150 hover:scale-110 transition duration-300 ease-in-out 
           px-8 py-4 text-white font-semibold rounded-lg">
            view more
          </Link>
        </article>
        <article className="w-full lg:w-2/4 p-4 flex flex-col space-y-3">
          <h3 className="text-2xl font-semibold text-white">Working Hours</h3>
          {
            workHours.map((hours) => {
              return (
                <div key={hours.day}>
                    <p className="text-white">{`${hours.day} : ${hours.hours}`}</p> 
                </div>
              );
            })
          }
        </article>
      </div>
    </section>
  );
};

export default TeamsSection;
