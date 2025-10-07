import { useEffect, type JSX } from "react";
import { isExpired } from "react-jwt";
import { Navigate, Route, Routes  , useLocation} from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import LoginPage, { ACCESS_TOKEN_KEY } from "../pages/login";
import Home from "../pages/home";
import CreateFloor from "../pages/createFloor";
import { useUserStore } from "../store/userStore";
import SobreNosotros from "../pages/sobreNosotros";
import Consejos from "../pages/consejos";
import Contacto from "../pages/contacto";
import Init from "../pages/init";
import NotFoundPage from "../pages/notFoundPage";
import Register from "../pages/register";
import { AnimatePresence, motion } from "framer-motion";
export default function Router() {
   const location = useLocation();

  // Variantes reutilizables para entrada/salida de página
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };
  return (
   <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Init />} />

        {/* ✅ login y register animados */}
        <Route
          path="/login"
          element={
            <motion.div
              key="login"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                height: "100vh",
                width: "100vw",
                position: "fixed",
                top: 0,
                left: 0
              }}
            >
              <LoginPage />
            </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div
              key="register"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                overflow: "hidden",
                height: "100vh",
                width: "100vw",
                position: "fixed",
                top: 0,
                left: 0
              }}
            >
              <Register />
            </motion.div>
          }
        />

        {/* 🔹 el resto sin animación */}
        <Route path="/home" element={<Home />} />
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
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
