import { ButtonWhite } from '@/components/common/Button'
import PannedText from '@/components/common/PannedText'
import { workCategories as categories } from '@/views/work/data/categories'
import { Link, useLocation } from 'react-router-dom'

const WorkPage = () => {

    const location = useLocation()

    return (
        <div className='grid gap-15 py-20 '>
            <div className="flex flex-col text-color-primary px-[var(--container-gutter)] w-full tracking-normal font-medium text-[clamp(3rem,8dvw,9dvw)] lg:text-[clamp(5rem,7dvw,12dvw)]">
                <PannedText className='overflow-hidden'>
                    Productos digitales de clase mundial, de la idea a la ejecución.
                </PannedText>
            </div>

            <div className='flex items-center flex-wrap gap-2 px-[var(--container-gutter)]'>
                {categories.map(category => (
                    <Link to={category.link} key={category.category}>
                        <ButtonWhite isActive={category.link === location.pathname}>{category.label}</ButtonWhite>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default WorkPage