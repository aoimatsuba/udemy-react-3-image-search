import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f84b9e9ef755edcb7a74e75c7f22ef76644d0b8f07714dbdd9d4eb5ae9f1d640'
    }
})
