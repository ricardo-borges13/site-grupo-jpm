import { Outlet } from "react-router-dom";
import { HeaderTop } from "../Header/HeaderTop";
import { headerInfo } from "../Header/HeaderInfo";
import { HeaderMain } from "../Header/HeaderMain";

export const Layout = () => {
    return (
        <>
         <HeaderTop {...headerInfo} />  
         <HeaderMain />
        <Outlet />
        </>
       
    )
}

