import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Error from "../Componnets/Error/Error";
import Home from "../Componnets/Home/Home";
import Achivements from "../Componnets/Achivements/Achivements";
import About from "../Componnets/About/About";
import ServiceDetails from "../Componnets/Service/ServiceDetails";
import Login from "../Componnets/Authentications/Login";
import Register from "../Componnets/Authentications/Register";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../Componnets/Contact/Contact";



    const router = createBrowserRouter(
        [
            {
                path:"/",
                element:<Root></Root>,
                errorElement:<Error></Error>,
                children :[
                    {
                        path:"/",
                        element:<Home></Home>,
                        loader:()=>fetch('/service.json')
                    },
                    {
                        path:"/achivements",
                        element:<PrivateRoutes><Achivements></Achivements></PrivateRoutes>,
                    },
                   {
                    path:"/about",
                    element:<PrivateRoutes><About></About></PrivateRoutes>,

                   },
                   {
                    path:"/details/:id",
                    element:<PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>
                   
                   },
                   {
                    path:"/login",
                    element:<Login></Login>,
                   },
                   {
                    path:"/register",
                    element:<Register></Register>
                   },
                   {
                    path:"/contact",
                    element:<Contact></Contact>,
                   }
                ]
                
            }

        ]
    )
    


export default router;
