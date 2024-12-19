import { FaTimes } from "react-icons/fa";
import Booking from "./Booking";

const Modal = ({handleCloseModal}) => {
   
  return( 
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
    <div className="bg-white w-11/12 max-w-md p-6 rounded shadow-lg  ">
     <div className="flex justify-between items-center">
     <h1 className="my-5 capitalize text-lg font-bold">
        make an appointment
      </h1>
      <FaTimes className="w-8 cursor-pointer" onClick={handleCloseModal}/>
     </div>
      <Booking />
    </div>
  </div>
  );
};
export default Modal;
