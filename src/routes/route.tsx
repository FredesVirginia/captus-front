import { useEffect, type JSX } from "react";
import { isExpired } from "react-jwt";
import { Navigate, Route, Routes } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import LoginPage, { ACCESS_TOKEN_KEY } from "../pages/login";
import Home from "../pages/home";
import CreateFloor from "../pages/createFloor";
import { useUserStore } from "../store/userStore";
import SobreNosotros from "../pages/sobreNosotros";
import Consejos from "../pages/consejos";
import Contacto from "../pages/contacto";
import Init from "../pages/init";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/init" element={<Init />} />
      <Route path="/sobreNosotros" element={<SobreNosotros />} />
      <Route path="/consejos" element={<Consejos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route
        path="/create-floor/*"
        element={
          <IsRequired>
            <CreateFloor />
          </IsRequired>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
interface Props {
  children: JSX.Element;
}
const intervalRefresh = 2 * 60 * 60 * 1000; // 2 horas

const IsRequired = ({ children }: Props): JSX.Element => {
  const { user } = useUserStore();
  let token =
    (secureLocalStorage.getItem(ACCESS_TOKEN_KEY) as string | null) ?? "1";

  useEffect(() => {
    const interval = setInterval(() => {
      token =
        (secureLocalStorage.getItem(ACCESS_TOKEN_KEY) as string | null) ?? "";
    }, intervalRefresh);
    return () => clearInterval(interval);
  }, []);

  if (!user || !user.id || isExpired(token)) {
    localStorage.clear();
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
