import Panned from '@/components/common/Panned'
import { tablaServiciosHeaders, tableServiciosRows } from '../data/tabla'
import type { TableColData } from '../planes.types'
import style from '../styles/tablaComparativa.module.css'
import TitleSection from './TitleSection'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                {tablaServiciosHeaders.map(tsh => (
                    <th key={tsh.header}>
                        {tsh.header}
                        {tsh.price && (
                            <>
                                <br />
                                <small className='font-normal text-[10px]'>{tsh.price}</small>
                            </>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

const TableDataCell = ({ data }: { data: TableColData }) => {

    const text = data.text;

    if (text) return (
        <td className={`${data.isBgBlack ? 'text-[#aaa]' : ''} text-center`}>{text}</td>
    )

    const mark = data.isCheck ? "✓" : "✕"
    const style = data.isCheck ? 'text-[#22C55E]' : 'text-[#DDDDDD]'

    return (
        <td className={`${style} text-center`}>{mark}</td>
    )
}

const TablaComparativa = () => {
    return (
        <section className='bg-[#F0EDE6]'>
            <div className='max-w-7xl mx-auto'>
                <div className='py-15 p-fluid'>
                    <Panned variant='vertical'>
                        <TitleSection sectionName='tabla-comparativa' />
                    </Panned>
                    <Panned variant='vertical'>
                        <div className='overflow-hidden border border-[#ddd8f0] rounded-[18px]'>
                            <div className='w-full overflow-x-auto'>
                                <table className={style.tabla}>
                                    <colgroup>
                                        <col className='bg-[#FAFAF8] w-30' />
                                        <col className='bg-[#FDFCFF] w-26' />
                                        <col className='bg-[#F8F5FF] w-26' />
                                        <col className='bg-[#0E0E0F] w-30' />
                                        <col className='bg-[#F5FFFB] w-26' />
                                        <col className='bg-[#FDFFF5] w-26' />
                                        <col className='bg-[#FFF5FB] w-35' />
                                        <col className='bg-[#F5F8FF] w-30' />
                                        <col className='bg-[#FAF5FF] w-26' />
                                        <col className='bg-[#1A1520] w-26' />
                                    </colgroup>
                                    <TableHeader />
                                    <tbody className='text-xs'>
                                        {tableServiciosRows.map(tsr => (
                                            <tr key={tsr.servicio}>
                                                <td>{tsr.servicio}</td>
                                                {tsr.colData.map((col, index) => (
                                                    <TableDataCell key={index} data={col} />
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Panned>
                </div>
            </div>
        </section>
    )
}

export default TablaComparativa