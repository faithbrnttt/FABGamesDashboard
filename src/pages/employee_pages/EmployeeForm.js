

const EmployeeForm = () => {
    return (
        <div className="employee_form_content">
            <h1>Add Employee</h1>
            <div className="actions">
                <button><NavLink to="/employees/add"></NavLink>Add Employee</button>
                <button><NavLink to="/employees/update"></NavLink>Update Employee</button>
                <button><NavLink to="/employees/delete"></NavLink>Delete Employee</button>
            </div>
        </div>
    )
}

export default EmployeeForm
