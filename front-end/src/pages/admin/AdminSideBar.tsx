import { BsBarChartSteps, BsBookmarkFill, BsChatRightTextFill, BsFileEarmarkRichtextFill, BsPersonCircle } from "react-icons/bs"
import { Link, NavLink } from "react-router-dom"

const AdminSideBar = () => {
    return (
        <div className="hidden sm:block sm:min-w-[240px] p-6 border-solid " >
            <Link to="/admin-dashboard" className="flex items-center gap-2 ">
                <BsBarChartSteps className="text-xl text-buttonColor"/>
                <p className="py-3 text-xl font-bold">Dashboard</p>
            </Link>
            <div className="flex flex-col gap-5 ml-4 text-primary-color">
                <NavLink to="/admin-dashboard/users-table" className="flex items-center gap-2 py-2 pl-2 text-xl duration-500 rounded-xl admin-link ">
                    <BsPersonCircle />
                    <p>
                        Users
                    </p>
                </NavLink>
                <NavLink to="/admin-dashboard/homes-table"  className="flex items-center gap-2 py-2 pl-2 text-xl duration-500 rounded-xl admin-link">
                    <BsFileEarmarkRichtextFill />
                    <p>
                        Properties
                    </p>
                </NavLink>
                {/* <NavLink to="/admin-dashboard/categories-table"  className="flex items-center gap-2 py-2 pl-2 text-xl duration-500 rounded-xl admin-link">
                    <BsBookmarkFill />
                    <p>
                        Categories
                    </p>
                </NavLink> */}
                <NavLink to="/admin-dashboard/reviews-table"  className="flex items-center gap-2 py-2 pl-2 text-xl duration-500 rounded-xl admin-link">
                    <BsChatRightTextFill />
                    <p>
                        Reviews
                    </p>
                </NavLink>
                

            </div>
        </div>
    )
}
export default AdminSideBar