import Main from '@/components/layouts/Main'
import WorkPage from './Work.page'
import { Outlet } from 'react-router-dom'

const WorkLayout = () => {
    return (
        <Main className="mt-5 grid pb-17">
            <WorkPage />
            <Outlet />
        </Main>
    )
}

export default WorkLayout