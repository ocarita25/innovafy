import Main from '@/components/layouts/Main'
import { Clients, Description, FeaturedWorks, Hero, News } from './components'
import VideoExpanding from './components/VideoExpanding'

const HomePage = () => {
    return (
        <Main>
            <Hero />
            <VideoExpanding />
            <Clients />
            <FeaturedWorks />
            <Description />
            <News />
        </Main>
    )
}

export default HomePage