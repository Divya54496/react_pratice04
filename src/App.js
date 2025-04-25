import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Body from './components/Body';
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';


//Re -usable component


const AppLayout = () =>{
    return (
        <div className="App">
        <Header/>
        <Outlet/>
        </div>
    )
}




const appRouter = createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children :[{
        path:"/",
        element:<Body/>
    },
        {
        path:"/about",
        element:<About/>
},
{
    path:"/contact-us",
    element:<ContactUs/>
},
{
    path:"/resturants/:resId",
    element:<ResturantMenu/>
}
],
errorElement:<Error/>
}])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)