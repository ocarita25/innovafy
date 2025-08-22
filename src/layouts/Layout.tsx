import Footer from "@/components/layouts/Footer"
import Header from "@/components/navigation/Header"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <Header />
            <main className="mx-auto">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
