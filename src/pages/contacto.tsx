import { FaInstagram } from "react-icons/fa";
import CONTACTO from "../assets/contacto.jpg";
import { Nav } from "../components";

import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function Contacto() {
  return (
    <div>
        <Nav/>

    <motion.div
      className="flex justify-center gap-60 mx-30 mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Imagen desde la izquierda */}
      <motion.div
        className="w-86 h-86"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={CONTACTO}
          alt="contacto"
          className="w-full h-full object-cover rounded-xl shadow"
        />
      </motion.div>

      {/* Texto e iconos desde la derecha */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-center text-2xl font-mulish font-bold">
          Contáctanos
        </h2>
        <h3 className="w-96 text-center italic mt-3 font-mulish">
          🪴 Si necesitas ayuda con tu compra o quieres saber más sobre nuestras
          plantas, contáctanos por redes sociales.
        </h3>

        {/* Iconos animados */}
        <motion.div
          className="flex justify-center gap-10 mt-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={25} color="green" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  )
}
