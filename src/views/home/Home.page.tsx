import Main from '@/components/layouts/Main'
import { Clients, Description, FeaturedWorks, Hero, News } from './components'
import VideoExpanding from './components/VideoExpanding'
import Plans from './components/Plans'

const HomePage = () => {
    return (
        <Main>
            <Hero />
            <VideoExpanding />
            <Clients />
            <FeaturedWorks />
            <Plans />
            <Description />
            <News />
        </Main>
    )
}

export default HomePage