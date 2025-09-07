import { Footer, Nav } from "../components";
import CONSEJOS from "../assets/consejos.jpg";

export default function Consejos() {
  return (
    <div>
      <Nav />
      <div className="flex my-5 justify-center  items-center">
        <div className="h-90 w-[40rem] ">
          <img
            src={CONSEJOS}
            alt=""
            className="w-full h-full object-cover rounded-xl shadow"
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl my-10 font-bold">
          🌵 Consejos de Cuidado para Cactus y Suculentas
        </h1>
        <section className="px-40 my-10 text-gray-800">
          <div>
            <h2 className="text-xl text-green-700 font-bold my-5">☀️ 1. Luz</h2>
            <ul className="list-disc list-inside">
              <li className="font-mulish font-bold">
                Cactus: necesitan mucha luz directa, preferiblemente al menos
                4–6 horas de sol al día. Colócalos cerca de una ventana soleada
                o en balcones.
              </li>
              <li className="font-mulish font-bold">
                Suculentas: también requieren luz, pero algunas especies
                prefieren luz indirecta brillante. Si notas que se “estiran”
                hacia arriba, es señal de que les falta sol.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-green-700 font-bold my-5">
              💧 2. Riego
            </h2>
            <ul className="list-disc list-inside">
              <li className="font-mulish font-bold">
                Cactus: en primavera y verano, riega cada 2–3 semanas, siempre
                asegurándote de que la tierra esté completamente seca antes de
                volver a regar. En invierno, reduce casi al mínimo el riego.
              </li>
              <li className="font-mulish font-bold">
                Suculentas: necesitan un poco más de agua que los cactus, pero
                siempre evitando encharcar. Un buen truco es usar la regla del
                “remojo y secado”: riega hasta que el agua drene por debajo de
                la maceta y espera a que la tierra se seque por completo antes
                del siguiente riego.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-green-700 font-bold my-5">
              🌱 3. Sustrato
            </h2>
            <ul className="list-disc list-inside">
              <li className="font-mulish font-bold">
                Usa tierra especial para cactus y suculentas, ligera y con buen
                drenaje.
              </li>
              <li className="font-mulish font-bold">
                Puedes mezclar tierra común con arena gruesa o perlita para
                evitar que el agua se acumule.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-green-700 font-bold my-5">
              🌡️ 4. Temperatura
            </h2>
            <ul className="list-disc list-inside">
              <li className="font-mulish font-bold">
                Cactus: soportan temperaturas extremas, pero lo ideal es
                mantenerlos entre 18 °C y 30 °C.
              </li>
              <li className="font-mulish font-bold">
                Suculentas: prefieren climas templados y no toleran bien las
                heladas. Si vives en un lugar frío, protégelas en interior
                durante el invierno.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-green-700 font-bold my-5">
              🍃 5. Fertilización
            </h2>
            <ul className="list-disc list-inside">
              <li className="font-mulish font-bold">
                Aplica fertilizante especial para cactus y suculentas en
                primavera y verano, una vez al mes.
              </li>
              <li className="font-mulish font-bold">
                Evita abonar en invierno, ya que entran en reposo y no lo
                necesitan.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-green-700 font-bold my-5">
              🪴 Consejos sobre el Trasplante (cambiar de maceta)
            </h2>
            <h3 className="text-md font-bold">Cuando hacerlo</h3>
            <ul className="list-disc list-inside mb-5">
              <li className="font-mulish font-bold">
                Cuando la planta ha crecido demasiado y la maceta se queda
                pequeña.
              </li>
              <li className="font-mulish font-bold">
                Si notas que las raíces salen por debajo de la maceta.
              </li>
              <li className="font-mulish font-bold">
                Cada 2–3 años aproximadamente, incluso si la maceta no es
                pequeña, para renovar el sustrato.
              </li>
            </ul>

            <h3 className="text-md font-bold">Cómo hacerlo</h3>
            <ul className="list-disc list-inside mb-5">
              <li className="font-mulish font-bold">
                Elige una maceta ligeramente más grande que la actual (no
                demasiado grande).
              </li>
              <li className="font-mulish font-bold">
                Coloca una capa de piedras pequeñas o grava en el fondo para
                mejorar el drenaje.
              </li>
              <li className="font-mulish font-bold">
                Retira con cuidado la planta de la maceta actual, ayudándote con
                guantes si es un cactus.
              </li>
              <li className="font-mulish font-bold">
                Sacude suavemente el exceso de tierra de las raíces y revisa que
                no haya raíces secas o enfermas.
              </li>
              <li className="font-mulish font-bold">
                Coloca la planta en la nueva maceta, añade el sustrato y
                presiona ligeramente para fijarla.
              </li>
            </ul>

            <h3 className="text-md font-bold">Después del trasplante</h3>
            <ul className="list-disc list-inside mb-5">
              <li className="font-mulish font-bold">
                Deja reposar la planta 2–3 días sin regar para que las raíces se
                adapten y cicatricen posibles daños.
              </li>
              <li className="font-mulish font-bold">
                Luego, riega ligeramente y vuelve a tu rutina normal de
                cuidados.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
