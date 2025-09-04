import FONDO1 from "../assets/44-removebg-preview.png";
import FONDO2 from "../assets/66-removebg-preview.png";
import FONDO3 from "../assets/55-removebg-preview.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function MainHeader() {
  const images = [FONDO2, FONDO3, FONDO1];
  const [index, setIndex] = useState(0);

  // ⏳ Cambio automático cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
  <AnimatePresence mode="wait">
      <motion.div 
       key="loading"
          style={{ width: "100%", height: "100vh", position: "relative" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.9, 
            ease: [0.25, 0.1, 0.25, 1.0], // Curva de animación más suave
            staggerChildren: 0.2
          }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex w-full justify-between items-center px-20 ">
        <p style={{fontFamily: "times new roman" }} className="text-green-700 font-extrabold text-2xl italic">Terra Nova</p>

          <nav className=" font-bold flex justify-center items-center gap-10 py-5">
            <p>INICIO</p>
            <p>CONTACTO</p>
            <p>SOBRE NOSOTROS</p>
            <p>CONSEJOS</p>
          </nav>
          <div className="flex gap-5">
            <p>O</p>
            <p>O</p>
            <p>O</p>
          </div>
        </div>
      </motion.div>

     

      <div className="flex justify-between px-50 bg-gray-200 h-[28rem]">
        <div className="flex flex-col justify-center items-start gap-3">
          <h1  style={{fontFamily: "times new roman" }} className="text-7xl text-green-700 ">Terra Nova</h1>
           <h1  style={{fontFamily: "times new roman"}} className="text-2xl translate-x-1 text-green-700 ">Captus y Suculentas</h1>
        </div>

            <div className="relative w-[20rem] h-[30rem] -translate-y-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
          key={index}
  src={images[index]}
  alt="plant"
  className="w-full h-full object-cover rounded-2xl "
  initial={{ opacity: 0, x: 100, rotate: 15 }}
  animate={{ opacity: 1, x: 0, rotate: 0 }}
  exit={{ opacity: 0, x: -100, rotate: -15 }}
  transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>  



      
      </div>
    </motion.div>
  </AnimatePresence>
  );
}
