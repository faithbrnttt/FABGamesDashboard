import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className="nav_container">
            <div className="user_container">
                <div className="user">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <h4 className="username">User</h4>
            </div>
            <div className="nav_design_container">
                <nav>
                    <div className="nav_link_container">
                        <NavLink className="nav_link" to="/">
                            <FontAwesomeIcon className="nav_icon" icon={faGauge} />
                            <span className="link_title">Dashboard</span>
                        </NavLink>
                        <NavLink className="nav_link" to="/employees">
                            <FontAwesomeIcon className="nav_icon" icon={faUsers} />
                            <span className="link_title">Employees</span>
                        </NavLink>
                        <NavLink className="nav_link" to="/inventory">
                            <FontAwesomeIcon className="nav_icon" icon={faWarehouse} />
                            <span className="link_title">Inventory</span>
                        </NavLink>
                        <NavLink className="nav_link" to="http://localhost:3001">
                            <FontAwesomeIcon className="nav_icon" icon={faStore} />
                            <span className="link_title">Store</span>
                        </NavLink>
                        <NavLink className="nav_link" to="/settings">
                            <FontAwesomeIcon className="nav_icon" icon={faGear} />
                            <span className="link_title">Settings</span>
                        </NavLink>
                    </div>
                    <div className="nav_link_auth_container">
                        <NavLink className="nav_link" to="/logout">
                            <FontAwesomeIcon className="nav_icon" icon={faRightFromBracket} />
                            <span className="link_title">Logout</span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
