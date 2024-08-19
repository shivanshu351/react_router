import React from "react";
import Header from "../components/header/header";
import { Outlet } from "react-router-dom";  // Ensure correct import
import Footer from "../components/footer/footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
