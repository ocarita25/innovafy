import React from 'react'
import TeamCard from './TeamCard'
import Scrollable from '../common/Scrollable'

export const AboutTeamMobile = () => {
    return (
        <div className='min-[1024px]:hidden grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-[clamp(1.25rem,1.32vw,1.66rem)] p-fluid items-start col-[1] row-end-[span_2]'>
            <TeamCard isMobile={true} />
            <TeamCard isMobile={true} />
            <TeamCard isMobile={true} />
            <TeamCard isMobile={true} />
            <TeamCard isMobile={true} />
            <TeamCard isMobile={true} />
        </div>
    )
}

export const AboutTeamDesktop = () => {

    return (
        <div className='max-[1024px]:hidden grid grid-cols-4 gap-[clamp(1.25rem,1.32vw,1.66rem)] p-fluid items-start'>
            <Scrollable yOriginal={20} yTarget={-20} start='top bottom' end='bottom top'>
                <div className='grid gap-5'>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </Scrollable>
            <div className='grid gap-5'>
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
            <Scrollable yOriginal={20} yTarget={-20} start='top bottom' end='bottom top'>
                <div className='grid gap-5'>
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </Scrollable>
            <div className='grid gap-5'>
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    )
}

const AboutTeam = () => {
    return (
        <div className='mb-40'>
            <AboutTeamMobile />
            <AboutTeamDesktop />
        </div>
    )
}

export default AboutTeam