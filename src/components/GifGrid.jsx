import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({categorias}) => {  

    const{imagen, isLoading}= useFetchGifs(categorias);

    return (
        <>
            <h3>{categorias}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
        
            <div className='card-grid'>
                {
                    imagen.map((imagen) => (
                        <GifItem 
                            key={imagen.id}
                            {...imagen}
                        />
                        
                    ))
                }
            </div>
        </>
    )
}
