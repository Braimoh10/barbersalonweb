import Header from "../../components/Header";
import AboutImage from "../../assets/images/about_img.jpg";
import { AboutImg1, AboutImg2 } from "../../assets/images";
import TeamMembers from "../../components/TeamMembers";

const About = () => {
  return (
    <>
      <Header BackgroundImage={AboutImage}>
        <h1 className="text-lg md:text-4xl font-bold uppercase md:mt-16">
          about us
        </h1>
        <p className="text-sm md:text-md mt-4 text-center capitalize">
          crafting sharp styles and confident looks with precision and care
        </p>
      </Header>
      <section className="px-6 md:px-16 lg:px-32 py-8">
        <div className="max-container">
          <div className="md:flex gap-6">
            <div className="w-full md:w-3/6">
              <h1 className="text-white text-lg md:text-3xl capitalize font-bold mb-3">
                Our Story
              </h1>
              <p className="text-white leading-8 mb-5">
                Founded in [Year], [Barbershop Name] was created with a vision:
                to offer high-quality, modern cuts in a comfortable, welcoming
                environment. We blend classic barbering techniques with the
                latest trends to ensure that each client leaves feeling fresh,
                confident, and satisfied.
              </p>
              <p className="text-white leading-8 mb-5">
                Our roots are deep in tradition, but we're always looking
                forward to what's next in grooming and style. Whether you're
                looking for a classic fade, a stylish beard trim, or a totally
                new look, we're here to make it happen.
              </p>
            </div>
            <div className="w-full md:w-3/6">
              <img
                src={AboutImg1}
                alt=""
                className="h-72 md:h-96 xl:h-72 w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 lg:px-32 py-5">
        <div className="max-container">
          <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="w-full md:w-3/6">
              <img
                src={AboutImg2}
                alt=""
                className=" h-72 w-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-3/6">
              <h1 className="text-white text-lg md:text-3xl capitalize font-bold mb-3">
                Our Mission
              </h1>
              <p className="text-white leading-8 mb-5">
                To offer top-notch barbering services that elevate the grooming
                experience. We aim to create a space where our clients feel
                relaxed, confident, and well-cared for. At [Barbershop Name],
                your look is our craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-5">
        <div className="max-container">
         <div className="flex flex-col justify-center items-center">
         <h1 className="text-md md:text-3xl text-white font-bold capitalize">meet the team</h1>
          <p className="text-white text-sm md:text-lg md:w-4/6 text-center">
            We are proud of our team of professional barbers, each with years of
            experience and a true passion for the craft. Our barbers specialize
            in a wide range of services, from sharp, clean cuts to precise beard
            trims and everything in between. We take the time to understand each
            client’s unique style and work with them to create a look that fits
            their personality and needs.
          </p>
         </div>
        </div>
      </section>
      <section className="px-6 md:px-16 xl:px-32 py-5">
         <TeamMembers/>
      </section>
    </>
  );
};
export default About;
