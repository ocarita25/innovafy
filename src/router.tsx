import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./views/HomePage"
import Layout from "./layouts/Layout"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter