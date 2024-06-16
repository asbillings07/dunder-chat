import Axios from 'axios'

export const requestApi = (path, method = "GET", body = null) => {
    const url = `https://dummyjson.com/${path}`

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }

    if (body !== null) {
        options.data = body
    }

    return Axios(url, options)
}