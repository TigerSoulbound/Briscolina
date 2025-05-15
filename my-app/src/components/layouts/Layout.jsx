import React from 'react';

import NavbarComponent from './NavbarComponent';

import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
            <NavbarComponent/>
            <Outlet/>
            <footer>
                <p>&copy; 2023 My App. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Layout;