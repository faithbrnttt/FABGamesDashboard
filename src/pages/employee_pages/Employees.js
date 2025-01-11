import { Outlet } from "react-router-dom";
import EmployeeOverview from "./EmployeeOverview";

const Employees = () => {
    return (
        <div className="employee_page_container">
            <div className="employee_page_sub_container">
                <h1 className="title">Employee Management</h1>
            </div>

            <div className="overview">
                <EmployeeOverview />
            </div>
            
            <div className="employee_content">
                <Outlet />
            </div>    
        </div>
    )
}

export default Employees
