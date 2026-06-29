import style from '../styles/TeamCard.module.css'

interface TeamCardProps {
    isMobile: boolean,
    image: string,
    name: string,
    role: string
}

export const TeamCard = ({ isMobile, image, name, role }: TeamCardProps) => {
    return (
        <div className={isMobile ? style.teamCardMobile : style.teamCard}>
            <picture className={`grid-full ${style.teamPicture}`}>
                <img src={image} alt='team-member' className='w-full h-auto rounded-[inherit]' />
            </picture>
            <div className={`grid-full ${style.teamPill}`}>
                <span className={`bg-[#5700FF] ${style.teamName}`}>{name}</span>
                <span className={style.teamRole}>{role}</span>
            </div>
        </div>
    )
}
