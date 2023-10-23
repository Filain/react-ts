const baseURL='https://rickandmortyapi.com/api'
const character = '/character'

const urls = {
    characters:{
        base:character,
        byId:(id:number)=>`${character}/${id}`
    }
}

export {
    baseURL,
    urls
}