
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./assets/style/global"
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from "./router/AppRoutes";



function App() {

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />

    </>
  )
}

export default App
