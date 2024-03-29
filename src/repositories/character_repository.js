import { config } from "../utils/constants";

const getAll = async () => await send(`${config.API_URL}/people`)

const paginate = async next => await send(next);

const find = async url => {
    const response = await send(url);
    if( response ) {
        const requests = response.films.map(send);
        const movies = await Promise.all(requests);
        return { ...response, movies };
    }
    return false;
}

const search = async term => send(`${config.API_URL}/people/?search=${term}`)

const send = async url  => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch {
        return false;
    }
}


export const CharacterRepository = { 
    getAll,
    paginate,
    find,
    search
}
