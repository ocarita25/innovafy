import style from './styles/TeamCard.module.css'

const TeamCard = ({ isMobile }: { isMobile?: Boolean }) => {
    return (
        <div className={isMobile ? style.teamCardMobile : style.teamCard}>
            <picture className={`grid-full ${style.teamPicture}`}>
                <img src='/images/staff/persona2.webp' alt='team-member' className='w-full h-auto rounded-[inherit]' />
            </picture>
            <div className={`grid-full ${style.teamPill}`}>
                <span className={style.teamName}>Oscar</span>
                <span className={style.teamRole}>Front-end Developer</span>
            </div>
        </div>
    )
}

export default TeamCard