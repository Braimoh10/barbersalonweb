

const OurService = ({ icon, title, desc}) => {
  return (
    <div className="flex flex-col space-y-2 rounded-lg
     items-center px-4 pt-4 pb-4 cursor-pointer h-full
     border border-orange-peel">
      <img src={icon} alt="icon" className="w-16 border border-orange-peel rounded-xl p-3  " />
      <div className="flex flex-col flex-grow text-center">
        <h1 className="text-xl font-semibold text-white mb-3">{title}</h1>
        <p className="text-sm max-w-sm text-white mb-3">
          {desc}
        </p>
      </div>
     
    </div>
  );
};
export default OurService;
