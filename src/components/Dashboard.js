import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className="dash_container">
            <NavBar />

            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
