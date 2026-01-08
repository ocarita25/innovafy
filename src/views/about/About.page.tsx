import Main from '@/components/layouts/Main'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import AutoSlider from './components/AutoSlider'
import { clientsImages } from '@/constants/about'
import Awards from './components/Awards'
import Staff from './components/Staff'
import Customers from './components/Customers'
import Capabilities from './components/Capabilities'
import WhoWeAre from './components/WhoWeAre'
import WhatWeDo from './components/WhatWeDo'

const AboutPage = () => {
    const { images, clientes } = clientsImages()
    return (
        <Main className='-mt-20 pt-0'>
            <Hero />
            <AboutUs />
            <AutoSlider images={images} />
            <Customers clientes={clientes} />
            <Capabilities />
            <WhoWeAre />
            <Staff />
            <Awards clientes={clientes} />
            <WhatWeDo />
        </Main>
    )
}

export default AboutPage