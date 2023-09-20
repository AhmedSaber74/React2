
import React from 'react'
import NAvbar from './NAvbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {



    return (
        
        <div>

            <NAvbar/>
            <Outlet/>
            <Footer/>
           
        </div>

    )
}
