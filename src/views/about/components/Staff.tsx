import { TeamCard as NewTeamCard } from './TeamCard'
import Scrollable from '@/components/common/Scrollable'
import { staff } from '../data/staff'
import { splitIntoChunks } from '@/utils/splitIntoChunks'

export const AboutTeamMobile = () => {
    return (
        <div className='min-[1024px]:hidden grid grid-cols-1 min-[500px]:grid-cols-[repeat(2,minmax(auto,1fr))] gap-[clamp(1.25rem,1.32vw,1.66rem)] p-fluid items-start min-[500px]:col-[1] min-[500px]:row-end-[span_2]'>
            {staff.map(person => (
                <NewTeamCard key={person.name} isMobile={true} image={person.image} name={person.name} role={person.role} />
            ))}
        </div>
    )
}

export const AboutTeamDesktop = () => {

    const groupConfig = [
        { autoScroll: true },
        { autoScroll: false },
        { autoScroll: true },
        { autoScroll: false },
    ]

    const groups = splitIntoChunks(staff, groupConfig.length)

    return (
        <div className='max-[1024px]:hidden grid grid-cols-4 gap-[clamp(1.25rem,1.32vw,1.66rem)] p-fluid items-start'>
            {groupConfig.map((groupConfig, index) => {
                return (
                    groupConfig.autoScroll ?
                        <Scrollable key={index} yOriginal={20} yTarget={-20} start='top bottom' end='bottom top'>
                            <div className='grid gap-5'>
                                {groups[index].map(group => (
                                    <NewTeamCard key={group.name} isMobile={false} image={group.image} name={group.name} role={group.role} />
                                ))}
                            </div>
                        </Scrollable>
                        :
                        <div key={index} className='grid gap-5'>
                            {groups[index].map(group => (
                                <NewTeamCard key={group.name} isMobile={false} image={group.image} name={group.name} role={group.role} />
                            ))}
                        </div>
                )
            })}
        </div>
    )
}

const Staff = () => {
    return (
        <div className='mb-40'>
            <AboutTeamMobile />
            <AboutTeamDesktop />
        </div>
    )
}

export default Staff