import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Delivery from "./pages/Delivery/Delivery";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={[<Navbar />, <Home /> , <Footer />]} />
                <Route path="/menu" element={[<Navbar />,<Menu />, <Footer />]} />
                <Route path="/delivery" element={[<Navbar />,<Delivery/>, <Footer />]} />
                <Route path="/about" element={[<Navbar />,<About />, <Footer />]} />
                <Route path="/contact" element={[<Navbar />,<Contact />, <Footer />]} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}/>
            </Routes>
         
        </div>
    );
}

export default App;
