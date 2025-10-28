import React from 'react'
import TeamCard from './TeamCard'

const AboutTeamMobile = () => {
    return (
        <div className='min-[1024px]:hidden grid grid-cols-[repeat(2,minmax(auto,1fr))] gap-[clamp(1.25rem,1.32vw,1.66rem)] p-fluid items-start col-[1] row-end-[span_2]'>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
        </div>
    )
}

export default AboutTeamMobile