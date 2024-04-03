import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/header/Header";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
