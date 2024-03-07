import axios from 'axios'

const api_url = 'http://localhost:3005/'

const api = {
    post: async (url, params, headers = {}) => {
        try {
            const data = await axios.post(api_url + url, params, { headers: headers })
            return data
        } catch (e) {
            throw e
        }
    },
    put: async (url, params, headers = {}) => {
        try {
            const data = await axios.put(api_url + url, params, { headers: headers })
            return data
        } catch (e) {
            throw e
        }
    },
    get: async (url, params, headers = {}) => {
        try {
            const data = await axios.get(api_url + url, { headers: headers, params: params })
            return data
        } catch (e) {
            throw e
        }
    },
    update: async (url, params, headers = {}) => {
        try {
            const data = await axios.post(url, params, { headers: headers })
            return data
        } catch (e) {
            throw e
        }
    },
    delete: async (url, headers = {}) => {
        console.log(headers)
        try {
            const data = await axios.delete(api_url + url, { headers: headers })
            return data
        } catch (e) {
            throw e
        }
    },
}

export default api
