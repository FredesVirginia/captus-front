import FONDO1 from "../assets/44-removebg-preview.png";
import FONDO2 from "../assets/66-removebg-preview.png";
import FONDO3 from "../assets/55-removebg-preview.png";
import ICONO from "../assets/90.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaRegUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
export default function MainHeader() {
  const images = [FONDO2, FONDO3, FONDO1];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // ⏳ Cambio automático cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNavigate = (path: string)=>{
    navigate(path);
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading"
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundColor: "#088408",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.9,
          ease: [0.25, 0.1, 0.25, 1.0], // Curva de animación más suave
          staggerChildren: 0.2,
        }}
      >
        <Nav/>

        <div className="flex justify-between -mt-10 primary-color px-36  h-[28rem]">
          <div className="flex flex-col justify-center items-start gap-3">
            <h1
              style={{ fontFamily: "times new roman" }}
              className="text-7xl text-white "
            >
              Terra Nova
            </h1>
            <h1
              style={{ fontFamily: "times new roman" }}
              className="text-2xl translate-x-1 text-white "
            >
              Captus y Suculentas
            </h1>
          </div>

          <div className="relative w-[20rem] h-[30rem] -translate-y-10 flex items-center justify-center ">
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
