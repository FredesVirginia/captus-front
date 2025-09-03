import FONDO from "../assets/main3.jpg";
import FONDO2 from "../assets/fondo30.png";
import { div } from "framer-motion/client";
export default function MainHeader() {
  return (
    <div className="">
      <div>
        <div className="flex w-full justify-between items-center px-20 ">
          <p className="text-green-500 font-bold">Terra Nova</p>
          <nav className=" font-semibold flex justify-center items-center gap-10 py-5">
            <p>Inicio</p>
            <p>Contacto</p>
            <p>Sobre Nosotros</p>
            <p>Consejos</p>
          </nav>
          <div className="flex gap-5">
            <p>O</p>
            <p>O</p>
            <p>O</p>
          </div>
        </div>
      </div>

     

      <div className="flex justify-between px-20 bg-gray-200">
        <div className="flex justify-center items-center">
          <h1 className="text-7xl">TERRA NOVA</h1>
        </div>
        <div className="w-70 h-96 relative">
        <img src={FONDO2} alt="" className="w-full h-full" />
      </div>
      </div>
    </div>
  );
}
