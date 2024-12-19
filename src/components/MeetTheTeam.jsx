


const MeetTheTeam = ({name,title,imgSrc,socialLinks}) => {
  return (
    <div className=" rounded-lg mb-5 border border-golden-brown">
      <img
        src={imgSrc}
        alt={`${name}'s profile`}
        className=" h-[70vh] lg:h-[65vh] w-full object-cover rounded-t-lg"
      />
      <div className="text-center text-gray-200 leading-6 mt-3 ">
        <h3 className="font-bold capitalize">{name}</h3>
        <h5>{title}</h5>
      </div>
      <div className="flex justify-around gap-3 mt-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={`https://www.${social.platform}.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-golden-brown mb-3"
          >
            <img
              src={social.icon}
              alt={`${social.platform} icon`}
              className="w-6 h-6"
            
            />
          </a>
        ))}
      </div>
    </div>
  )
}
export default MeetTheTeam