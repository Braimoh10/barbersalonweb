const Header = ({ BackgroundImage, children }) => {
  return (
    <>
      <div className="relative md:h-72 h-52">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-75 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-white pt-10 pb-5">{children}</div>
      </div>
      
      
    </>
  );
};
export default Header;
