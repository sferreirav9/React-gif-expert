import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categorias) => {

    const[imagen, setImagen] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    const getImagen = async() =>{
        const newImagen = await getGifs(categorias);
        setImagen(newImagen);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getImagen();
    }, [])

    return{
        imagen,
        isLoading
    }
}
