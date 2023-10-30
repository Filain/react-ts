import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {HomePage} from "./pages/HomePage";
import {CarPage} from "./pages/CarPage";
import {SelectedCarPage} from "./pages/SelectedCarPage";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true, element:<Navigate to={'home'}/>},
            {path:'home', element:<HomePage/>},
            {path:'cars', element:<CarPage/>, children:[
                    {path:'select', element:<SelectedCarPage/>}
                ]}
        ]}
])

export {
    router
}

 