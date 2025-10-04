import EyeCloseIcon from "@rsuite/icons/EyeClose";
import VisibleIcon from "@rsuite/icons/Visible";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { Button, Input, InputGroup } from "rsuite";
import * as Yup from "yup";
import ARBOL from "../assets/captu2.jpg";
import { useUserStore } from "../store/userStore";
import { login, type ICredentiales } from "../hooks/useUsers/request";
import 'rsuite/Button/styles/index.css';
import "rsuite/Input/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import "rsuite/Button/styles/index.css";
export const ACCESS_TOKEN_KEY = "DRY";
export const REFRESH_TOKEN_KEY = "KISS";
const INITIAL_VALUES = {
  email: "",
  password: "",
};
const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().required("required"),
  password: Yup.string().required("required"),
});
export default function LoginPage() {
 
  const [visible, setVisible] = useState(false);
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: typeof INITIAL_VALUES) {
    console.log("LOS VALUES DEL LOGIN SON" , values)
 

    const trimmedValues: ICredentiales = {
      email: values.email.trim(),
      password: values.password.trim()
    };
    
    console.log("DATA", trimmedValues);
    
    
    try {
      const response = await login(trimmedValues);

      if (response.access_token != "") {
        toast.success("Se inició sesión");
        setUser(response.user);
        secureLocalStorage.setItem(ACCESS_TOKEN_KEY, response.access_token);
        console.log("AQUI ");
        navigate("/create-floor");
      }
    } catch (error: any) {
      toast.error(`Ocurrio un Error ${error.message}`);
    }
  }

  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <div className="relative h-screen w-screen">
   
    <div className="absolute inset-0 z-0">
      <img src={ARBOL} alt="login" className="w-full h-full object-cover" />
    </div>
  
 
    <div className="relative z-10 flex items-center justify-center h-full px-4">
      <div className="bg-white/10 md:bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl py-10 px-6 w-full max-w-sm min-h-[480px] flex flex-col justify-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center w-full px-10">
          <div className="mb-6 flex flex-col items-center gap-6 w-full">
            <p className=" text-[24px] md:text-[35px] font-bold text-white text-center">Peps Platform</p>
  
          
            <InputGroup className="bg-white items-center w-full">
              <InputGroup.Addon>
                <FaRegUserCircle style={{ color: "#52C5FA" }} />
              </InputGroup.Addon>
              <Input
                name="email"
                onChange={(value: string) => {
                  formik.setFieldValue("email", value);
                }}
                value={formik.values.email}
                className="text-gray-700 bg-gray-200 pl-10 pr-4 rounded-xl py-2 w-full"
              />
            </InputGroup>
  
            
            <InputGroup className="bg-white items-center w-full">
              <InputGroup.Button onClick={handleChange} className="cursor-pointer">
                {visible ? <VisibleIcon style={{ color: "#52C5FA" }} /> : <EyeCloseIcon style={{ color: "#52C5FA" }} />}
              </InputGroup.Button>
              <Input
                name="password"
                onChange={(value: string) => {
                  formik.setFieldValue("password", value);
                }}
                value={formik.values.password}
                className="bg-gray-200 pl-10 pr-10 rounded-xl py-2 w-full text-gray-700"
                type={visible ? "text" : "password"}
              />
            </InputGroup>
          </div>
  
          
          <Button
            appearance="primary"
            type="submit"
            className={`bg-sky-400 hover:bg-sky-500 transition text-white font-semibold w-full py-3 rounded-xl
              ${!formik.values.email || !formik.values.password ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
            disabled={!formik.values.email || !formik.values.password}
          >
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  </div>
  
  
  );
}