import { BrowserRouter, Route, Routes } from 'react-router'
import '../src/styles/App.css'
import Home from './pages/home'
import Init from './pages/init'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Init />} />
         <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
