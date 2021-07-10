import axios from 'axios';

const KEY = 'AIzaSyA1cxRicqzceqE9A-K4E2bBOZ6ABNjRwIA';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
       
    }
});











