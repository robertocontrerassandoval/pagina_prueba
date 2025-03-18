import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Administrador from "./views/Administrador";

const App = () => {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/administrador" element={<Administrador />} />
    </Routes>
    <Footer />
    </>
    
  )
}


export default App
