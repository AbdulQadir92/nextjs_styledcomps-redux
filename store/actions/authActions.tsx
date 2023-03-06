import postRequest from "../../requests/postRequest"


export const login = (loginData: any) => {
    return (dispatch: any) => {
        postRequest('https://jsonplaceholder.typicode.com/users', dispatch, 'login', loginData);
    }
}

export const logout = () => {
    return (dispatch: any) => {
        dispatch({
            type: 'logout'
        })
    }
}

export const signup = (signupData: any) => {
    return (dispatch: any) => {
        dispatch({
            type: 'signup',
            payload: signupData
        })
    }
}