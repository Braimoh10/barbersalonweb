import { Link } from "react-router-dom";
import { footerLinks, socialMedia } from "../constant/data";

const Footer = () => {
  return (
    
    <footer className=" bg-golden-brown text-white px-6 py-8 lg:px-32 ">
      <div className="max-container flex flex-col flex-wrap xl:flex-nowrap xl:flex-row w-full">
        <div className="w-full lg:w-1/6 mb-4">
        <Link to="/" className="nav-logo">
          <p className="text-lg xl:text-2xl">
            N<span className="text-orange-peel">B</span>
          </p>
        </Link>
        </div>
        <div className="w-full xl:w-4/6 flex flex-col lg:space-x-2 md:flex-row justify-between ">
          {footerLinks.map((footer) => {
            return (
              <div key={footer.title} className=" flex flex-col space-y-2 mb-5">
                <h4 className="text-md font-semibold">{footer.title}</h4>
                <ul className="flex flex-col space-y-3 mt">
                  {footer.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-sm ">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="w-full xl:w-2/6 xl:ml-16">
         <div className="flex flex-col space-y-3">
         <h4 className="text-md font-semibold">Newsletter</h4>
          <p>Stay Sharp with Our Latest Updates!</p>
          <div className="flex flex-col space-y-2">
            <input type="text" placeholder="email" className="p-2 text-black rounded-lg" />
            <button className="bg-black p-2 rounded-lg">sign up</button>
          </div>
         </div>
        </div>
      </div>
      <hr className="mt-6 bg-stone-300 h-15 w-full" />
      <div className="flex flex-col md:flex-row justify-between mt-4 w-full">
          <div className="flex space-x-5">
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
          <div>
            <p>copyright &copy;2024 NB</p>
          </div>
      </div>
     
    </footer>
  );
};
export default Footer;
