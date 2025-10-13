import { Outlet } from "react-router-dom";
import { HeaderTopo } from "../Header/HeaderTopo";
import { headerInfo } from "../Header/HeaderInfo";

export const Layout = () => {
    return (
        <>
         <HeaderTopo info={headerInfo} />  
        <Outlet />
        </>
       
    )
}

