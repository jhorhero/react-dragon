import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Loging from "../Pages/Logign]/Loging";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<></>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/loging',
                element:<Loging></Loging>
            },
        ]
    }
])

export default routes;