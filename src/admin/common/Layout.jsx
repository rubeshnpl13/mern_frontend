import { Outlet } from "react-router-dom";

import Navbar from "admin/common/Navbar";

function Layout()
{
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;