import { NavLink } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <div>404 Not Found</div>
            <NavLink className="nav_link" to="/">Dashboard</NavLink>
        </div>
    )
}

export default NotFound
