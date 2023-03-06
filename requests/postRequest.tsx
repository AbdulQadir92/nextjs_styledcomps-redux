
const postRequest = (url: any, dispatch: any, type: any, data: any) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not post data');
            }
            return res.json()
        })
        .then(data => {
            dispatch({
                type: type,
                payload: data
            })
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'error',
                payload: error
            })
        })
}

export default postRequest