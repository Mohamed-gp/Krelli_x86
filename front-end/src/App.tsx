import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Register from "./pages/register/Register";
import Properties from "./pages/properties/Properties";
import Footer from "./components/footer/Footer";
import Chat from "./pages/chat/Chat";
import Favorites from "./pages/favorites/Favorites";

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
          <Route path="/profile/chat/:id" element={<Chat />} />
          <Route path="/profile/favorites/:id" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
