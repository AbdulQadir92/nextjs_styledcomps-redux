

const initialState = {
    albums: [],
    album: {},
    error: {}
}

const albumReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case 'getAlbums':
            return {
                ...state,
                albums: action.payload
            }

        case 'getAlbum':
            return {
                ...state,
                album: action.payload
            }

        case 'error':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default albumReducers