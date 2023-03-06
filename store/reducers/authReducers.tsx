const initialState = {
    user: {},
    error: {}
}

const authReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                user: action.payload
            }

        case 'logout':
            return {
                ...state,
                user: {}
            }

        case 'signup':
            return {
                ...state,
                user: action.payload
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

export default authReducers