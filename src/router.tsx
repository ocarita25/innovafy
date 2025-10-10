import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./views/HomePage"
import AboutPage from "./views/AboutPage"
import NotFoundPage from "./views/NotFoundPage"
import Layout from "./layouts/Layout"
import { Thinking } from "./views/Thinking"
import ContactPage from "./views/ContactPage"
import WorkPage from "./views/WorkPage"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/acerca-de" element={<AboutPage />} />
                    <Route path="/trabajo" element={<WorkPage />} />
                    {/* <Route path="/ideas" element={<ThinkingPage />} /> */}
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/thinking" element={<Thinking />}></Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter