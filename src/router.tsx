import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CarsPages} from "./pages/CarsPages";

let router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'cars'}/>},
            {path:'cars', element: <CarsPages/>}
        ]}
])

export {router}

