import {useState} from 'react';
import { AddCategorias,GifGrid } from './components';

export const GitExpertAPP = () => {

  const [categorias, setCategorias] = useState(['Colombia'])

  const onAddCategoria = (nuevaCategoria) => {
    if(categorias.includes(nuevaCategoria)) return;
    setCategorias([nuevaCategoria, ...categorias]);
  }

  return (
    <>
        <h1>GitExpertAPP</h1>

        <AddCategorias 
          onNuevaCategoria = {onAddCategoria}
        />  
        {
          categorias.map((categorias) => (
            <GifGrid 
              key={categorias}
              categorias = {categorias}/>
          )) 
        }                
    </>
  )
}
