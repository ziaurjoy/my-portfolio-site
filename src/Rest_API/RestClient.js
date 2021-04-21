import axios from 'axios'

class RestClinet {
    static GetRequest = (getUrl) => {
        return axios.get(getUrl).then(response =>{
            return response.data
        }).catch(error =>{
            return error 
        })
    }
}

export default RestClinet