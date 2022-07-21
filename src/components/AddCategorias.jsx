import { useState } from 'react'

export const AddCategorias = ({onNuevaCategoria}) => {

    const [inputValue, setInputValue] = useState('');

    const onChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
         event.preventDefault();
         if(inputValue.trim().length <= 1) return;
        // setCategorias(categorias => [inputValue, ...categorias]);
        onNuevaCategoria( inputValue.trim() );
         setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type= "text"
                placeholder = "Buscar Paises" 
                value = {inputValue} 
                onChange = {onChange}>        
            </input>
        </form>
        
    )
}
