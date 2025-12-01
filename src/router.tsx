import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom"
import HomePage from "./views/HomePage"
import AboutPage from "./views/AboutPage"
import NotFoundPage from "./views/NotFoundPage"
import Layout from "./layouts/Layout"
import { Thinking } from "./views/Thinking"
import { DetailsPost } from "./views/DetailsPost"
import ContactPage from "./views/ContactPage"
import WorkPage from "./views/WorkPage"
import ServicesPage from "./views/ServicesPage"
import AwardsArticle from "./components/articles/awards"
// import WorkDetailPage from "./pages/WorkDetailPage"

const ServicesWrapper = () => {
    const { slug } = useParams();
    return <ServicesPage key={slug} />;
};

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/acerca-de" element={<AboutPage />} />
                    <Route path="/trabajo" element={<WorkPage />} />
                    <Route path="/servicios/:slug" element={<ServicesWrapper />} />
                    {/* <Route path="/ideas" element={<ThinkingPage />} /> */}
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/thinking" element={<Thinking />}></Route>
                    <Route path="/awards" element={<AwardsArticle />}></Route>
                    {/* <Route path="/work/:slug" element={<WorkDetailPage />} /> */}
                    <Route path="/post/:id" element={<DetailsPost />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter