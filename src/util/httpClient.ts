import axios from 'axios'

const url = "https://www.omdbapi.com/?apikey=1a993ee0&"

// generic http client call so these can be switched without breaking the app. App only expects promises.
export const httpGet = (endpoint: string) => {
    const request = `${url}${endpoint}`
    return axios.get(request)
}
