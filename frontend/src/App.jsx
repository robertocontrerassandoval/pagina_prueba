import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Administrador from "./views/Administrador";
import { useContext } from "react";
import { UserContext } from "./contexts/User";
import NotFound from "./views/NotFound";

const App = () => {

  const { user } = useContext(UserContext);


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/administrador" element={  <UserContext.Consumer>
              {({ user }) =>
                user ? <Administrador /> : <Navigate to="/login" />
              }
            </UserContext.Consumer>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
    
  )
}


export default App
