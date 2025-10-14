
import { createBrowserRouter } from "react-router-dom"; 
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { Layout } from "../components/Layout/Layout";
import { Produtos } from "../pages/Produtos/Produtos";
import { Empresa } from "../pages/Empresa/Empresa";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/empresa",
                element: <Empresa />
            },
            { path: "/produtos", element: <Produtos /> },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);