import { Outlet } from "react-router-dom"

const Inventory = () => {
    return (
        <div class="inventory_page_container">
            <h1 className="title">Inventory Page</h1>

            <div className="sub_content">
                <Outlet />
            </div>
        </div>
    )
}

export default Inventory
