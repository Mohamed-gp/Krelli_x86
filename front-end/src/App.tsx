import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Register from "./pages/register/Register";
import Properties from "./pages/properties/Properties";
import Footer from "./components/footer/Footer";
import Chat from "./pages/chat/Chat";
import Wishlist from "./pages/wishlist/Wishlist.tsx";
import DashBoard from "./pages/dashboard/DashBoard";
import SingleProperty from "./pages/singleProperty/SingleProperty";
import AboutUs from "./pages/aboutus/AboutUs.tsx";
import { useSelector } from "react-redux";
import { IRootState } from "./store/store";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import UsersTable from "./pages/admin/UsersTable.tsx";
import CommentsTable from "./pages/admin/CommentsTable.tsx";
import PostsTable from "./pages/admin/PostsTable.tsx";
import CategoriesTable from "./pages/admin/CategoriesTable.tsx";
import Profile from "./pages/profile/Profile.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";
import PhotosModel from "./components/photosModel/PhotosModel.tsx";
import Settings from "./components/settings/Settings.tsx";
import { useEffect } from "react";

function App() {
  const user = useSelector((state: IRootState) => state.auth.user);
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/properties/:id" element={<SingleProperty />} />
          <Route path="/properties/:id/photos" element={<PhotosModel />} />
          <Route path={`/settings/:id`} element={<Settings />} />
          <Route path={`/profile/:id`} element={<Profile />} />
          <Route path="/profile/chat/" element={<Chat />} />
          <Route path={`/wishlist/:id`} element={<Wishlist />} />
          <Route path="/profile/dashboard/:id" element={<DashBoard />} />
          <Route path="/admin-dashboard">
            <Route
              index
              element={
                user?.role != "admin" ? <Navigate to="/" /> : <AdminDashboard />
              }
            />
            <Route
              path="users-table"
              element={
                user?.role != "admin" ? <Navigate to="/" /> : <UsersTable />
              }
            />
            {/* <Route
              path="comments-table"
              element={
                user?.role != "admin" ? <Navigate to="/" /> : <CommentsTable />
              }
            /> */}
            <Route
              path="homes-table"
              element={
                user?.role != "admin" ? <Navigate to="/" /> : <PostsTable />
              }
            />
            {/* <Route
              path="categories-table"
              element={
                user?.role != "admin" ? (
                  <Navigate to="/" />
                ) : (
                  <CategoriesTable />
                )
              }
            /> */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
