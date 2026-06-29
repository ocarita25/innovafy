import Main from '@/components/layouts/Main'
import Hero from './components/Hero'
import Diferencial from './components/Diferencial'
import TablaComparativa from './components/TablaComparativa'
import PlanPersonalizado from './components/PlanPersonalizado'
import Servicios from './components/Servicios'
import { useState } from 'react'

const PlanesPage = () => {

    const [categoriaActiva, setCategoriaActiva] = useState<'inicio' | 'crecimiento' | 'liderazgo'>('inicio');

    function handleCambiarCategoria(categoria: 'inicio' | 'crecimiento' | 'liderazgo') {
        setCategoriaActiva(categoria)
    }

    return (
        <Main>
            <div>
                <Hero categoriaActiva={categoriaActiva} seleccionarCategoria={handleCambiarCategoria} />
                <Servicios categoria={categoriaActiva} />
                <Diferencial />
                <TablaComparativa />
                <PlanPersonalizado />
            </div>
        </Main>
    )
}

export default PlanesPage