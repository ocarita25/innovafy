import type { PlanType } from "../planes.types"

const PlanCard = ({ plan, variante, popular = false, onOpenBrief }:
    {
        plan: PlanType,
        variante: 'basico' | 'regular' | 'pro',
        popular?: boolean
        onOpenBrief: () => void
    }) => {

    const pd = plan

    const bg: Record<string, any> = {
        "basico": {
            bgCard: 'bg-[#fff]',
            tag: 'bg-[#ECE8FF] border-[#D5CDFF] text-[#4300FF]',
            accent: 'text-[#5700ff]',
            color: 'text-[#222]',
            price: 'text-[#4700ff]',
            button: 'bg-[#5700ff] text-color-secondary',
            check: "bg-[#ece8ff]"
        },
        "regular": {
            bgCard: 'bg-[#4700ff]',
            tag: 'bg-[#5D39FF] border-[#8069FF]',
            accent: 'text-[#FFF]',
            color: 'text-[#fff]',
            price: 'text-[#fff]',
            button: 'bg-white text-[#4700ff]',
            check: "bg-[#ffffff26]"
        },
        "pro": {
            bgCard: 'bg-[#1A1520]',
            tag: 'bg-[#1F163B] border-[#271668] text-[#4700ff]',
            accent: 'text-[#5700ff]',
            color: 'text-[#ccc]',
            price: 'text-[#fff]',
            button: 'bg-[#5700ff] text-color-secondary',
            check: "bg-[#4400ff26]"
        }
    }[variante]

    return (
        <div className={`${bg.bgCard} ${bg.color} relative rounded-3xl border border-[#5700ff33] px-8 py-10`}>
            {popular && (
                <div className="absolute top-5 right-5 flex">
                    <div className="bg-white rounded-full px-3 py-1.5 text-[#4700ff] uppercase text-xs font-medium tracking-widest flex items-center gap-2">
                        <span>⭐</span>
                        <span> Más popular</span>
                    </div>
                </div>
            )}
            <div>
                <h4 className={`${bg.accent} text-[.65rem] tracking-[4px] uppercase mb-3 opacity-80 font-semibold`}>
                    {pd.plan}
                </h4>
                <h3 className='text-[3.25rem] font-bold playfair !mb-0'>
                    {pd.title}
                </h3>
                <p className='text-[0.95rem] opacity-55 leading-6'>{pd.description}</p>
                <div className={`${bg.color} mt-10 text-[0.95rem] leading-8`}>
                    <span className="opacity-60">Inversión desde </span>
                    <span className={`${bg.price} text-xl`}>S/</span>
                    <span className={`${bg.price} text-[55px] font-bold playfair`}>{pd.costo}</span>
                    {pd.centimos && (<span className={`${bg.price} text-xl playfair`}>{pd.centimos}</span>)}
                    <br />
                    <span className="opacity-60">/ mes · {pd.planDetail}</span>
                </div>
            </div>
            <hr className="my-6" />
            <div>
                <div className={`${bg.tag} border rounded-2xl px-4 py-3 flex flex-col gap-3 font-medium tracking-wider w-fit text-[.7rem]`}>
                    <span>{pd.tags}</span>
                </div>
                <div className="mb-5">
                    {pd.services.map((service, i) => (
                        <div key={i} className="font-normal">
                            <h5 className="my-4 opacity-40 uppercase text-[0.65rem] tracking-[2px]">{service.title}</h5>
                            <ul className="flex flex-col gap-4">
                                {service.items.map((item, j) => (
                                    <li key={j} className="flex gap-2">
                                        <div className={`${bg.accent} ${bg.check} flex h-fit p-[6px] rounded-full aspect-square text-[0.45rem]`}><span>✓</span></div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[0.8rem]">{item.service}</span>
                                            {item.description && (<span className="opacity-40 text-[0.75rem]">{item.description}</span>)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <div className={`${bg.tag} border rounded-2xl px-4 py-3 flex flex-col gap-3 text-sm font-normal`}>
                        <strong><span>{pd.targetTitle}</span></strong>
                        <p>{pd.target}</p>
                    </div>
                    <button className={`${bg.button} uppercase w-full px-5 py-4 rounded-xl`} onClick={onOpenBrief}>{pd.button}</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default PlanCard