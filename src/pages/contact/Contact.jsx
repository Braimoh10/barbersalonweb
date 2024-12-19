import Header from "../../components/Header";
import { Image16 } from "../../assets/images";
import ContactForm from "../../components/ContactForm";
import { socialMedia } from "../../constant/data";

const Contact = () => {
  return (
    <>
      <Header BackgroundImage={Image16}>
        <h1 className="text-lg md:text-4xl font-bold uppercase mt-16">
          gallery
        </h1>
      </Header>
      <section className="px-8 md:px-16 lg:px-32 py-8 ">
        <div className="max-container">
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            <div className="flex flex-col gap-5">
            <div className="border border-orange-peel rounded-lg p-6 text-white leading-8 ">
              <h4>contact info</h4>
              <p>123 barber st.</p>
              <p>city, state, zip</p>
              <p>phone: (123) 456-7890</p>
              <p>email:info@yourbarbersaloon.com</p>
              
            </div>
            <div className="flex space-x-5 p-6 rounded-lg  border border-orange-peel ">
           {
            socialMedia.map((socials)=>{
              return(
                <div key={socials.src} className=" mb-3">
                  <a href={socials.url}>
                    <img src={socials.src} 
                    alt="socialMedia" 
                    className="w-8"
                    />
                  </a>
                </div>
              )
            })
           }
            </div>
            </div>
           <ContactForm/>
           
          </div>
          
        </div>
      </section>
    </>
  );
};
export default Contact;
