import fetchRequest from "../../requests/fetchRequest"

export const getAlbums = () => {
    return (dispatch: any) => {
        fetchRequest('https://jsonplaceholder.typicode.com/photos?_limit=100', dispatch, 'getAlbums');
    }
}

export const getAlbum = (id: number) => {
    return (dispatch: any) => {
        fetchRequest('https://jsonplaceholder.typicode.com/photos/' + id, dispatch, 'getAlbum');
    }
}