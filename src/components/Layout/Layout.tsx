import { Outlet } from "react-router-dom";
import { HeaderTop } from "../Header/HeaderTop";
import { headerInfo } from "../Header/headerInfo";
import { HeaderMain } from "../Header/HeaderMain";
import { Footer } from "../Footer/Footer";


export const Layout = () => {
    return (
        <>
         <HeaderTop {...headerInfo} />
         <HeaderMain />
        <Outlet />
        <Footer />
        </>

    )
}

