import axios from 'axios'
export const axiosWithAuth = () => {

    return axios.create({
        baseURL:"https://cvid.herokuapp.com",
        headers: {
            'Access-Control-Allow-Origin': "*",
            "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
            "X-Frame-Options" : "SAMEORIGIN",
         
        }
    })
};