import AdminMain from "./AdminMain"
import AdminSideBar from "./AdminSideBar"

const AdminDashboard = () => {
  return (
    <div className="flex" style={{ minHeight: "calc(100vh - (84.14px))" }}>
      <AdminSideBar/>
      <AdminMain/>
    </div>
  )
}
export default AdminDashboard