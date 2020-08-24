import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://api-fxpractice.oanda.com',
    Headers:{
        'Authorization' : 'Bearer ecf2042a0e88e9497628277b7d152508-3f51f935fa8ae7437149c625f84c5a67',
      ' Content-Type': 'application/json'
    }
});


export default instance;