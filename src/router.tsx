import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom"
import AboutPage from "./views/AboutPage"
import NotFoundPage from "./views/NotFoundPage"
import Layout from "./layouts/Layout"
import ContactPage from "./views/ContactPage"
import ServicesPage from "./views/ServicesPage"
import AwardsArticle from "./components/articles/Awards"
import HomePage from "./views/home/Home.page"
import WorkLayout from "./views/work/Work.layout"
import WorkWrapper from "./views/work/Work.wrapper"
import ThinkingPage from "./views/thinking/Thinking.page"

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
                    <Route path="/trabajo" element={<WorkLayout />}>
                        <Route index element={<WorkWrapper />} />
                        <Route path=":category" element={<WorkWrapper />} />
                    </Route>
                    <Route path="/servicios/:slug" element={<ServicesWrapper />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/thinking" element={<ThinkingPage />}></Route>
                    <Route path="/awards" element={<AwardsArticle />}></Route>
                    {/* <Route path="/work/:slug" element={<WorkDetailPage />} /> */}
                    {/* <Route path="/post/:id" element={<DetailsPost />} /> */}
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter