import primero from "../assets/imgs/1.jpg";
import segundo from "../assets/imgs/2.jpg";
import tercero from "../assets/imgs/3.jpg";
import cuarto from "../assets/imgs/4.jpg";
import quinto from "../assets/imgs/5.jpg";
import { motion } from "framer-motion";
import septimo from "../assets/imgs/7.jpg";
import octavo from "../assets/imgs/8.jpg";
import noveno from "../assets/imgs/9.jpg";
import decimo from "../assets/imgs/10.jpg";
import onceavo from "../assets/imgs/11.jpg";
import doceavo from "../assets/imgs/13.jpg";

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function MainSection() {
  const images = [
    primero,
    segundo,
    tercero,
    cuarto,
    quinto,

    septimo,
    octavo,
    noveno,
    decimo,
    onceavo,
    doceavo,
  ];

  const itemsPerPage = 6; // 2 filas x 3 columnas
  const [page, setPage] = useState(0);
  const [active, setActive] = useState("nuevos");

  const baseStyle = "p-2 px-5 rounded-xl font-bold transition duration-300";
  const activeStyle = "secondary-color text-white";
  const inactiveStyle = "bg-white border border-green-500 text-gray-700";
  const [likedImages, setLikedImages] = useState<{ [key: number]: boolean }>(
    {}
  );
  const handleClickAddFavorites = (index: number) => {
    setLikedImages((prev) => ({
      ...prev,
      [index]: !prev[index], // cambia true/false para esa imagen
    }));
  };

  const start = page * itemsPerPage;
  const currentImages = images.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(images.length / itemsPerPage);
  return (
    <div className="flex flex-col items-center  py-10 px-4">
      <div className="my-5 mb-10">
        <h2
          style={{ fontFamily: "time new roman" }}
          className="text-center text-3xl font-bold text-green-700"
        >
          Nuestros Productos
        </h2>

        <div className="flex justify-center items-center gap-6 my-5">
          <button
            onClick={() => setActive("nuevos")}
            className={`${baseStyle} ${
              active === "nuevos" ? activeStyle : inactiveStyle
            }`}
          >
            Nuevos Productos
          </button>

          <button
            onClick={() => setActive("favoritos")}
            className={`${baseStyle} ${
              active === "favoritos" ? activeStyle : inactiveStyle
            }`}
          >
            Favoritos
          </button>

          <select
            onChange={() => setActive("categorias")}
            className={` ${baseStyle} ${
              active === "categorias" ? activeStyle : inactiveStyle
            }`}
          >
            <option value="">Cactus</option>
            <option value="">Suculentas</option>
          </select>
        </div>
      </div>
      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {currentImages.map((img, i) => (
          <div className="bg-green-100 px-5 rounded-xl">
            <div
              className="my-3 flex justify-end"
              onClick={() => handleClickAddFavorites(i)}
              style={{ cursor: "pointer" }}
            >
              <motion.div
                whileTap={{ scale: 1.3 }}
                animate={{ scale: likedImages[i] ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {likedImages[i] ? (
                  <FaHeart size={30} color="green" />
                ) : (
                  <FaRegHeart size={30} color="gray" />
                )}
              </motion.div>
            </div>
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg bg-green-200 hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img}
                alt={`plant-${i}`}
                className="w-full h-64 object-cover transform rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="my-3">
              <p>Camptu</p>
              <p className="text-green-700 font-bold">$1200</p>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex gap-3 mt-8">
        <button
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-xl disabled:opacity-40 hover:bg-green-700 transition"
        >
          ⬅ Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-3 py-2 rounded-xl ${
              page === i
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-green-700 hover:bg-green-300"
            } transition`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages - 1}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-xl disabled:opacity-40 hover:bg-green-700 transition"
        >
          Siguiente ➡
        </button>
      </div>
    </div>
  );
}
