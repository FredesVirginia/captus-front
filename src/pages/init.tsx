import FONDO from "../assets/fondo61.jpg";
import { motion, AnimatePresence } from "framer-motion";
import HOJAS from "../assets/hojaaas.png";
import Snowfall from "react-snowfall";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import PrismaticBurst from "../animation/aimation";
export default function Init() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {

      navigate("/home")
   
  };

  return (
    <AnimatePresence mode="wait">
     
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-start justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${FONDO})`,
      }}
    >
      <FallingLeaves />

      <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-30 flex flex-col items-center  max-w-6xl ">
        {/* Título principal */}
        <motion.h1
        style={{color : "#088408"}}
          className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl xl:text-6xl mt-10 font-flow  text-center cursor-pointer select-none"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }} // hover verdoso
        >
          Bienvenido a Terra Nova
        </motion.h1>

        {/* Subtítulo */}
        <motion.h4
          className="text-xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-5xl font-sheep mt-2 sm:mt-4  text-black text-center cursor-pointer select-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05, color: "#E0DE14" }}
        >
          Tu Oasis Verde Te Espera
        </motion.h4>

        {/* Botón animado */}
        <motion.button
          className="bg-white/50 hover:bg-green-500 active:bg-green-800 font-bold text-gray-800  text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 rounded-2xl py-2 sm:py-3 md:py-4 mt-5 sm:mt-6 md:mt-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8,  }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(34,197,94,0.6)",
            color:"white",
            transition: { duration: 0.3 }, // Por ejemplo, medio segundo
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick()}
        >
          Comienza tu viaje verde hoy
        </motion.button>
      </div>
          </div>
        </motion.div>
      
    </AnimatePresence>
  );
}

export function FallingLeaves() {
  const images = useMemo(() => {
    const leaf = new Image();
    leaf.src = HOJAS;
    leaf.width = 500;
    leaf.height = 500;
    return [leaf];
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <Snowfall
        snowflakeCount={15}
        images={images}
        radius={[10, 20]}
        speed={[1, 3]}
        wind={[-1, 1]}
      />
    </div>
  );
}
