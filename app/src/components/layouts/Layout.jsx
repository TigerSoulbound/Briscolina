import React from "react";
import { Outlet } from "react-router-dom";

import NavbarComponent from "./NavbarComponent";

const Layout = () => {
    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    )
}

export default Layout;