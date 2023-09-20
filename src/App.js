import React from 'react';
import { RouterProvider, createBrowserRouter,createHashRouter } from 'react-router-dom';
import Layout from './Componants/Layout';
import Home from './Componants/Home';
import NAvbar from './Componants/NAvbar';
import Contact from './Componants/Contact';
import Footer from './Componants/Footer';
import About from './Componants/About';
import Notfound from './Componants/Notfound';
import START_FRAMEWORK from './Componants/START_FRAMEWORK';

export default function App() {
  let Routes = createHashRouter([
    {
      path:"" ,element:<Layout/>,
      children: [
        { path:"",element: <Home></Home> },
        { path:"home",element: <Home></Home> },
        { path:"START_FRAMEWORK",element: <START_FRAMEWORK/>},
        { path:"about",element: <About/>},
        { path:"Contact",element: <Contact/> },
        { path:"*",element: <Notfound/> },

      ]
    }

  ])

  return <RouterProvider router={Routes}/>

}
