import { Outlet } from "react-router-dom";
import { HeaderTop } from "../Header/HeaderTop";
import { headerInfo } from "../Header/headerInfo";
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

