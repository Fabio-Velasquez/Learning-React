import axios from 'axios';
// this will create a customized for a specfici url with particular headers.
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CKa0Of2HT28KuZwG4_1XQtHuaFHB9dAxdpNc72n7JCM'

    }
});