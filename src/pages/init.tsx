import FONDO from "../assets/fondoInit.jpg";

export default function Init() {
  return (
    <div
  className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-start justify-center px-4 sm:px-6 lg:px-8"
  style={{
    backgroundImage: `url(${FONDO})`,
    fontFamily: "Mulish",
    fontWeight: "bold",
  }}
>
  <div className="absolute inset-0 bg-opacity-30"></div>

  <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-32 flex flex-col items-center max-w-6xl mx-auto">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center cursor-pointer transition-colors duration-300 select-none hover:text-green-200">
      Bienvenido a Terra Nova 
    </h1>
    
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-4 font-bold text-white text-center cursor-pointer transition-colors duration-300 select-none hover:text-green-200">
      Tu Oasis Verde Te Espera
    </h1>

    <p className="text-sm sm:text-base md:text-lg lg:text-xl py-4 text-center text-gray-200 mt-5 sm:mt-6 md:mt-8 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-4xl  bg-opacity-20 rounded-2xl text-wrap px-4 sm:px-5 md:px-6 lg:px-8 leading-relaxed">
      Descubre el poder transformador de las plantas en tu vida. En Terra Nova, creemos que cada hogar merece respirar mejor, sentirse más vivo y conectar con la naturaleza
    </p>

    <button className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 rounded-2xl py-2 sm:py-3 md:py-4 mt-5 sm:mt-6 md:mt-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
      Comienza tu viaje verde hoy
    </button>
  </div>
</div>
  );
}
