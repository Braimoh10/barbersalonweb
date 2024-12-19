import { useState, useEffect } from "react";
import { testimonials } from "../constant/data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, desc } = testimonials[index];

  
  useEffect(() => {
    const lastIndex = testimonials.length - 1;

    const autoSlide = setInterval(() => {
      setIndex((current) => (current === lastIndex ? 0 : current + 1));
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(autoSlide); // Cleanup on component unmount
  }, [index]);



  const handlePrevious = () => {
    setIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    ); // testimonials.length-1 is to get the last index of the element
  };



  const handleNext = () => {
    setIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const handleIndicator=(i)=>{
    setIndex(i)
  }

  return (
    <section className="py-6 px-6">
      <div className="max-container flex flex-col space-y-3 justify-center items-center">
        <h2 className="text-2xl font-semibold my-8 uppercase text-white">testimonials</h2>
        <div className="w-full lg:h-60 lg:w-2/5 mt-4 border-2 border-orange-peel rounded-lg bg-slate-100  p-11 flex flex-col transition duration-300">
          <div className="flex flex-col space-y-2">
          <h5 className="font-semibold">{name}</h5>
          <p>{desc}</p>
          </div>
        </div>
        <div className="flex flex-row space-x-3 items-center">
          <button onClick={handlePrevious} className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
            <FaArrowLeft />
          </button>
  
          <div className="flex space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === i ? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={()=>handleIndicator(i)}
              />
            ))}
          </div>
          <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
            <FaArrowRight onClick={handleNext} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
