import { dataVissPage } from "./whatWeDo/dataViss";
import { designSystemPage } from "./designUX/designSystems";
import { eCommercePage } from "./whatWeDo/eCommerce";
import { mobileAppsPage } from "./whatWeDo/mobileApps";
import { prototypingPage } from "./designUX/prototyping";
import { uiDesignPage } from "./designUX/uiDesign";
import { userReasearchPage } from "./designUX/userResearch";
import { uxDesignPage } from "./designUX/uxDesign";
import { webAppsPage } from "./whatWeDo/webApps";
import { websitesPage } from "./whatWeDo/websites";
import { headlessPage } from "./tecnologia/headless";
import { reactPage } from "./tecnologia/reactjs";
import { payloadPage } from "./tecnologia/payloadCMS";
import { laravelPage } from "./tecnologia/laravel";
import { commercialPage } from "./experience/commercial";
import { notForProfitPage } from "./experience/notForProfit";
import { innovationPage } from "./experience/innovation";
import { educationPage } from "./experience/education";
import { communityPage } from "./experience/community";
import { aiAtuomationPage } from "./tecnologia/aiAutomation";

const servicesPages = [
    {
        slug: "sitios-web",
        page: websitesPage
    },
    {
        slug: "aplicaciones-web",
        page: webAppsPage
    },
    {
        slug: "aplicaciones-moviles",
        page: mobileAppsPage
    },
    {
        slug: "ecommerce",
        page: eCommercePage
    },
    {
        slug: "visualizacion-datos",
        page: dataVissPage
    },
    {
        slug: "investigacion-validacion-usuarios",
        page: userReasearchPage
    },
    {
        slug: "diseno-experiencia-usuario",
        page: uxDesignPage
    },
    {
        slug: "diseno-interfaz-usuario",
        page: uiDesignPage
    },
    {
        slug: "prototipado",
        page: prototypingPage
    },
    {
        slug: "sistemas-diseno",
        page: designSystemPage
    },
    {
        slug: "headless",
        page: headlessPage
    },
    {
        slug: "react-js",
        page: reactPage
    },
    {
        slug: "payload-cms",
        page: payloadPage
    },
    {
        slug: "laravel",
        page: laravelPage
    },
    {
        slug: "ia-automatizacion",
        page: aiAtuomationPage
    },
    {
        slug: "comercial",
        page: commercialPage
    },
    {
        slug: "sin-fines-de-lucro",
        page: notForProfitPage
    },
    {
        slug: "innovacion-startups",
        page: innovationPage
    },
    {
        slug: "educacion",
        page: educationPage
    },
    {
        slug: "comunidad",
        page: communityPage
    },
]

export const servicePageContent = (slug: string) => {
    const content = servicesPages.find(d => d.slug === slug)
    if (!content) return null
    return content.page
}