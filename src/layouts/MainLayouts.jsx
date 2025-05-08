import {Outlet} from 'react-router'
import Navbar from '../pages/navbar'
import Footer from '../pages/footer'
import "../App.css"

function Layout() {
    return (
        <div>
            <Navbar/>
            <main className='mainLayout'>
                <Outlet/>
            </main>
            <Footer/>
        </div >
    )
}

export default Layout