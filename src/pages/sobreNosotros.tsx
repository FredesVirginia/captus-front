import { Footer, Nav } from "../components";
import FONDOO from "../assets/fondo20.jpg";

export default function SobreNosotros() {
  return (
    <div>
      <Nav />
    
      <div className="flex mt-5 justify-center  items-center">
        <div className="h-90 w-[40rem] ">
          <img
            src={FONDOO}
            alt=""
            className="w-full h-full object-cover rounded-xl shadow"
          />
        </div>
      </div>
      <div className="mx-40 flex flex-col gap-4 mt-5 font-mulish text-xl mb-20 ">
          <h1 className="text-center text-2xl my-5 font-bold">
        Planta tus sueños y crecerán días felices
      </h1>
        <p>
          En Terra Nova 🌱 creemos que cada planta cuenta una historia 📖.
          Nuestra pasión por los cactus 🌵 y suculentas 🌸 nace del deseo de
          compartir la tranquilidad, la alegría  y la belleza  que estas
          especies aportan a los hogares 🏡.
        </p>
        <p>
          Cuidar una planta es más que regarla agua: es aprender a observar , a
          respetar su tiempo  y a disfrutar de la simplicidad de la vida 🌞.
        </p>
        <p>
          Los cactus 🌵, con su resistencia y sus espinas protectoras 🛡️, nos
          enseñan fortaleza 💪. Las suculentas , con su variedad de formas y
          colores , nos recuerdan que la diversidad es vida .
        </p>
        <p>
          Nuestra web  es un espacio para que encuentres la planta que mejor
          se adapta a ti , y con ella, un pedacito de naturaleza  que hará
          florecer tu día 🌸💚.
        </p>
      </div>
     <Footer/> 
    </div>
  );
}
