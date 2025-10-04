import { useNavigate } from "react-router";
import FONDO from "../assets/fondoo404.jpg";
import { Button } from "rsuite";
import 'rsuite/Button/styles/index.css';
export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/")
  }
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 z-0">
        <img src={FONDO} alt="login" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4">
       <div className="flex">
        <div className="border flex-[30] invisible">|1</div>
        <div className="border flex-[30] invisible">2</div>
         <div className=" flex flex-col flex-[80] text-white gap-5">
          <h2>Opps!</h2>
          <p className="text-9xl font-bold">404</p>
        <div className="">
              <p >
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        
        </div>

        <div className="flex justify-center">
              <Button style={{  color:"white" , borderColor : "white" }} onClick={handleNavigate} appearance="ghost" className="w-60 rounded-full">Regresar al Inicio</Button>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
}
