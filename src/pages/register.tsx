import EyeCloseIcon from "@rsuite/icons/EyeClose";
import VisibleIcon from "@rsuite/icons/Visible";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePermPhoneMsg } from "react-icons/md";
import { Button, Input, InputGroup } from "rsuite";
import 'rsuite/Button/styles/index.css';
import "rsuite/Input/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import * as Yup from "yup";
import FONDO from "../assets/captu2.jpg";
import type { IReqUserRegistration } from "../hooks/useUsers/IReqUser";
import { useUserHook } from "../hooks/useUsers/useUserHook";
import { RoleUser } from "../types/enums/enums";
export const ACCESS_TOKEN_KEY = "DRY";
export const REFRESH_TOKEN_KEY = "KISS";
const INITIAL_VALUES = {
  nombre: "",
  phone : 0,
  role : RoleUser.USER,
  email: "",
  password: "",
};
const VALIDATION_SCHEMA = Yup.object().shape({
  nombre: Yup.string().required("required"),
  phone: Yup.number().required("required"),
  email: Yup.string().required("required"),
  password: Yup.string().required("required"),
});
export default function Register() {
  const [visible, setVisible] = useState(false);
 
  const { mutationRegister} = useUserHook()

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: typeof INITIAL_VALUES) {
    console.log("LOS VALUES DEL LOGIN SON" , values)
 

    const trimmedValues: IReqUserRegistration = {
      nombre : values.nombre.trim(),
      phone :  values.password.toString().trim(),
      role : RoleUser.USER,
      email: values.email.trim(),
      password: values.password.trim()
    };
    
    console.log("DATA", trimmedValues);
    
    
    try {
       mutationRegister.mutate(trimmedValues , {
        onSuccess : (data : any)=>{
            console.log("Data Regigistration" , data)
            toast.success("Registro correcto")
        },
        onError : (data : any)=>{
             console.log("Data Regigistration" , data)
            toast.error("Registro Incorrecto")
        },
       })
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
      <img src={FONDO} alt="login" className="w-full h-full object-cover" />
    </div>
  
 
    <div className="relative z-10 flex items-center justify-center h-full px-4">
      <div className="bg-blue-400 backdrop-blur-md rounded-2xl shadow-2xl py-10 px-6 w-full max-w-sm min-h-[480px] flex flex-col justify-center">
        <form onSubmit={formik.handleSubmit} className="flex   flex-col items-center w-full px-10">
          <div className="mb-6 flex flex-col items-center gap-6 w-full">
            <p className=" text-[24px] md:text-[35px] font-bold text-white text-center">Terra Nova</p>
  
            <FaCircleUser size={50} color="white"/>
             <InputGroup className="bg-white items-center w-full">
              <InputGroup.Addon>
                <FaRegUserCircle style={{ color: "#52C5FA" }} />
              </InputGroup.Addon>
              <Input
                name="nombre"
                onChange={(value: string) => {
                  formik.setFieldValue("nombre", value);
                }}
                value={formik.values.nombre}
                className="text-gray-700 bg-gray-200 pl-10 pr-4 rounded-xl py-2 w-full"
              />
            </InputGroup>
             <InputGroup className="bg-white items-center w-full">
              <InputGroup.Addon>
                <MdOutlinePermPhoneMsg style={{ color: "#52C5FA" }} />
              </InputGroup.Addon>
              <Input
                name="phone"
                onChange={(value: string) => {
                  formik.setFieldValue("phone", value);
                }}
                value={formik.values.phone}
                className="text-gray-700 bg-gray-200 pl-10 pr-4 rounded-xl py-2 w-full"
              />
            </InputGroup>
            <InputGroup className="bg-white items-center w-full">
              <InputGroup.Addon>
                <MdOutlineEmail style={{ color: "#52C5FA" }} />
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
          
            type="submit"
            className={`bg-green-600! hover:bg-green-800! transition text-white font-semibold w-full py-3 rounded-xl
              ${!formik.values.email || !formik.values.nombre ||  !formik.values.phone||  !formik.values.password  ? " cursor-not-allowed text-gray-400!" : "cursor-pointer"}
            `}
            disabled={!formik.values.email || !formik.values.nombre ||  !formik.values.phone||  !formik.values.password }
          >
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  </div>
  )
}
