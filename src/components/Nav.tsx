import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ICONO from "../assets/90.png";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Nav() {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
    >
      <div className="flex w-full primary-color pb-10 text-white pt-10 justify-between items-center px-32 ">
        <div className="flex  items-center">
          <div className="w-20 h-20">
            <img src={ICONO} alt="" className="w-full h-full" />
          </div>
          <p className="text-white font-extrabold text-2xl ">Terra Nova</p>
        </div>

        <nav className=" text-sm font-bold flex justify-center items-center gap-10 py-5">
          <p
            className="cursor-pointer animated-underline"
            onClick={() => handleNavigate("/home")}
          >
            INICIO
          </p>
          <p
            className="cursor-pointer animated-underline"
            onClick={() => handleNavigate("/contacto")}
          >
            CONTACTO
          </p>
          <p
            className="cursor-pointer animated-underline"
            onClick={() => handleNavigate("/sobreNosotros")}
          >
            SOBRE NOSOTROS
          </p>
          <p
            className="cursor-pointer animated-underline"
            onClick={() => handleNavigate("/consejos")}
          >
            CONSEJOS
          </p>
        </nav>
        <div className="flex gap-5">
          <FaRegHeart  size={20}/>
          <AiOutlineMail size={20}  />
          <FaRegUser  onClick={() => handleNavigate("/register")} size={19}/>
        </div>
      </div>
    </motion.div>
  );
}
