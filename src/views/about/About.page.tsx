import Main from '@/components/layouts/Main'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Staff from './components/Staff'
import Capabilities from './components/Capabilities'
import WhoWeAre from './components/WhoWeAre'
import WhatWeDo from './components/WhatWeDo'
import Customers from './components/Customers'
import { customers } from '@/data/customers'

const AboutPage = () => {
    return (
        <Main className='-mt-20 pt-0'>
            <Hero />
            <AboutUs />
            <Customers customers={customers} />
            <Capabilities />
            <WhoWeAre />
            <Staff />
            <WhatWeDo />
        </Main>
    )
}

export default AboutPage