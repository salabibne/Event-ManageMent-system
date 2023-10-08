import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Error from "../Componnets/Error/Error";
import Home from "../Componnets/Home/Home";
import Achivements from "../Componnets/Achivements/Achivements";
import About from "../Componnets/About/About";
import ServiceDetails from "../Componnets/Service/ServiceDetails";
import Login from "../Componnets/Authentications/Login";
import Register from "../Componnets/Authentications/Register";



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
                        element:<Achivements></Achivements>,
                    },
                   {
                    path:"/about",
                    element:<About></About>,

                   },
                   {
                    path:"/details/:id",
                    element:<ServiceDetails></ServiceDetails>,
                   
                   },
                   {
                    path:"/login",
                    element:<Login></Login>,
                   },
                   {
                    path:"/register",
                    element:<Register></Register>
                   },
                ]
                
            }

        ]
    )
    


export default router;
