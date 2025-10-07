import { useState } from "react";
import { useFloors } from "../hooks/useFloors/useFloor";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ACCESS_TOKEN_KEY } from "../pages/login";
import secureLocalStorage from "react-secure-storage";

export default function MainFloors() {
  const [likedImages, setLikedImages] = useState<{ [key: number]: boolean }>(
    {}
  );
  const { data, goNextPage, goPrevPage, page, isFetching, setPage } =
    useFloors();
  const [active, setActive] = useState("nuevos");

  const baseStyle = "p-2 px-5 rounded-xl font-bold transition duration-300";
  const activeStyle = "secondary-color text-white !important";
  const inactiveStyle =
    "bg-white border border-green-500 text-gray-700 !important";
  console.log("DATA", data);

  const handleClickAddFavorites = (index: number) => {
  
  const token = secureLocalStorage.getItem(ACCESS_TOKEN_KEY);
if (token) {
  // usuario "logueado"
  setLikedImages((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
} else {
console.log("ÑO TIENES LOGIN")
}
  };
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
        {data?.data.map((floor, i) => (
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
                src={floor.imagenUrl}
                alt={`plant-${i}`}
                className="w-full h-64 object-cover transform rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="my-3">
              <p>{floor.nombre}</p>
              <p className="text-green-700 font-bold">{floor.precio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex gap-3 mt-8">
       

        {data && (
          <div className="flex gap-3 mt-8">
            <button
              disabled={!data.hasPrev || isFetching}
              onClick={goPrevPage}
              className="px-4 py-2 bg-green-600 text-white rounded-xl disabled:opacity-40 hover:bg-green-700 transition"
            >
              ⬅ Anterior
            </button>

            {Array.from({ length: data.totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-2 rounded-xl ${
                  page === i + 1
                    ? "bg-green-700 text-white"
                    : "bg-gray-200 text-green-700 hover:bg-green-300"
                } transition`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={!data.hasNext || isFetching}
              onClick={goNextPage}
              className="px-4 py-2 bg-green-600 text-white rounded-xl disabled:opacity-40 hover:bg-green-700 transition"
            >
              Siguiente ➡
            </button>
          </div>
        )}

      
      </div>
    </div>
  );
}
