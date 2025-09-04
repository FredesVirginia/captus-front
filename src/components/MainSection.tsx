import primero from "../assets/imgs/1.jpg";
import segundo from "../assets/imgs/2.jpg";
import tercero from "../assets/imgs/3.jpg";
import cuarto from "../assets/imgs/4.jpg";
import quinto from "../assets/imgs/5.jpg";

import septimo from "../assets/imgs/7.jpg";
import octavo from "../assets/imgs/8.jpg";
import noveno from "../assets/imgs/9.jpg";
import decimo from "../assets/imgs/10.jpg";
import onceavo from "../assets/imgs/11.jpg";
import doceavo from "../assets/imgs/13.jpg";

import { useState } from "react";


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

  const start = page * itemsPerPage;
  const currentImages = images.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(images.length / itemsPerPage);
  return (
     <div className="flex flex-col items-center py-10 px-4">
      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {currentImages.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={img}
              alt={`plant-${i}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
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
  )
}
