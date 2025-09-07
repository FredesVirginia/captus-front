import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/styles/App.css'
import Home from './pages/home'
import Init from './pages/init'
import SobreNosotros from './pages/sobreNosotros'
import Consejos from './pages/consejos'
import Contacto from './pages/contacto'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Init />} />
         <Route path="/home" element={<Home />} />
         <Route path="/sobreNosotros" element={<SobreNosotros/>} />
         <Route path="/consejos" element={<Consejos/>} />
         <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
