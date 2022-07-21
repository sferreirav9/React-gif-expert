export const getGifs = async(categorias) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=xc2qWP2sZ6QFBe0AmkBWzthhSOjWedLy&q=${categorias}&limit=10`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}