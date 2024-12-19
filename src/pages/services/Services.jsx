import ServiceBackgroundImg from "../../assets/images/image14.jpg";
import Header from "../../components/Header";
import OurService from "../../components/OurService";
import { loyalty, pricing, promotions, services } from "../../constant/data";

const Services = () => {
  return (
    <>
      <Header BackgroundImage={ServiceBackgroundImg}>
        <h1 className="text-lg md:text-4xl font-bold uppercase mt-16">our service</h1>
        <p className="text-sm md:text-md mt-4 text-center capitalize">
          Experience top-notch grooming services in a relaxing atmosphere.
        </p>
      </Header>
      <section className="px-6 lg:px-32 py-5">
        <div className="max-container">
          <div className="w-full flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-8 uppercase text-white">
              what we do
            </h2>
            <h1 className="text-md lg:text-3xl text-white mb-5 text-center font-semibold capitalize">
              Come to the luxury Barbershop for a great experience
            </h1>
            <p className="text-white text-center text-sm md:text-lg">
              Our objective is to provide grooming services to our patrons in a
              tranquil and classy environment, reminiscent of gentlemen clubs. At nelly saloon we thrive on ensuring your hair is cut to suit
              your unique grooming requirements.
            </p>
  
            <div className="w-full my-5">
              <article className="w-full h-full grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                {services.map((service) => (
                  <OurService key={service.title} {...service} />
                ))}
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-32 py-5">
        <h1 className="text-white text-lg md:text-3xl font-bold text-center mb-5">price list</h1>
        <div className="max-container grid md:grid-cols-2 lg:grid-cols-3  gap-3 w-full">
          <article className="bg-slate-200 p-4 rounded-lg mb-3 hover:shadow-lg transition-all">
            {
              pricing.map((price)=>{
                return(
                  <div key={price.category}>
                    <h4 className="mt-4 font-bold capitalize">{price.category}</h4>
                    {
                      price.items.map((item)=>{
                        return(
                          <div key={item.name} className="leading-8">
                             <p className=" text-sm md:text-md font-semibold">{item.name} ------------ {`$${item.price}`}</p>
                            
                          </div>
                         
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </article>

          <article className="bg-slate-200 p-4 rounded-lg mb-3 hover:shadow-lg transition-all">
            {
              promotions.map((promo)=>{
                return(
                  <div key={promo.category}>
                    <h4 className="mt-4 font-bold capitalize">{promo.category}</h4>
                      {
                        promo.items.map((item)=>{
                          return(
                            <div key={item.name} className="leading-8 font-semibold">
                              <p className="text-sm md:text-md">{item.name} ---------------- {`$${item.price}`}</p>
                              <p className="text-sm md:text-md">{item.description}</p>
                            </div>
                          )
                        })
                      }
                  </div>
                )
              })
            }
          </article>

          <article className="bg-slate-200 p-4 rounded-lg mb-3 hover:shadow-lg transition-all">
            {
              loyalty.map((loyal)=>{
                return(
                  <div key={loyal.category}>
                    <h4 className="mt-4 capitalize font-bold">{loyal.category}</h4>
                      {
                        loyal.items.map((item)=>{
                          return(
                            <div key={item.name} className="font-semibold leading-8">
                              <p>{item.name}</p>
                              <p>{item.description}</p>
                            </div>
                          )
                        })
                      }
                  </div>
                )
              })
            }
          </article>
        </div>
      </section>
    </>
  );
};
export default Services;
