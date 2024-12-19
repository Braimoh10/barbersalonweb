import { services } from "../constant/data";
import { Link } from "react-router-dom";
import OurService from "./OurService";


const OurServices = () => {
  return (
    <section className="px-6 lg:px-32 py-6 lg:py-8">
      <h2 className="text-2xl font-semibold text-center mb-8 uppercase text-white">Our Services</h2>
      <div className=" max-container grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {services.map((service) => (
          <OurService key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};
export default OurServices;
