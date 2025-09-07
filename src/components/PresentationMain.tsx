import { FiTruck } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import CAPTU from "../assets/100.png";
import SUCULENTA from "../assets/112.png";


export default function PresentationMain() {
  return (
    <div>
      <div className="secondary-color  w-full flex px-38 py-30">
        <div className="border-r border-white flex items-center gap-5 px-5 flex-1 ">
          <div className="mr-5">
            <FiTruck size={50} color="white" />
          </div>
          <div className=" text-white flex flex-col gap-2">
            <p className="font-bold text-xl">Entregas rapidas</p>
            <p className="text-sm">Entregas rapidas a tu puerta Lorem ipsum</p>
          </div>
        </div>
        <div className="border-r border-white flex items-center gap-5 px-5 flex-1 ml-5">
          <div className="mr-5">
            <FaCreditCard size={50} color="white" />
          </div>
          <div className=" text-white flex flex-col gap-2">
            <p className="font-bold text-xl">Pago Seguro</p>
            <p className="text-sm">Entregas rapidas a tu puerta Lorem ipsum</p>
          </div>
        </div>

        <div className=" flex items-center gap-5 ml-5 px-5 flex-1 ">
          <div className="mr-5">
            <FaHandHoldingHeart size={50} color="white" />
          </div>
          <div className=" text-white flex flex-col gap-2 ">
            <p className="font-bold text-xl">Servicios Amigables</p>
            <p className="text-sm">Entregas rapidas a tu puerta Lorem ipsum</p>
          </div>
        </div>
      </div>

      <div className="flex bg-white px-32 w-full gap-10 my-5 mt-20">
        <div className="flex-1 flex   justify-between bg-gray-200">
          <div className="flex flex-1 flex-col gap-5 justify-between py-10 pl-14 ">
            <p className="text-green-700 font-bold">Big Safe Product</p>
            <p className="text-4xl">Captu</p>
            <button className="primary-color text-white w-fit px-5 py-2 rounded-full">
              Comprar Ahora
            </button>
          </div>
          <div className=" bg-gray-200 flex-1 h-70 ">
            <img src={CAPTU} alt="" className="w-90 h-full" />
          </div>
        </div>





        <div className="flex-1 bg-gray-200 h-70 flex ">
         
         <div className="flex flex-1 flex-col gap-5 justify-between py-10 pl-14 ">
            <p className="text-green-700 font-bold">Big Safe Product</p>
            <p className="text-4xl">Captu</p>
            <button className="primary-color text-white w-fit px-5 py-2 rounded-full">
              Comprar Ahora
            </button>
          </div>
         <div> <img src={SUCULENTA} alt="" className="w-80 h-full" /></div>
        </div>
      </div>
    </div>
  );
}
