import React from "react";
import { Outlet } from "react-router-dom";

import NavbarComponent from "./NavbarComponent";

const Layout = () => {
    return (
        <>
            <NavbarComponent />
            <Outlet />
            <footer>
                <p>&copy; 2023 My App. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Layout;