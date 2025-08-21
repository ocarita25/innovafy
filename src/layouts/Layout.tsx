import { Outlet } from "react-router-dom"
import Header from "../components/navigation/Header"

function Layout() {
    return (
        <>
            <Header />
            <main className="container lg:max-w-[75rem] mx-auto">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
