import React from 'react'
import ReactDOM from 'react-dom/client'
import Furniture from './components/Furniture.jsx'
import Fashion from './components/Fashion.jsx'
import Wearables from './components/Wearables.jsx'
import Smartdevice from './components/Smartdevice.jsx'
import TvandAppliance from './components/Tv&Appliance.jsx'
// import App from './App.jsx'
// import Home from './Home.jsx'



import {createBrowserRouter,RouterProvider} from "react-router-dom";


const router=createBrowserRouter([
  
    {
      path:'/Furniture',
      element:<Furniture/>
    },
    {
      path:'/Fashion',
      element:<Fashion/> 
    },
    {
      path:'/Wearables',
      element:<Wearables/> 
    },
    {
      path:'/Smartdevice',
      element:<Smartdevice/> 
    },
    {
      path:'/Tv&Appliance',
      element:<TvandAppliance/> 
    },
    // {
    //   path:'/',
    //   element:<App/> 
    // }
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
