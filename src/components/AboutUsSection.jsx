import { Link } from "react-router-dom";
import AboutImg from "../assets/images/image13.jpg"

const AboutUsSection = () => {
  return (
    <section className="px-8 py-5 md:px-16 lg:px-32">
      <div className="max-container w-full lg:flex space-x-5   ">
        <div className="flex flex-col text-center lg:text-start items-center lg:items-start lg:w-2/4 h-full text-white">
          <h1 className="text-2xl md:text-3xl font-semibold mb-5 uppercase">about us</h1>
          <p className="text-sm lg:text-lg leading-normal mb-5 md:max-w-[30rem]">
            Welcome to [Salon Name], where style meets relaxation! Nestled in
            the heart of [Location], we are a premier barber salon offering
            top-notch grooming services for men and women. Our mission is to
            provide a welcoming atmosphere where every client leaves feeling
            confident and refreshed
          </p>
          <Link to="/about" className="uppercase bg-orange-peel border border-transparent
           hover:translate-y-0 delay-150 hover:scale-110 transition duration-300 ease-in-out 
           px-8 py-4 text-white font-semibold rounded-lg">
          learn more
          </Link>
        </div>
        <div className="lg:w-2/4 hidden lg:block">
            <img src={AboutImg}
             alt="" 
             className="object-cover h-80 w-full"

             />
        </div>
      </div>
    </section>
  );
};
export default AboutUsSection;
