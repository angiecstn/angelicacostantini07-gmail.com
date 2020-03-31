import Axios from 'axios';

const KEY = 'AIzaSyCsfg2RAZD4C33y3rDOiU3Uv-gWuwp4Qsw';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});
